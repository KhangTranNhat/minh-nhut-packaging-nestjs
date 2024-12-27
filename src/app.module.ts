import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from "@Api/auth/auth.module";
import { RepositoryModule } from "@Infrastructures/mongoose/repositories";
import { MongooseModule } from "@Infrastructures/mongoose";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { ResponseInterceptor } from "@Infrastructures/interceptor";
import { LoggerModule } from "@Infrastructures/service/logger";

@Module({
  imports: [MongooseModule,RepositoryModule,AuthModule, LoggerModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
