import { BaseRepositoryAbstract } from "@Core/repositories/base/repository.abstract";
import { Contact, ContactDocument } from "@Core/entity";
import { Injectable } from "@nestjs/common";
import { ContactRepositoryInterface } from "@Core/repositories";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ContactRepository
  extends BaseRepositoryAbstract<Contact>
  implements ContactRepositoryInterface
{
  constructor(
    @InjectModel(Contact.name)
    private readonly repository: Model<ContactDocument>,
  ) {
    super(repository);
  }
}