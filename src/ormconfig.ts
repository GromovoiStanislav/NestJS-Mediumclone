import { ConnectionOptions } from 'typeorm';
const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'myuser',
  password: '123',
  database: 'mediumclone',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
};

export default config;
