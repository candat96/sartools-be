import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { Config } from './config';
import { LoggerService } from '../common/services/logger.service';

const DataSourceConfig: DataSourceOptions & SeederOptions = {
  migrationsTableName: 'migrations',
  type: 'mysql',
  host: Config.DATABASE.DATABASE_HOST,
  port: Config.DATABASE.DATABASE_PORT,
  username: Config.DATABASE.DATABASE_USER,
  password: Config.DATABASE.DATABASE_PASSWORD,
  database: Config.DATABASE.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: ['dist/modules/**/*.entity.js'],
  seeds: ['dist/modules/database/seed/runner/*.seed.{js,ts}'],
};

const logger = new LoggerService();
export const AppDataSource = new DataSource(DataSourceConfig);
export default AppDataSource.initialize()
  .then(() => logger.debug('Data source has been initialized'))
  .catch((err) => logger.error(`Data source initialize failed: ${err}`));
