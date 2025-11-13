import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-data-blue mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Страница не найдена
        </h2>
        <p className="text-gray-600 mb-8">
          Запрашиваемая страница не существует или была перемещена.
        </p>
        <Link
          href="/"
          className="inline-block bg-data-blue text-white px-6 py-3 rounded-selectel hover:bg-data-blue/90 transition-colors"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
