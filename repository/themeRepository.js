const {Theme, ThemeColor} = require('../db');

function getThemeByIdAndHex(id, hex) {
    return Theme.findOne({
        where: {id},
        include: [{
            model: ThemeColor,
            as: 'themeColors',
            where: { hex }
        }]
    });
}

module.exports = {
    getThemeByIdAndHex
}