const {User}= require('../db');

function getUserById(userId) {
    return User.findOne({
        where: { id: userId }
    });
}

module.exports = {
    getUserById
}