const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    createdAt: {
        type: Date, default: Date.now
    },
    updatedAt: {
        type: Date, default: Date.now
    }
})

UserSchema.pre('save', function (next) {
    if (this.isNew) {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    } else {
        this.updatedAt = new Date();
    }
    next();
});

module.exports = mongoose.model('UserS', UserSchema);