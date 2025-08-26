import { findAllPublicPosts } from '@/lib/post/queries';
import PostCoverImage from '../PostCoverImage';
import PostSummary from '../PostSummary';

export default async function PostFeatured() {
  const posts = await findAllPublicPosts();
  const post = posts[0];

  const slug = post.slug;
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          src: post.coverImageUrl,
          alt: post.title,
          width: 1200,
          height: 720,
          priority: true,
        }}
      />

      <PostSummary
        postHeading="h1"
        postLink={postLink}
        createdAt={post.createdAt}
        title={post.title}
        excerpt={post.excerpt}
      />
    </section>
  );
}
