import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { getDatabaseConfig } from 'src/config/database';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

dotenv.config();

export default new DataSource(getDatabaseConfig() as PostgresConnectionOptions);
