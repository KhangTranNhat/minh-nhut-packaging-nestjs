import { BaseEntity } from '@Shared/base/entity';
import { HydratedDocument } from 'mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose';

export type ContactDocument = HydratedDocument<Contact>;

export class Contact extends BaseEntity {
  @Prop({
    name: 'full_name',
  })
  fullName: string;
  @Prop({
    name: 'email',
  })
  email: string;
  @Prop({
    name: 'phone',
  })
  phone: string;
  @Prop({
    name: 'content',
  })
  content: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
