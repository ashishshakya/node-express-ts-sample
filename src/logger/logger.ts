class Logger {
  private featureName: string;
  private logger: Console;

  constructor({ featureName }) {
    this.featureName = featureName;
    this.logger = console;
  }

  getPrefix = (level: string) => {
    return `[${new Date().toJSON()}] [${level}] [${this.featureName}] : `;
  };

  log = (...args: unknown[]) => {
    this.logger.log(this.getPrefix('log'), ...args);
  };

  info = (...args: unknown[]) => {
    this.logger.info(this.getPrefix('info'), ...args);
  };

  debug = (...args: unknown[]) => {
    this.logger.debug(this.getPrefix('debug'), ...args);
  };

  warn = (...args: unknown[]) => {
    this.logger.warn(this.getPrefix('warn'), ...args);
  };

  error = (...args: unknown[]) => {
    this.logger.error(this.getPrefix('error'), ...args);
  };
}

export default Logger;
