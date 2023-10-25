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
};