import {Injectable} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoggerService } from '@Infrastructures/service/logger';

@Injectable()
export class BcryptService {

  constructor(
    private readonly logger : LoggerService
  ) {
  }

  async hash(param: string): Promise<string> {
    this.logger.log('Start BcryptService.hash',`param: ${JSON.stringify(param)}`)
    const saltRounds = 10;
    var dataHash = await bcrypt.hash(param, saltRounds);
    this.logger.log(`End BcryptService.hash `,`dataHash: ${JSON.stringify(dataHash)}`)
    return dataHash;
  }

  async compare(param: string, hashedParam: string): Promise<boolean> {
    this.logger.log('Start BcryptService.compare',`param: ${JSON.stringify(param)}`)
    var isCheckHash = await bcrypt.compare(param, hashedParam);
    this.logger.log(`End BcryptService.generateAccessToken `,`isCheckHash: ${JSON.stringify(isCheckHash)}`)
    return isCheckHash
  }
}