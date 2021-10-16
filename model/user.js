const Sequelize = require('sequelize');

const UserModel = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    pw: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    useTheme: {
        type: Sequelize.INTEGER
    }
};

const UserConfig = {
    tableName: 'user',
    timestamps: true
};

module.exports = {
    UserModel,
    UserConfig
}