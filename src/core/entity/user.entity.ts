import { BaseEntity } from '@Shared/base/entity';
import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Cloudinary } from '@Core/entity/cloudinary.entity';

export type UserDocument = HydratedDocument<User>;
@Schema({
  collection:'users'
})
export class User extends BaseEntity {
  @Prop({
    name: 'username',
    required: [true, 'User name is required'],
    minlength: [2, 'User name must be at least 2 characters long'],
    maxlength: [100, 'User name must not exceed 100 characters'],
    unique: true,
  })
  username: string;

  @Prop({
    name: 'password',
    required: [true, 'Password is required'],
    unique: true,
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
