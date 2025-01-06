import { Injectable } from '@nestjs/common';
import { CreateProductRequestDto, GetListProductRequestDto, UpdateProductRequestDto } from '@Api/product/dto/request';

@Injectable()
export class ProductService {
  constructor() {}
  async create(param : CreateProductRequestDto){

  }
  async update(id: string,param:UpdateProductRequestDto){

  }
  async delete(id: string){

  }
  async getBySlug(slug: string){

  }
  async getById(id: string){

  }

  async getList(param: GetListProductRequestDto){

  }
}
