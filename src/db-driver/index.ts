import getLogger from '../logger';
import systemSettings from '../system-settings';
import DbDriver from './db-driver';

const dbDriver = new DbDriver({ logger: getLogger('DBDriver'), systemSettings });

export default dbDriver;
