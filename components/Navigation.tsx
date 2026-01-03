'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === `/${locale}${path}` || pathname === `/${locale}${path}/`;
  };

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${locale}`} className="text-xl font-bold">
            Chaeyeon Jin
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href={`/${locale}/about`}
              className={`hover:opacity-70 transition-opacity ${
                isActive('/about') ? 'font-semibold' : ''
              }`}
            >
              {t('about')}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className={`hover:opacity-70 transition-opacity ${
                isActive('/contact') ? 'font-semibold' : ''
              }`}
            >
              {t('contact')}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}


