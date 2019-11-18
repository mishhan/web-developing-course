(function(window) {
  'use strict';

  function Controller(view, model) {
    let self = this;
    this.model = model;
    this.view = view;

    self.view.bind('addItem', function(item) {
      self.addItem(item);
    });
  };

  Controller.prototype.addItem = function (item) {
		const self = this;
		self.model.addItem(
      item, 
      function() {
        self._openList();
      }
    );
	};

  Controller.prototype._openList = function() {
    document.location.href = './index.html';
  };

  window.app = window.app || {};
  window.app.Controller = Controller;
})(window);
