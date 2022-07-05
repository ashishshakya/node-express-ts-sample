import dbDriver from '../db-driver';
import getLogger from '../logger';
import DbModelHelper from './db-model-helper';

const logger = getLogger('DbModelHelper');
const dbModelHelper = new DbModelHelper({ logger, dbDriver });

export default dbModelHelper;
