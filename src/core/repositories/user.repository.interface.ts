import { BaseRepositoryInterface } from "@Core/repositories/base";
import { User } from "@Core/entity";

export interface UserRepositoryInterface
  extends BaseRepositoryInterface<User> {}