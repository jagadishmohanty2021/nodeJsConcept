const app = require('express')();
const cluster = require('cluster');
const os = require('os');

const numCpu = os.cpus().length;
app.get('/', (req, res) => {
    let sum = 0;
    for (let i = 0; i < 1e8; i++) {
        sum=sum + i;
    }
    res.send(`send response on ${process.pid} = ${sum}`)
    cluster.worker.kill()

})
if (cluster.isMaster) {
    for (let i = 0; i < numCpu; i++) {
        cluster.fork()
    }
    cluster.on('exit',(worker,code,signal)=>{
        console.log(`worker killed: ${worker.process.pid}`)
        cluster.fork()
    })
} else {
    app.listen(3000, () => {
        console.log(`server running on: ${process.pid}`)
    })
}
// app.listen(3000, () => {
//     console.log(`server running on: ${process.pid}`)
// })
