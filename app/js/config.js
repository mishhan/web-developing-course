(function(window) {
  'use strict';

  function Config() {

    const isLocal = false;
    if (isLocal) {
      this.host = 'http://localhost';
      this.port = '3000';
      this.url = `${this.host}:${this.port}`;
    }
    else {
      this.url = 'https://mishhan-invoices-app.herokuapp.com';
    }
    this.invoicesRoute = '/invoices';

    this.invoicesUrl = `${this.url}${this.invoicesRoute}`;
  }

  window.app = window.app || {};
  window.app.Config = Config;
})(window);