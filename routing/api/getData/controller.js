module.exports=()=>{
    return{
        read:(req,res)=>{
            console.log("read api")
            res.send('getdata read api')
        },
        create:(req,res)=>{
            console.log("create api")
            res.send('getdata create api')
        },
        update:(req,res)=>{
            console.log("update api")
            res.send('getdata create api')
        },
        delete:(req,res)=>{
            console.log("delete api")
            res.send('getdata delete api')
        }
    }
}