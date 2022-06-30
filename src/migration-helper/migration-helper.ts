import { Umzug, SequelizeStorage } from 'umzug';
import DbDriver from '../db-driver/db-driver';
import Logger from '../logger/logger';

class MigrationHelper {
  private logger: Logger;
  private dbDriver: DbDriver;
  private readFileSync: (path: string) => string | Buffer;
  private umzug: Umzug;

  constructor({ logger, dbDriver, readFileSync }) {
    this.logger = logger;
    this.dbDriver = dbDriver;
    this.readFileSync = readFileSync;
  }

  private createUmzugInstance = async () => {
    const sequelize = await this.dbDriver.getDBConnection();

    const umzug = new Umzug({
      migrations: {
        glob: ['../../db/migrations/*.up.sql', { cwd: __dirname }],
        resolve: ({ name, path, context: sequelizeInstance }) => {
          return {
            name,
            up: async () => {
              const sql = this.readFileSync(path).toString();
              return sequelizeInstance.query(sql);
            },
            down: async () => {
              // Get the corresponding `.down.sql` file to undo this migration
              const sql = this.readFileSync(path.replace('.up.sql', '.down.sql')).toString();
              return sequelizeInstance.query(sql);
            },
          };
        },
      },
      storage: new SequelizeStorage({ sequelize, tableName: 'sequelize_meta' }),
      context: sequelize,
      logger: this.logger,
    });

    return umzug;
  };

  private getUmzugInstance = async () => {
    if (!this.umzug) {
      this.umzug = await this.createUmzugInstance();
    }
    return this.umzug;
  };

  private getPendingMigrations = async () => {
    const umzug = await this.getUmzugInstance();
    return umzug.pending();
  };

  executeMigrations = async () => {
    const pendingMigrations = await this.getPendingMigrations();
    this.logger.info('Pending Migrations: ', pendingMigrations.length);

    const umzug = await this.getUmzugInstance();
    await umzug.up();

    this.logger.info('Finished applying migrations');
  };
}

export default MigrationHelper;
