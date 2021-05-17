const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    devServer: {
        proxy: {
            '/weather' : {
                target: 'http://localhost:4000'
            }
        }
    }
};
