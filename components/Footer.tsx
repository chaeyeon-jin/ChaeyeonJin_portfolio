'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="container mx-auto px-6 py-8">
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
}

