import { Global, Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import {
  Banner,
  BannerSchema,
  Category,
  CategorySchema,
  Contact,
  ContactSchema, Product, ProductSchema,
  User,
  UserSchema
} from "@Core/entity";

import {
  BannerRepository, CategoryRepository, ContactRepository,
  UserRepository

} from "@Infrastructures/mongoose/repositories";

@Global()
@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name:User.name, schema: UserSchema },
        { name:Banner.name, schema: BannerSchema },
        { name:Category.name, schema: CategorySchema },
        { name:Contact.name, schema: ContactSchema },
        { name:Product.name, schema: ProductSchema }
      ]
    )
  ],
  providers: [
    UserRepository,
    BannerRepository,
    CategoryRepository,
    ContactRepository
  ],
  exports: [
    UserRepository,
    BannerRepository,
    CategoryRepository,
    ContactRepository
  ],
})
export class RepositoryModule {}
