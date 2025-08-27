import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className={`
      min-h-[320px] bg-slate-900 text-slate-100 
      mb-16 p-8 rounded-xl flex items-center justify-center
      text-center
    `}
    >
      <div>
        <h1 className="text-7xl mb-4 font-bold">404</h1>
        <p>A página que você está procurando não foi encontrada.</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}
