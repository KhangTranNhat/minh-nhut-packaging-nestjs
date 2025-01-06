import { Injectable } from '@nestjs/common';
import { UserRepository } from '@Infrastructures/mongoose/repositories';
import { BadRequestException } from '@Infrastructures/exception';
import { ErrorCode } from '@Core/constants';
import { BcryptService } from '@Infrastructures/service/bcrypt';
import { JwtService } from '@Infrastructures/service/jwt';
import { LoggerService } from '@Infrastructures/service/logger';
import { LoginRequestDto } from '@Api/auth/dto/request';
import { AuthResponseDto } from '@Api/auth/dto/response';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly bcryptService: BcryptService,
    private readonly jwtService: JwtService,
    private readonly logger : LoggerService
  ) {}

  async login(param: LoginRequestDto) {
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
    const dataReturn = new AuthResponseDto({
      accessToken,
    });
    this.logger.log('End AuthService.login',`dataReturn: ${JSON.stringify(dataReturn)}`)
    return dataReturn;
  }
}
