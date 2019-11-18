(function (window) {
	'use strict';

	function View() {
    this.$number = document.getElementById('number');
    this.$date_supply = document.getElementById('date_supply');
    this.$date_due = document.getElementById('date_due');
    this.$comment = document.getElementById('comment');

    this.$addButton = document.getElementById('addBtn');
  }

	View.prototype.bind = function (event, handler) {
    const self = this;
    if (event === 'addItem') {
      self.$addButton.addEventListener('click', function(event) {
        const item = {
          number: self.$number.value,
          direction: Helpers.generateUuid(),
          date_created: Helpers.dateToString(new Date()) ,
          date_supply: self.$date_supply.value,
          date_due: self.$date_due.value,
          comment: self.$comment.value,
        }
        handler(item);
      });
    }
	};

	
	window.app = window.app || {};
	window.app.View = View;
}(window));