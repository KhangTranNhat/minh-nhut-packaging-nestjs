import { BaseRepositoryAbstract } from "@Core/repositories/base/repository.abstract";
import { Category, CategoryDocument } from "@Core/entity";
import { Injectable } from "@nestjs/common";
import { CategoryRepositoryInterface } from "@Core/repositories";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class CategoryRepository
  extends BaseRepositoryAbstract<Category>
  implements CategoryRepositoryInterface
{
  constructor(
    @InjectModel(Category.name)
    private readonly repository: Model<CategoryDocument>,
  ) {
    super(repository);
  }
}