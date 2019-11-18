(function(window) {
  'use strict';

  function Model(store) {
    this.store = store;
  };

  Model.prototype.loadItem = function(data, callback, errorCallback) {
    this.store.loadItem(data,
      function(invoiceData) {
        callback(invoiceData);
      }, 
      function(error) {
        errorCallback(error);
      }
    );
  };

  Model.prototype.updateItem = function(data, callback, errorCallback) {
    this.store.updateItem(data,
      function() {
        callback();
      }, 
      function(error) {
        errorCallback(error);
      }
    );
  };

  window.app = window.app || {};
  window.app.Model = Model;
})(window);
