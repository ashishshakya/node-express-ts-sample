import Logger from './logger';

const getLogger = (featureName = 'Default') => new Logger({ featureName });

export default getLogger;
