const fs = require('fs');


function hex2a(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2) str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

module.exports.decodeHexFileContent = (filePath) =>  {
    return new Promise((resolve, reject) => {


        var content = fs.readFileSync(filePath, 'utf8');


        console.log(hex2a(content));

        if(content)
            resolve(hex2a(content))
    });
}
