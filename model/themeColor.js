const Sequelize = require('sequelize');

const ThemeColorModel = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    hex: {
        type: Sequelize.STRING
    },
    orderNum: {
        type: Sequelize.INTEGER
    }
};

const ThemeColorConfig = {
    tableName: 'themeColor',
    timestamps: true
}

module.exports = {
    ThemeColorModel,
    ThemeColorConfig
}