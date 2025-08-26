import { postRepository } from '@/repositories/post/json-post-repository';
import PostCoverImage from '../PostCoverImage';
import PostHeading from '../PostHeading';

export default async function PostList() {
  const posts = await postRepository.findAll();
  return (
    <div className="grid grid-cols-1  gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map(post => {
        const postLink = `/post/${post.slug}`;
        return (
          <div key={post.id} className="flex flex-col gap-4 group">
            <PostCoverImage
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                src: post.coverImageUrl,
                alt: post.title,
                width: 1200,
                height: 720,
              }}
            />

            <div className="flex flex-col gap-4 sm:justify-center">
              <time
                className="text-slate-600 text-sm"
                dateTime={post.createdAt}
              >
                {new Date(post.createdAt).toLocaleDateString()}{' '}
                {new Date(post.createdAt).toLocaleTimeString()}
              </time>

              <PostHeading url={postLink}>{post.title}</PostHeading>

              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
