import { Injectable } from '@nestjs/common';
import { UserRepository } from '@Infrastructures/mongoose/repositories';
import { LoginParamDto } from '@Api/auth/dto/param';
import { BadRequestException } from '@Infrastructures/exception';
import { ErrorCode } from '@Core/constants';
import { AuthResultDto } from '@Api/auth/dto/result';
import { BcryptService } from '@Infrastructures/service/bcrypt';
import { JwtService } from '@Infrastructures/service/jwt';
import { LoggerService } from '@Infrastructures/service/logger';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly bcryptService: BcryptService,
    private readonly jwtService: JwtService,
    private readonly logger : LoggerService
  ) {}

  async login(param: LoginParamDto) {
    this.logger.log('Start AuthService.login',`param: ${JSON.stringify(param)}`)
    const { username, password } = param;

    const user = await this.userRepository.findOneByCondition({
      username: username,
    });

    if (!user) throw new BadRequestException('AUTH001', ErrorCode.AUTH001);

    const isCheckPassword =await this.bcryptService.compare(password, user.password);

    if (!isCheckPassword) throw new BadRequestException('AUTH001', ErrorCode.AUTH001);

    const accessToken = this.jwtService.generateAccessToken({
      userId: user._id,
    });
    const dataReturn = new AuthResultDto({
      accessToken,
    });
    this.logger.log('End AuthService.login',`dataReturn: ${JSON.stringify(dataReturn)}`)
    return dataReturn;
  }
}
