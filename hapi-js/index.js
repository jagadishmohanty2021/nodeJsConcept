const Hapi = require('@hapi/hapi') //intialize hapi framework

const server = Hapi.Server({ //creating server
    host: 'localhost',
    port: 4000
})
//creating rout for rest api 
server.route({
    method: 'get',
    path: '/demo',
    handler: (req) => {
        if(req.query){
            let name=req.query.name
            let email=req.query.email
            return { "statusCode": 200, "success": "Hello World", "message": "api running fine","data":{name,email} }
        }
        return { "statusCode": 200, "success": "Hello World", "message": "api running fine" }

    }
})


//run server
server.start().then(() => {
    console.log('Server connected on', server.info.uri)
}).catch((err) => {
    console.error(err)
})