import { BaseRepositoryInterface } from "@Core/repositories/base";
import { Product } from "@Core/entity";

export interface ProductRepositoryInterface
  extends BaseRepositoryInterface<Product> {}