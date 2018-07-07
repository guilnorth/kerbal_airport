import * as moment from 'moment';

export default class Utils {
  static substDate(date: any) {
    if(typeof date === "object"){
      date = date.toISOString();
    }
    try {
      date = (date)?((date).substring(0, 10)):'';
    }catch (err){

    }
    return date
  }
  static formatLocalDate(date: any) {
    return (date)?moment(Utils.substDate(date)).format('DD/MM/YYYY'):null;
  }
}
