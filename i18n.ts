import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

export default getRequestConfig(async () => {
  // German is the default and only locale for now
  const locale = 'de';

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default
  };
});
