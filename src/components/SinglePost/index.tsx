import { findPostsBySlugCached } from '@/lib/post/queries';
import Image from 'next/image';
import PostDate from '../PostDate';
import PostHeading from '../PostHeading';

type SinglePostProps = {
  slug: string;
};

export default async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostsBySlugCached(slug);
  return (
    <article className="mb-16">
      <header className="group flex flex-col gap-4 mb-4">
        <Image
          className="rounded-2xl"
          src={post.coverImageUrl}
          alt={post.title}
          width={1200}
          height={720}
        />
        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>
        <p>
          {post.author} | <PostDate date={post.createdAt} />
        </p>
      </header>

      <p className="mb-4 text-xl text-slate-500">{post.excerpt}</p>

      <div>{post.content}</div>
    </article>
  );
}
