import { PostModel } from '@/models/post/post-model';

export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  // create(post: PostModel): Promise<PostModel>;
  // update(id: string, post: PostModel): Promise<PostModel | null>;
  // delete(id: string): Promise<boolean>;
}
