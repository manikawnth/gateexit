const fs = require('fs');
const yaml = require('js-yaml');

const CONFIG_FILE = './conf.yml';

module.exports = yaml.safeLoad(fs.readFileSync(CONFIG_FILE));