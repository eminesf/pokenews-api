import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schema/post.schema';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(post: Post): Promise<Post> {
    const createdPost = new this.postModel(post);
    return createdPost.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }
}
