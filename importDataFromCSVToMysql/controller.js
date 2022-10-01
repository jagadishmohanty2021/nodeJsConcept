const User=require('./model')
module.exports = () => {
    return {
        importData: async (req, res) => {
            try{
            User.create({user_id:1,name:'jagadish mohanty',email:'jagadish@softsuave.com',createdAt:new Date()})
            res.send("created")
            }catch(err){
                console.log(err)
            }

        },
        health:()=>{
            let allInsurance=['Life Insurance','Health Insurance','Term Insurance'];
            let actual=20000;
            let totalamount=actual*1/10;
            let allInvest={
                stock:totalamount*3/10,
                ibond:totalamount*15/100,
                longterm:totalamount*40/100,
                gold:totalamount*75/1000,
                comodity:totalamount*75/1000,
            }
        }
    }
}