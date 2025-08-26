import { postRepository } from '@/repositories/post/json-post-repository';
import PostCoverImage from '../PostCoverImage';
import PostSummary from '../PostSummary';

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

            <PostSummary
              postLink={postLink}
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
            />
          </div>
        );
      })}
    </div>
  );
}
