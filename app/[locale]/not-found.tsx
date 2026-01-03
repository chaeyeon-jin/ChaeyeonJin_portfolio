import Link from 'next/link';
import { getLocale } from 'next-intl/server';

export default async function NotFound() {
  const locale = await getLocale();

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Page not found
        </p>
        <Link
          href={`/${locale}`}
          className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-md hover:opacity-80 transition-opacity inline-block"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
