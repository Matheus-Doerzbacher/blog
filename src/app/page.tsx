import Container from '@/components/Container';
import PostList from '@/components/PostLists';
import SpinLoader from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1 className="text-4xl font-bold text-center py-8">HEADER</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <h1 className="text-4xl font-bold text-center py-8">FOOTER</h1>
      </footer>
    </Container>
  );
}
