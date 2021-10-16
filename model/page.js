const Sequelize = require('sequelize');

const PageModel = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pageUrl: {
        type: Sequelize.STRING
    }
};

const PageConfig = {
    tableName: 'page',
    timestamps: true
}

module.exports = {
    PageModel,
    PageConfig
}