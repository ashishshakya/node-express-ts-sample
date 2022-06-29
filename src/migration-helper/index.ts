import { readFileSync } from 'fs';

import dbDriver from '../db-driver';
import getLogger from '../logger';
import MigrationHelper from './migration-helper';

const logger = getLogger('MigrationHelper');
const migrationHelper = new MigrationHelper({ logger, dbDriver, readFileSync });

export default migrationHelper;
