import { registerAs } from '@nestjs/config';

export interface AppConfig {
  serviceName: string;
  env: string;

  apiPort: number;
  apiDocumentation: boolean;

  logLevel: string;
  enableSqlLogging: boolean;
}

export const appConfig = registerAs(
  'appConfig',
  (): AppConfig => ({
    serviceName: process.env.SERVICE_NAME || 'ps-app',
    env: process.env.SERVICE_ENVIRONMENT,

    apiPort: Number(process.env.API_PORT) || 3000,
    apiDocumentation: !!process.env.API_DOCUMENTATION,

    logLevel: process.env.LOG_LEVEL || 'info',
    enableSqlLogging: process.env.ENABLE_SQL_LOGGING === 'true',
  }),
);
