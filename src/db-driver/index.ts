import getLogger from '../logger';
import systemSettings from '../system-settings';
import DbDriver from './db-driver';

const logger = getLogger('DBDriver');
const dbDriver = new DbDriver({ logger, systemSettings });

export default dbDriver;
