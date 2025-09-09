import { findPostsBySlugCached } from '@/lib/post/queries';

type SinglePostProps = {
  slug: string;
};

export default async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostsBySlugCached(slug);
  return <div>{JSON.stringify(post)}</div>;
}
