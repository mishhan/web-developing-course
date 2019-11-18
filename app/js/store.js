(function (window) {
  'use strict';
  
  function Store(config) {
    this.url = config.url;
    this.invoicesRoute = config.invoicesRoute;

    this.invoicesUrl = `${this.url}${this.invoicesRoute}`;
  }

  Store.prototype.loadAll = function(params, callback, errorCallback) {
    const loadUrl = Object.keys(params).length > 0 ?
      `${this.invoicesUrl}?${Helpers.convertObjToUrl(params)}` : this.invoicesUrl;

    fetch(loadUrl).then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.info(`Items loaded: ${data.length}`);
      const invoices = [];
      for(let i = 0; i < data.length; i++) {
        invoices.push(new app.types.Invoice(data[i]));
      }
      callback(invoices);
    })
    .catch(function(error) {
      console.error(error);
    });
  };

  Store.prototype.loadItem = function(data, callback, errorCallback) {
    const getUrl = `${this.invoicesUrl}/${data}`;
    fetch(getUrl).then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.info(`Item loaded: ${data}`);
      const invoice = new app.types.Invoice(data);

      callback(invoice);
    })
    .catch(function(error) {
      console.error(error);
    });
  };

  Store.prototype.addItem = function(data, callback, errorCallback) {
    fetch(this.invoicesUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.info(`Item added: ${data}`);
      callback();
    })
    .catch(function(error) {
      console.error(error);
    });
  };

  Store.prototype.updateItem = function(data, callback, errorCallback) {
    const updateUrl = `${this.invoicesUrl}/${data.id}`;
    fetch(updateUrl, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.info(`Item updated: ${data}`);
      callback();
    })
    .catch(function(error) {
      console.error(error);
    });
  };

  Store.prototype.removeItem = function(data, callback, errorCallback) {
    const deleteUrl = `${this.invoicesUrl}/${data}`;
    fetch(deleteUrl, { method: 'delete' }).then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.info(`Item removed: ${data}`);
      callback();
    })
    .catch(function(error) {
      console.error(error);
    });
  };

	window.app = window.app || {};
	window.app.Store = Store;
})(window);