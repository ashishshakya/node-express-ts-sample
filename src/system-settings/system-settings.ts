class SystemSettings {
  dbHost: string;
  dbPort: number;
  dbName: string;
  dbUser: string;
  dbPassword: string;

  constructor() {
    this.dbHost = process.env.DB_HOST || '127.0.0.1';
    this.dbPort = parseInt(process.env.DB_PORT) || 3306;
    this.dbName = process.env.DB_NAME || 'user_db';
    this.dbUser = process.env.DB_USER;
    this.dbPassword = process.env.DB_PASSWORD;
  }
}

export default SystemSettings;
