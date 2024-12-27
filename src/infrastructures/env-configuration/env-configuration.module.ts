import {Global, Module} from '@nestjs/common';
import {EnvConfigurationService} from './envconfiguration.service';
import {ConfigModule} from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'development' ? '.env.development' : '.env',
      isGlobal: true,
      cache: true,
      expandVariables: true,
    }),
  ],
  providers: [EnvConfigurationService],
  exports: [EnvConfigurationService],
})
export class EnvConfigurationModule {
}