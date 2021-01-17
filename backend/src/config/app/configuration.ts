import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  env: process.env.APP_ENV,
  port: process.env.APP_PORT,
  hostname: process.env.APP_HOSTNAME,
  name: process.env.APP_NAME,
  url: process.env.APP_URL,
}));
