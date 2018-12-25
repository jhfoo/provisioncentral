const restify = require('restify'),
    log4js = require('log4js');

const server = restify.createServer();

server.listen(8123, () => {
    console.log('%s listening at %s', server.name, server.url);
});