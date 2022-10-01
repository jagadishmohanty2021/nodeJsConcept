const User=require('./user_model')

module.exports = () => {
    return {
        create: async (req, res) => {
            User.create({
                name: req.body.name,
                email: req.body.email,
                createdAt: new Date(),
            }).then((data) => {

                res.send(data)
            }).catch((err) => {
                throw err;
            })
        },
        read: async (req, res) => {
            User.findAll().then((data) => {
                res.send(data)
            }).catch((err) => {
                throw err;
            })
        },
        update: async (req, res) => {+
            User.update(req.body,{
                where:{user_id:req.params.id}
            }).then((data) => {
                res.send(data)
            }).catch((err) => {
                throw err;
            })
        },
        delete: async (req, res) => {
            User.destroy({where:{
                user_id:req.params.id
            }}).then((data) => {
                if(data)
                res.send("deleted")
                else
                res.send("not deleted")
            }).catch((err) => {
                throw err;
            })
        }
    }
}