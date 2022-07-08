import SystemSettings from './system-settings';

const processEnv = process.env;
const systemSettings = new SystemSettings({ processEnv });

export default systemSettings;
