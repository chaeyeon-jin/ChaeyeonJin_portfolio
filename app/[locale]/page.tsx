'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          {t('title')}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8">
          {t('subtitle')}
        </p>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl">
          {t('description')}
        </p>
        <div className="flex gap-4">
          <Link
            href={`/${locale}/about`}
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-md hover:opacity-80 transition-opacity"
          >
            {t('about')}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="px-6 py-3 border border-black dark:border-white rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            {t('contact')}
          </Link>
        </div>
      </div>
    </div>
  );
}

