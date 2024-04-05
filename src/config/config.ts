import * as dotenv from 'dotenv';

dotenv.config();

export const Config = {
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || '',
  JWT_SECRET: process.env.JWT_SECRET || 's@cret',
  JWT_EXPIRED_TIME: 30 * 24 * 60 * 60,
  DATABASE: {
    DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
    DATABASE_PORT: +process.env.DATABASE_PORT
      ? Number(+process.env.DATABASE_PORT)
      : +process.env.DATABASE_PORT || 6633,
    DATABASE_USER: process.env.DATABASE_USER || '',
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '',
    DATABASE_NAME: process.env.DATABASE_NAME || 'sartools',
  },
  MAPBOX_URL: process.env.MAPBOX_URL,
  MAPBOX_ENDPOINT: process.env.MAPBOX_ENDPOINT,
  MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
  MAILJET_PUBLIC_KEY: process.env.MAILJET_PUBLIC_KEY,
  MAILJET_PRIVATE_KEY: process.env.MAILJET_PRIVATE_KEY,
  SARTOOLS_WEB_DOMAIN: process.env.SARTOOLS_WEB_DOMAIN
};
