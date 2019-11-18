const Helpers = {

  _months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],

  generateUuid: function() {
    return UUIDjs.create().hex;
  },

  dateToString: function(date) {
    const day = date.getUTCDate() > 10 ? date.getUTCDate() : `0${date.getUTCDate()}`;
    const month = this._months[date.getMonth() - 1];
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  },

  convertObjToUrl: function(data) {
    return Object.keys(data).map(key => `${key}=${encodeURIComponent(data[key])}`).join('&');
  },
}