import Container from '@/components/Container';
import Header from '@/components/Header';
import PostList from '@/components/PostLists';
import SpinLoader from '@/components/SpinLoader';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
          <Image
            className="h-full w-full group-hover:scale-105 transition object-cover object-center"
            src={'/images/bryen_0.png'}
            alt="Titulo do Post"
            width={1200}
            height={720}
            priority
          />
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 text-sm" dateTime="2025-04-20">
            20/04/2025 10:00
          </time>
          <h1 className="text-2xl font-extrabold sm:text-3xl">
            <Link href={'#'}>Lorem ipsum dolor, sit amet consectetur</Link>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            optio veritatis eligendi iusto accusantium sunt aspernatur nihil id
            vel nisi dolores odit, deleniti minima inventore ratione quas
            consectetur non. Amet.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <h1 className="text-4xl font-bold text-center py-8">FOOTER</h1>
      </footer>
    </Container>
  );
}
