import {Module} from '@nestjs/common';
import { AuthController } from "@Api/auth/auth.controller";
import { JwtModule } from "@Infrastructures/service/jwt";
import { BcryptModule } from "@Infrastructures/service/bcrypt";
import { AuthService } from "@Usecase/auth";


@Module({
  imports: [JwtModule, BcryptModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {
}