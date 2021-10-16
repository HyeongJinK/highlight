const Sequelize = require('sequelize');

const ThemeModel = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
};

const ThemeConfig = {
    tableName: 'theme',
    timestamps: true
}

module.exports = {
    ThemeModel,
    ThemeConfig
}