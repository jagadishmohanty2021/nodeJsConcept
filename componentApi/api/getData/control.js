
module.exports = () => {
    return {
        "create": async (req, res, next) => {
            res.send("enter to create api")
        },
        "update": async (req, res, next) => {
            res.send("enter to update api")
        },
        "delete": async (req, res, next) => {
            res.send("enter to delete api")
        }
    }
}