const Hapi = require('@hapi/hapi') //intialize hapi framework

const server = Hapi.Server({ //creating server
    host: 'localhost',
    port: 4000
})

server.route({
    method: 'get',
    path: '/demo',
    handler: (req) => {
        if (req.query.sal) {
            
            // let label=[mie,hes,gif,rec,surf/sop,sna,debt]
            let exp = [11500, 6000, 1500, 100, 60, 120, 1080]
            let con=[500,300]
            let a = req.query.sal
            exp.forEach((items) => {
                a -= items
            })
            con.forEach((d)=>{
                a+=d
            })
            let debt=[32000,65000,20000,15000]
            let cdebt=[40000,27000]
            return { "statusCode": 200, "data": a,"debt":debt.sort(),"cdebt":cdebt.sort(),"int":2300,"req":a-2300 }
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