import { Module } from '@nestjs/common';
import { MongooseModule as NestMongooseModule } from '@nestjs/mongoose';
import { EnvConfigurationModule, EnvConfigurationService } from "@Infrastructures/env-configuration";

@Module({
  imports: [
    NestMongooseModule.forRootAsync({
      imports: [EnvConfigurationModule],
      useFactory: async (configService: EnvConfigurationService) => ({
        uri: configService.getDatabaseURI(),
        dbName: configService.getLogDatabaseName(),
      }),
      inject: [EnvConfigurationService],
    })
  ],
})
export class MongooseModule {}
