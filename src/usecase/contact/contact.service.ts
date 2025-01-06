import { Injectable } from '@nestjs/common';
import { CreateContactRequestDto, GetListContactRequestDto } from '@Api/contact/dto/request';

@Injectable()
export class ContactService {
  constructor() {}
  async create(param : CreateContactRequestDto){

  }

  async delete(id: string){

  }
  async getById(id: string){

  }
  async getList(param: GetListContactRequestDto){

  }
}
