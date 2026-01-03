'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  const experienceItems = t.raw('experienceItems') as Array<{
    company: string;
    period: string;
    description: string;
  }>;

  const accoladesItems = t.raw('accoladesItems') as Array<{
    award: string;
    category: string;
    year: string;
  }>;

  const socialLinks = t.raw('socialLinks') as {
    instagram: string;
    behance: string;
    linkedin: string;
  };

  const updatesItems = t.raw('updatesItems') as Array<{
    text: string;
    link: string;
    date: string;
  }>;

  const educationDetails = t.raw('educationDetails') as {
    university: string;
    major: string;
    period: string;
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
          {t('title')}
        </h1>

        <div className="mb-16 space-y-6">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('description')}
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('description2')}
          </p>
        </div>

        <div className="space-y-16">
          {/* Education */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">{t('education')}</h2>
            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2">
                <span className="font-medium">{educationDetails.university}</span>
                <span className="text-gray-600 dark:text-gray-400">
                  {educationDetails.period}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {educationDetails.major}
              </p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">{t('experience')}</h2>
            <ul className="space-y-6">
              {experienceItems.map((item, index) => (
                <li key={index}>
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-1">
                    <span className="font-medium">{item.company}</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* Accolades */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">{t('accolades')}</h2>
            <ul className="space-y-4">
              {accoladesItems.map((item, index) => (
                <li key={index} className="flex flex-col md:flex-row md:items-baseline gap-2">
                  <span className="font-medium">{item.award}</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {item.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-500">
                    {item.year}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Socials */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">{t('socials')}</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href={`https://instagram.com/${socialLinks.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:opacity-70 transition-opacity"
                >
                  Instagram {socialLinks.instagram}
                </a>
              </li>
              <li>
                <a
                  href={`https://behance.net/${socialLinks.behance.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:opacity-70 transition-opacity"
                >
                  Behance {socialLinks.behance}
                </a>
              </li>
              <li>
                <a
                  href={`https://linkedin.com/${socialLinks.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:opacity-70 transition-opacity"
                >
                  LinkedIn {socialLinks.linkedin}
                </a>
              </li>
            </ul>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">{t('updates')}</h2>
            <ul className="space-y-3">
              {updatesItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-700 dark:text-gray-300 hover:opacity-70 transition-opacity inline-flex items-center gap-2"
                  >
                    {item.text}
                    <span className="text-gray-500 dark:text-gray-500">
                      {item.date}
                    </span>
                    <span className="text-gray-400">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

