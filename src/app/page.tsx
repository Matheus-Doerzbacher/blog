import Container from '@/components/Container';
import Header from '@/components/Header';
import PostFeatured from '@/components/PostFeatured';
import PostList from '@/components/PostLists';
import SpinLoader from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <PostFeatured />

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <h1 className="text-4xl font-bold text-center py-8">FOOTER</h1>
      </footer>
    </Container>
  );
}
