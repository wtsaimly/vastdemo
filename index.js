const fs = require('fs');
const html = fs.readFileSync('index.html', { encoding:'utf8' });
const gif = fs.readFileSync('1pixel.gif');

exports.handler = async (event) => {
    if(event.rawPath === "/1pixel.gif"){
        const response = {
            statusCode: 200,
            headers: {
                'Content-Type': 'image/gif',
            },
            body: gif.toString('base64'),
            isBase64Encoded: true
        };
        return response;
    }
    if(event.rawPath === "/index.html"){
        const response = {
            statusCode: 200,
            headers: {
                'Content-Type': 'text/html',
            },
            body: html,
        };
        return response;
    }
    if(event.rawPath === "/"){
        const response = {
            statusCode: 200,
            headers: {
                'Content-Type': 'text/html',
            },
            body: html,
        };
        return response;
    }
};

