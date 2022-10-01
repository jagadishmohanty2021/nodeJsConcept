const { logger } = require('./logger');
let path = require("path");
const init = require('./router');
const express = require('express');
const app = express();
const Router = express.Router();
const port = 3000;
// const apiPath = path.join(__dirname, "api")


app.use('/api',init({ path: path.join(__dirname, "api") }, app));

server.listen(port, () => {
    logger.info(`Server: Service center listening on port ${port}!`);
});







