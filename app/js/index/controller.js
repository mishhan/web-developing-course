(function(window) {
  'use strict';

  function Controller(view, model) {
    let self = this;
    this.model = model;
    this.view = view;

    //view binding
    self.view.bind('removeItem', function(item) {
      self.removeItem(item.id);
    });

    self.view.bind('filter', function(params) {
      self.showFiltered(params);
    });

    this.showAll();
  };

  Controller.prototype.showAll = function () {
		var self = this;
		self.model.loadAll({}, function (data) {
			self.view.render('showItems', data);
		});
	};

  Controller.prototype.removeItem = function(id) {
    const self = this;
    self.model.removeItem(id, function() {
      self.view.render('removeItem', id);
    });
  };

  Controller.prototype.showFiltered = function(params) {
    const self = this;
    const hasSearch = params.search_value != '';
    const hasFilter = params.filter_field != '0' && params.filter_value != '';
    const hasOrder = params.order_field != '0' && params.order_value != '0';
    
    const dictFilter = {};
    if (hasSearch) {
      dictFilter['q'] = params.search_value;
    }
    if (hasFilter) {
      dictFilter[params.filter_field] = params.filter_value;
    }
    if (hasOrder) {
      dictFilter['_sort'] = params.order_field;
      dictFilter['_order'] = params.order_value;
    }

    self.model.loadAll(dictFilter, function (data) {
			self.view.render('showItems', data);
		}); 
  };


  window.app = window.app || {};
  window.app.Controller = Controller;
})(window);
