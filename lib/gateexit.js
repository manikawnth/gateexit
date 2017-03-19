const util = require('util');
const debug = require('debug')('gateexit');
//const EventEmitter = require('events').EventEmitter;
const Scanner = require('./Scanner');
const config = require('./config');


function gateexit(){
    //EventEmitter.call(this);
    debug('bootstrapping main process');
    const scanner = new Scanner();
    scanner.scan(config.serviceUUID);

}

//util.inherits(gateexit, EventEmitter);

module.exports = gateexit;