import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AUTH_ENDPOINTS } from '@Core/constants';
import { ApiResponse } from '@Infrastructures/decorator';
import { AuthResultDto } from '@Api/auth/dto/result';
import { LoginParamDto } from '@Api/auth/dto/param';
import { AuthService } from '@Usecase/auth';

@ApiTags('Auth Controller')
@Controller(AUTH_ENDPOINTS.CONTROLLER)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(AUTH_ENDPOINTS.LOGIN)
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ type: AuthResultDto })
  async login(@Body() param: LoginParamDto) {
    const result = this.authService.login(param);
    return result;
  }
}
