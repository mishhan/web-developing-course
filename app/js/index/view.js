(function (window) {
	'use strict';

	function View(template) {
		this.template = template;

    this.$invoiceList = document.getElementById('invoice-list');

    this.$search_value = document.getElementById('search_value');
    this.$filter_field = document.getElementById('filter_field');
    this.$filter_value = document.getElementById('filter_value');
    this.$order_field = document.getElementById('order_field');
    this.$order_value = document.getElementById('order_value');
    this.$filterBtn = document.getElementById('filter-btn');
  }

	View.prototype._removeItem = function (id) {
    const removedElement = document.getElementById(`${id}`);
    if (removedElement) {
      this.$invoiceList.removeChild(removedElement);
    }
	};

	View.prototype.render = function (viewCmd, params) {
		var self = this;
		var viewCommands = {
      showItems: function() {
        self.$invoiceList.innerHTML = self.template.showList(params);
      },
			removeItem: function () {
				self._removeItem(params);
			},
		};

		viewCommands[viewCmd]();
	};

	View.prototype.bind = function (event, handler) {
    const self = this;
    if (event === 'removeItem') {
      self.$invoiceList.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'I' || target.tagName === 'BUTTON') {
          const btnElement = target.tagName === 'I' ? target.parentElement : target;
          const id = btnElement.dataset.id;
          handler({ id: id });
        }
      });
    }

    if (event === 'filter') {
      self.$filterBtn.addEventListener('click', function(event) {
        const filterObj = {
          search_value: self.$search_value.value,
          filter_field: self.$filter_field.value,
          filter_value: self.$filter_value.value,
          order_field: self.$order_field.value,
          order_value: self.$order_value.value
        };
        
        handler(filterObj);
      });
    }
	};

	
	window.app = window.app || {};
	window.app.View = View;
}(window));