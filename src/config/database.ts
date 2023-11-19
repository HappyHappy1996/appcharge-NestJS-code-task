import { join } from 'path';

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// we need this for npm script to generate/run migrations using exported config
export const getDatabaseConfig = (): TypeOrmModuleOptions => {
    return {
        type: 'postgres',
        host: process.env.TYPEORM_HOST,
        port: parseInt(process.env.TYPEORM_PORT),
        database: process.env.TYPEORM_DATABASE,
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        entities: [join(__dirname, '../**/*.entity.{js,ts}')],
        synchronize: true,
        logging: process.env.ENABLE_SQL_LOGGING === 'true' ? 'all' : null,

        migrationsRun: false,
        migrations: [join(__dirname, '../migrations/*{.ts,.js}')],
    };
};
