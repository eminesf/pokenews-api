import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  post: string;

  @Prop([String])
  images: string[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
