import getLogger from '../logger';
import DbDriver from './db-driver';

const dbDriver = new DbDriver({ logger: getLogger('DBDriver') });

export default dbDriver;
