import { Module } from '@nestjs/common';
import { BannerService } from '@Usecase/banner';
import { BannerController } from '@Api/banner/banner.controller';

@Module({
  imports: [],
  controllers: [BannerController],
  providers: [BannerService],
})
export class BannerModule {
}