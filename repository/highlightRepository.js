const {Hightlight} = require('../db');

function addHighlight(userId, pageId, themeNum, text) {
    return Hightlight.create({
        userId,
        pageId,
        themeNum,
        text,
        'createdAt': new Date(),
        'updateAt': new Date()
    });
};

function modHighlight(param, highlightId) {
    return Hightlight.update(param, { where: { id: highlightId } });
}

function delHighlight(userId, highlightId) {
    Hightlight.destroy({
        where: {
            userId,
            'id': highlightId
        }
    });
}

module.exports = {
    addHighlight,
    modHighlight,
    delHighlight
}