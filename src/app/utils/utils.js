const moment = require('moment');
moment.locale('pt-br');
const Utils = {};

Utils.substDate = (date) => {
    if (typeof date === "object") {
        date = date.toISOString();
    }
    try {
        date = (date) ? ((date).substring(0, 10)) : '';
    } catch (err) {
        console.log(err)
    }
    return date
}
Utils.formatLocalDate = (date) => {
    return (date) ? moment(Utils.substDate(date)).format('DD/MM/YYYY') : null;
}

module.exports = Utils;