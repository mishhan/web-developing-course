(function(window) {
  'use strict';

  function Model(store) {
    this.store = store;
  };

  Model.prototype.loadAll = function(params, callback, errorCallback) {
    this.store.loadAll(params, 
      function(data) {
        callback(data);
      }, 
      function(error) {
        errorCallback(error);
      }
    );
  };

  Model.prototype.removeItem = function(id, callback) {
    this.store.removeItem(id, callback);
  };

  window.app = window.app || {};
  window.app.Model = Model;
})(window);
