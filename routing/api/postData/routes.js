module.exports = (app, url, path, method) => {

    const handler = require(`./controller`)();

    if (method.toLowerCase() == 'get' && path.toLowerCase() == 'read') {
        app.get(`/${url}/${path}`, handler[`${path}`])
    } else if (method.toLowerCase() == 'put' && path.toLowerCase() == 'update') {
        app.put(`/${url}/${path}`, handler[`${path}`])
    } else if (method.toLowerCase() == 'delete' && path.toLowerCase() == 'delete') {
        app.delete(`/${url}/${path}`, handler[`${path}`])
    } else if (method.toLowerCase() == 'post' && path.toLowerCase() == 'create') {
        app.post(`/${url}/${path}`, handler[`${path}`])
    }
}