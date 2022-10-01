const UserSchema = require('../models/user')
module.exports = () => {
    return {
        create: (req, res) => {
            let user = new UserSchema({
                name: req.body.name,
                age: req.body.age
            })
            console.log(req.body)
            user.save((err, data) => {
                if (err) throw err;
                res.send(data);
            })
        },
        read: (req, res) => {

            UserSchema.find((err, data) => {
                if (err) throw err;
                res.send(data);
            })

        },
        update: (req, res) => {
            UserSchema.findByIdAndUpdate(req.params.id, {
                $set: {
                    name: req.body.name, age: req.body.age
                }
            }, (err, data) => {
                if (err) throw err;
                res.send(data);
            })
        },
        delete: (req, res) => {
            UserSchema.findByIdAndRemove(req.params.id, (err, data) => {
                if (err) throw err;
                res.send(data);
            })
        },
        agreegate: async (req, res) => {
            UserSchema.aggregate([{ $match: { age: { $gte: Number(req.params.age) } } }]).then((data) => {
                // let uarry=[];
                // data.forEach((items)=>{
                //     uarry.push(items)
                // })
                res.send(data)
            }).catch((err) => {
                throw err
            });
            // let arr = [];
            // try {
            //     for await (const doc of data) {
            //         arr.push(doc);
            //     }
            //     res.send(arr)
            // } catch (err) {
            //     next(err)
            // }
        }
    }
}