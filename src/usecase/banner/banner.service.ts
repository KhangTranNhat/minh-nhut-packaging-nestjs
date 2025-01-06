import { Injectable } from '@nestjs/common';
import { CreateBannerRequestDto, GetListBannerRequestDto, UpdateBannerRequestDto } from '@Api/banner/dto/request';

@Injectable()
export class BannerService {
  constructor() {}

  async create(param : CreateBannerRequestDto){

  }
  async update(id: string,param:UpdateBannerRequestDto){

  }
  async delete(id: string){

  }
  async getBySlug(slug: string){

  }
  async getById(id: string){

  }

  async getList(param: GetListBannerRequestDto){

  }
}
