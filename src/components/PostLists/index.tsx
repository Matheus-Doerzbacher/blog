import { findAllPublicPosts } from '@/lib/post/queries';
import PostCoverImage from '../PostCoverImage';
import PostSummary from '../PostSummary';

export default async function PostList() {
  const posts = await findAllPublicPosts();
  return (
    <div className="grid grid-cols-1 mb-8 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(1).map(post => {
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
