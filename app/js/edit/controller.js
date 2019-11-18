(function(window) {
  'use strict';

  function Controller(view, model) {
    let self = this;
    this.model = model;
    this.view = view;

    self.view.bind('updateItem', function(id) {
      self.updateItem(id);
    });
  };

  Controller.prototype.updateItem = function (item) {
		const self = this;
		self.model.updateItem(
      item, 
      function() {
        self._openList();
      }
    );
	};

  Controller.prototype.loadItem = function (id) {
		const self = this;
		self.model.loadItem(
      id, 
      function(data) {
        self._setView(data);
      }
    );
  };
  
  Controller.prototype._setView = function(data) {
    this.view.setView(data);
  }

  Controller.prototype._openList = function() {
    document.location.href = './index.html';
  };

  window.app = window.app || {};
  window.app.Controller = Controller;
})(window);
