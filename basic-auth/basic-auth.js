const crypto = require('crypto');

function sha1Encode(data) {

    var shasum = crypto.createHash('sha1');

     shasum.update(data);

     return shasum.digest('hex');
}

module.exports.digestAuth = (request, response, next) => {
    const auth = request.headers.authorization;
    const encoded = auth.replace('Basic ', '');
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');

    const [login, password] = decoded.split(':');

    if (login === 'node' && password === sha1Encode('password')) return next();
    response.sendStatus(401);

};
