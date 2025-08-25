import { postRepository } from '@/repositories/post/json-post-repository';

export default async function PostList() {
  const posts = await postRepository.findAll();
  return posts.map(post => <div key={post.id}>{post.title}</div>);
}
