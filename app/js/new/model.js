(function(window) {
  'use strict';

  function Model(store) {
    this.store = store;
  };

  Model.prototype.addItem = function(data, callback, errorCallback) {
    this.store.addItem(data,
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
