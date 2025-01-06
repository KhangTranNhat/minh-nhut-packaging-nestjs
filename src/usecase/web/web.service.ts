import { Injectable } from '@nestjs/common';
import { GetListProductRequestDto } from '@Api/product/dto/request';
import { GetListCategoryRequestDto } from '@Api/category/dto/request';
import { GetListBannerRequestDto } from '@Api/banner/dto/request';
import { CreateContactRequestDto } from '@Api/contact/dto/request';

@Injectable()
export class WebService {
  constructor() {}

  async getListProduct(param: GetListProductRequestDto){

  }
  async getListCategory(param: GetListCategoryRequestDto){

  }
  async getListBanner(param: GetListBannerRequestDto){

  }
  async createContact(param: CreateContactRequestDto){

  }
}
