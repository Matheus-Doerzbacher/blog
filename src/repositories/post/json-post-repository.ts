import { PostModel } from '@/models/post/post-model';
import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { PostRepository } from './post-repository';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILES_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json'
);

const TIMEOUT = 0;

class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const json = await readFile(JSON_POSTS_FILES_PATH, 'utf-8');
    const parsedJson = JSON.parse(json);
    const { posts } = parsedJson;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    await new Promise(resolve => setTimeout(resolve, TIMEOUT));
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    await new Promise(resolve => setTimeout(resolve, TIMEOUT));
    const posts = await this.readFromDisk();
    const post = posts.find(post => post.id === id);

    if (!post) throw new Error('Post não encontrado');

    return post;
  }
}

export const postRepository: PostRepository = new JsonPostRepository();
