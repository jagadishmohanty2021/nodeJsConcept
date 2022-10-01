module.exports=()=>{
    return{
        read:(req,res)=>{
            console.log("read api")
            res.send('postData read api')
        },
        create:(req,res)=>{
            console.log("create api")
            res.send('postData create api')
        },
        update:(req,res)=>{
            console.log("update api")
            res.send('postData create api')
        },
        delete:(req,res)=>{
            console.log("delete api")
            res.send('postData delete api')
        }
    }
}