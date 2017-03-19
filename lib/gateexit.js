const util = require('util');
//const EventEmitter = require('events').EventEmitter;
const Scanner = require('./Scanner');
const config = require('./config');


function gateexit(){
    //EventEmitter.call(this);
    const scanner = new Scanner();
    scanner.scan(config.serviceUUID);

}

//util.inherits(gateexit, EventEmitter);