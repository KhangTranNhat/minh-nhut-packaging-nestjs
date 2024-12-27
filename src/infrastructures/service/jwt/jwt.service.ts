import {Injectable} from '@nestjs/common';
import {JwtService as JwtLibraryService} from '@nestjs/jwt';
import { EnvConfigurationService } from "@Infrastructures/env-configuration";
import { LoggerService } from '@Infrastructures/service/logger';

@Injectable()
export class JwtService {
  private readonly publicKey;
  private readonly expiresIn;

  constructor(
    private readonly configService: EnvConfigurationService,
    private readonly jwtLibraryService: JwtLibraryService,
    private readonly logger : LoggerService
  ) {
    this.publicKey = configService.getPublicKey();
    this.expiresIn = configService.getAccessExpirationTime();
  }

   generateAccessToken(payload: any) {
      this.logger.log('Start JwtService.generateAccessToken',`payload: ${JSON.stringify(payload)}`)
     const accessToken = this.jwtLibraryService.sign(payload, {secret: this.publicKey, expiresIn: this.expiresIn});
     this.logger.log(`End JwtService.generateAccessToken `,`accessToken: ${JSON.stringify(accessToken)}`)
      return accessToken
  }
   validateAccessToken(token: string) {
     this.logger.log('Start JwtService.validateAccessToken',`token: ${JSON.stringify(token)}`)
     const isValid =this.jwtLibraryService.verify<any>(token, {secret: this.publicKey});
     this.logger.log(`End JwtService.validateAccessToken `,`isValid: ${JSON.stringify(isValid)}`)
     return isValid;
  }
}