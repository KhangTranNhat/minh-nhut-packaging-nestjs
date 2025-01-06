import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoryModule } from "@Infrastructures/mongoose/repositories";
import { MongooseModule } from "@Infrastructures/mongoose";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { ResponseInterceptor } from "@Infrastructures/interceptor";
import { LoggerModule } from "@Infrastructures/service/logger";
import { AuthModule } from '@Api/auth';
import { CloudinaryModule } from '@Infrastructures/service/cloudinary';
import { BannerModule } from '@Api/banner';

@Module({
  imports: [MongooseModule,RepositoryModule,AuthModule,BannerModule, CloudinaryModule,LoggerModule],
  controllers: [],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
