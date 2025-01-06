import { Injectable } from '@nestjs/common';
import {
  CreateCategoryRequestDto,
  GetListCategoryRequestDto,
  UpdateCategoryRequestDto,
} from '@Api/category/dto/request';
@Injectable()
export class CategoryService {
  constructor() {}
  async create(param : CreateCategoryRequestDto){

  }
  async update(id: string,param:UpdateCategoryRequestDto){

  }
  async delete(id: string){

  }
  async getBySlug(slug: string){

  }
  async getById(id: string){

  }
  async getList(param: GetListCategoryRequestDto){

  }
}
