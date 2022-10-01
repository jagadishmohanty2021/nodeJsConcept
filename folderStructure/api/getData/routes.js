console.log("enter the router")



module.exports = (router, app) => {
console.log("enter the router function")
    router.get('/getData', (req, res) => {
        console.log("enter the function");
        res.send("enter getData")
    })


}