const {Page, Hightlight} = require('../db');

function addPage(userId, pageUrl) {
    return Page.create({
        'userId': userId,
        pageUrl,
        'createdAt': new Date(),
        'updateAt': new Date()
    });
}

function getPage(param) {
    return Page.findOne({
        where: param
    });
}

async function getHighlights(param) {
    let page = await Page.findOne({
        where: param,
        include: [{
            model: Hightlight,
            as: 'hightlights',
        }]
    });
    return page.hightlights;
}

module.exports = {
    addPage,
    getPage,
    getHighlights
}