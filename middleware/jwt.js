let jwt = require('express-jwt');
let secret = new Buffer(process.env.APP_KEY || 'SECR$T ()F THE D$DED', 'base64');
module.exports = { middleware: jwt({ secret: secret }), secret: secret };
