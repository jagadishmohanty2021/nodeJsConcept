let path = require("path");
const fs = require('fs')
const express = require('express');

module.exports = (api, app) => {
    let apiPath = api.path;
    const source = fs.readdirSync(apiPath)
        .map(name => name)
        .filter(name => fs.lstatSync(path.join(apiPath, name)).isDirectory());
    console.log(source)
    // logger.info(source);
    const filepath = '/api';
    for (let index = 0; index < source.length; index++) {
        const element = source[index];
        const elpath = path.join(apiPath, element);

        const router = express.Router();
        fs.readdirSync(elpath).forEach(file => {
            if (fs.existsSync(path.join(elpath, file, 'routes.js'))) {
                filepath = file;
                require(path.join(elpath, file, 'routes.js'))(router, app)
                app.use(`/${filepath}`, router);
            };
        });
    }
}