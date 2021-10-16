const Sequelize = require('sequelize');

const HighlightModel = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    themeNum: {
        type: Sequelize.INTEGER
    },
    text: {
        type:Sequelize.STRING(6000)
    }
};

const HighlightConfig = {
    tableName: 'highlight',
    timestamps: false
}

module.exports = {
    HighlightModel,
    HighlightConfig
}