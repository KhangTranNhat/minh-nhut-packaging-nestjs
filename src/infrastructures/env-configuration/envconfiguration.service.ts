import {Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';

@Injectable()
export class EnvConfigurationService {
  constructor(private readonly configService: ConfigService) {
  }

  //Get Config Cloudinary
  getCloudinaryCloudName(): string {
    return this.configService.get<string>('CLOUDINARY_CLOUD_NAME');
  }

  getCloudinaryApiKey(): string {
    return this.configService.get<string>('CLOUDINARY_APIKEY');
  }

  getCloudinaryApiSecret(): string {
    return this.configService.get<string>('CLOUDINARY_APISECRET');
  }

  getCloudinaryFolder(): string {
    return this.configService.get<string>('CLOUDINARY_FOLDER');
  }

  //Get Config Database
  getDatabaseURI() {
    return this.configService.get<any>('DATABASE_URI');
  }
  getLogDatabaseName(): string {
    return this.configService.get<string>('DATABASE_NAME');
  }

  // Get Config Authentication
  getPublicKey(): string {
    return this.configService.get<string>('PUBLIC_KEY');
  }

  getAccessExpirationTime(): string {
    return this.configService.get<string>('EXPIRES_IN');
  }

  //Send Mail
  getMailUser(): string {
    return this.configService.get<string>('MAIL_INCOMING_USER');
  }

  getMailPass(): string {
    return this.configService.get<string>('MAIL_INCOMING_PASS');
  }

  getMailHost(): string {
    return this.configService.get<string>('MAIL_INCOMING_HOST');
  }

  getMailPort(): number {
    return this.configService.get<number>('MAIL_INCOMING_PORT');
  }

  getMailOTPSubject(): string {
    return this.configService.get<string>('MAIL_OTP_SUBJECT');
  }

  getMailOtpTemplate(): string {
    return this.configService.get<string>('MAIL_OTP_TEMPLATE');
  }
}