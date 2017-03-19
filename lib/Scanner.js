const Bleacon = require('bleacon');
const util = require('util');
const EventEmitter = require('events').EventEmitter;
const debug = require('debug')('scanner');

function Scanner(){
    debug('instantiating scanner');
    const that = this;
    EventEmitter.call(that);

    that._scanned = {};
}

Scanner.prototype.scan = function(service_id) {
    debug('scanning started');
    const that = this;
    Bleacon.startScanning(service_id);

    Bleacon.on('discover', (vehicle) => {
        console.log(vehicle);
    })
}

util.inherits(Scanner, EventEmitter);

module.exports = Scanner;