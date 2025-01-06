import { BaseRepositoryAbstract } from "@Core/repositories/base/repository.abstract";
import { User, UserDocument } from "@Core/entity";
import { Injectable } from "@nestjs/common";
import { UserRepositoryInterface } from "@Core/repositories";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UserRepository
  extends BaseRepositoryAbstract<User>
  implements UserRepositoryInterface
{
  constructor(
    @InjectModel(User.name)
    private readonly repository: Model<UserDocument>,
  ) {
    super(repository);
  }
}