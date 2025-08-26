import { PostModel } from '@/models/post/post-model';

export interface PostRepository {
  findAllPublic(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  // create(post: PostModel): Promise<PostModel>;
  // update(id: string, post: PostModel): Promise<PostModel | null>;
  // delete(id: string): Promise<boolean>;
}
