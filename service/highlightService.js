const {getUserById} = require('../repository/userRepository');
const {getThemeByIdAndHex} = require('../repository/themeRepository');
const {addHighlight, modHighlight, delHighlight} = require('../repository/highlightRepository');
const {addPage, getPage, getHighlights} = require('../repository/pageRepository');

const highlightService = {
    add: async (userId, pageUrl, colorHex, text) => {
        let user = await getUserById(userId);

        let theme = await getThemeByIdAndHex(user.useTheme, colorHex);
        
        let page = await getPage({userId, pageUrl});

        if (page == null) {
            page = await addPage(page, userId, pageUrl);
        }

        let highlight = await addHighlight(userId,
            page.id,
            theme.themeColors[0].orderNum,
            text);

        return {
            hightlight: highlight.id,
            userId,
            pageId: page.id,
            colorHex,
            text
        };
    },
    mod: async (highlightId, userId, colorHex, text) => {
        let param = {'updateAt': new Date()};
        
        if (colorHex != undefined && colorHex != null) {
            let user = await getUserById(userId);
            let theme = await getThemeByIdAndHex(user.useTheme, colorHex);
        
            param.themeNum = theme.themeColors[0].orderNum;    
        }

        if (text != undefined && text != null) {
            param.text = text;
        }

        let highlight = await modHighlight(param, highlightId);
        
        return {
            'highlightId': highlight.id,
            userId,
            'pageId': highlight.pageId,
            colorHex,
            text
        };
    },
    get: async (userId, page) => {
        let param = {userId: userId};

        if (page.pageId != undefined && page.pageId != null) {
            param.pageId = page.pageId;
        } else {
            param.pageUrl = page.pageUrl;
        }
        
        return await getHighlights(param);
    },
    list: async (userId) => {
        
    },
    del: async (userId, highlightId) => {
        delHighlight(userId, highlightId);
    }
};

module.exports = highlightService;


