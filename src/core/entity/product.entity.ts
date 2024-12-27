import { BaseEntity } from "@Shared/base";
import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Cloudinary } from "@Core/entity/cloudinary.entity";
import * as mongoose from 'mongoose';
import { Category } from "@Core/entity/category.entity";
export type ProductDocument = mongoose.HydratedDocument<Product>;

export class Product extends BaseEntity {
  @Prop({
    name: 'name',
    required: [true, 'Product name is required'],
  })
  name: string;

  @Prop({
    name: 'slug',
    required: [true, 'Product slug is required'],
    unique: [true, 'Product slug must be unique'],
  })
  slug: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true })
  category: Category;

  @Prop({
    name: 'price',
    default: 0
  })
  price: number;

  @Prop({
    name: 'images',
    type: [Cloudinary],
    required: [true, 'At least one image is required'],
    validate: {
      validator: (value: Cloudinary[]) => value.length > 0,
      message: 'Images array must not be empty',
    },
  })
  images: Cloudinary[];

  @Prop({
    name: 'short_description',
  })
  shortDescription: number;

  @Prop({
    name: 'long_description',
  })
  longDescription: number;

}

export const ProductSchema = SchemaFactory.createForClass(Product);