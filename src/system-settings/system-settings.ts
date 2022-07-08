class SystemSettings {
  private _dbHost: string;
  private _dbPort: number;
  private _dbName: string;
  private _dbUser: string;
  private _dbPassword: string;

  constructor({ processEnv }) {
    this._dbHost = processEnv.DB_HOST || '127.0.0.1';
    this._dbPort = parseInt(processEnv.DB_PORT) || 3306;
    this._dbName = processEnv.DB_NAME || 'user_db';
    this._dbUser = processEnv.DB_USER;
    this._dbPassword = processEnv.DB_PASSWORD;
  }

  get dbHost() {
    return this._dbHost;
  }
  get dbPort() {
    return this._dbPort;
  }
  get dbName() {
    return this._dbName;
  }
  get dbUser() {
    return this._dbUser;
  }
  get dbPassword() {
    return this._dbPassword;
  }
}

export default SystemSettings;
