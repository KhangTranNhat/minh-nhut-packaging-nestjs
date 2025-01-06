import { BaseEntity } from "@Shared/base/entity";
import { HydratedDocument } from "mongoose";
import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Cloudinary } from "@Core/entity/cloudinary.entity";

export type CategoryDocument = HydratedDocument<Category>;

export class Category extends BaseEntity {
  @Prop({
    name: 'name',
    required: [true, 'Category name is required'],
    minlength: [2, 'Category name must be at least 2 characters long'],
    maxlength: [100, 'Category name must not exceed 100 characters'],
    unique: true,
  })
  name: string;

    @Prop({
    name: 'slug',
    required: [true, 'Category slug is required'],
    unique: [true, 'Category slug must be unique'],
  })
  slug: string;

  @Prop({
    name: 'image',
    type: Cloudinary,
    required: [true, 'Category image is required'],
  })
  image: Cloudinary;
}

export const CategorySchema = SchemaFactory.createForClass(Category);