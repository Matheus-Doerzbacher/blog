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

export class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    await new Promise(resolve => setTimeout(resolve, TIMEOUT));
    const json = await readFile(JSON_POSTS_FILES_PATH, 'utf-8');
    const parsedJson = JSON.parse(json);
    const { posts } = parsedJson;
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    console.log('\nfindAllPublic\n');
    const posts = await this.readFromDisk();
    return posts.filter(post => post.published);
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.readFromDisk();
    const post = posts.find(post => post.id === id);

    if (!post) throw new Error('Post não encontrado');

    return post;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    const posts = await this.readFromDisk();
    const post = posts.find(post => post.slug === slug);

    if (!post) throw new Error('Post não encontrado');

    return post;
  }
}
