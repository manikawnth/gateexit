//To do 
const zmq = require('zeromq');
const debug = require('debug')('icc');
const config = require('./config');

function setupPublisher(){
    const sock = zmq.socket('pub');
    const pubport = config.controller.icc_port;
    sock.bindSync(`tcp://*:${pubport}`);
    debug('publisher started on port %s', pubport);
    return sock;
}

function setupSubscription(){
    for (let ctrl of config.controller_grp){
        let sock = zmq.socket('sub');
        let addr = `tcp://${ctrl.host}:${ctrl.icc_port}`;
        sock.connect(addr);
        sock.subscribe();
    }
}

class ICC {
    constructor(){
        if(!ICC.instance){
            ICC.instance = this;
        }
        return ICC.instance;
    }
}

const icc = new ICC();
Object.freeze(icc);

module.exports = icc;