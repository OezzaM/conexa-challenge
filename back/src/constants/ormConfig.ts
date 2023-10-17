import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

export const ORM_CONFIG: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  charset: 'utf8mb4_unicode_ci',
  synchronize: true,
  extra: {
    connectionLimit: Number(process.env.DATABASE_CONNECTION_LIMIT || 10),
  },
};
