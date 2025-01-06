import { BaseRepositoryAbstract } from "@Core/repositories/base/repository.abstract";
import { Product, ProductDocument } from "@Core/entity";
import { Injectable } from "@nestjs/common";
import { ProductRepositoryInterface } from "@Core/repositories";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ProductRepository
  extends BaseRepositoryAbstract<Product>
  implements ProductRepositoryInterface
{
  constructor(
    @InjectModel(Product.name)
    private readonly repository: Model<ProductDocument>,
  ) {
    super(repository);
  }
}