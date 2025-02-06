import dotenv from 'dotenv';
dotenv.config({ path: 'config.env' });

const config = {
  SESSION_ID: process.env.SESSION_ID || 'XSTRO_88_33_08',
  SUDO: process.env.SUDO || '',
  BOT_INFO: process.env.BOT_INFO || 'Kaisen-MD',
  WARN_COUNT: process.env.WARN_COUNT || 3,
  TIME_ZONE: process.env.TIME_ZONE || 'America/Haiti',
  VERSION: '1.5.12',
};

export { config };
export default config;
