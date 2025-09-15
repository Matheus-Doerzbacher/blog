import ErrorMessage from '@/components/ErrorMessage';

export default function NotFound() {
  return (
    <ErrorMessage
      pageTitle="Página não encontrada"
      contentTitle="404 😅"
      content={<p>A página que você está procurando não foi encontrada.</p>}
    />
  );
}
