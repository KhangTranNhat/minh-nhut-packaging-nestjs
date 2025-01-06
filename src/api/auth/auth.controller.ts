import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AUTH_ENDPOINTS } from '@Core/constants';
import { ApiResponse } from '@Infrastructures/decorator';
import { AuthService } from '@Usecase/auth';
import { AuthResponseDto } from '@Api/auth/dto/response';
import { LoginRequestDto } from '@Api/auth/dto/request';

@ApiTags('Auth Controller')
@Controller(AUTH_ENDPOINTS.CONTROLLER)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(AUTH_ENDPOINTS.LOGIN)
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ type: AuthResponseDto })
  async login(@Body() param: LoginRequestDto) {
    const result =await this.authService.login(param);
    return result;
  }
}
