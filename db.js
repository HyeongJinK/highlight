const Sequelize = require('sequelize');

const {HighlightModel, HighlightConfig} = require('./model/highlight');
const {ThemeModel, ThemeConfig} = require('./model/theme');
const {ThemeColorModel, ThemeColorConfig} = require('./model/themeColor');
const {UserModel, UserConfig} = require('./model/user');
const {PageModel, PageConfig} = require('./model/page');


const sequelize = new Sequelize('hl', 'root', '1q2w3e4r%T', {
    host: 'localhost',
    dialect: 'mysql'
});

const Hightlight = sequelize.define('hightlight', HighlightModel, HighlightConfig);
const Theme = sequelize.define('theme', ThemeModel, ThemeConfig);
const ThemeColor = sequelize.define('themeColor', ThemeColorModel, ThemeColorConfig);
const User = sequelize.define('user', UserModel, UserConfig);
const Page = sequelize.define('page', PageModel, PageConfig);

User.hasMany(Theme);
User.hasMany(Hightlight);
User.hasMany(Page);

Page.hasMany(Hightlight, {as: 'hightlights'});
Hightlight.belongsTo(Page);

Theme.hasMany(ThemeColor, {as: 'themeColors'});
ThemeColor.belongsTo(Theme);


sequelize.sync({
    force: false,
});

module.exports = {
    User,
    Theme,
    Hightlight,
    Page,
    ThemeColor
};
