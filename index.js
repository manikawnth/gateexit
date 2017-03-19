const gateexit = require('./lib/gateexit');
process['env']['DEBUG'] = "gateexit,scanner";
gateexit();