(function (window) {
	'use strict';

	function View() {
    this.$number = document.getElementById('number');
    this.$date_created = document.getElementById('date_created');
    this.$date_supply = document.getElementById('date_supply');
    this.$date_due = document.getElementById('date_due');
    this.$direction = document.getElementById('direction');
    this.$comment = document.getElementById('comment');

    this.$id = document.getElementById('id');

    this.$editBtn = document.getElementById('editBtn');
  }

	View.prototype.bind = function (event, handler) {
    const self = this;
    if (event === 'updateItem') {
      self.$editBtn.addEventListener('click', function(event) {
        const item = {
          id: self.$id.value,
          number: self.$number.value,
          direction: self.$direction.value,
          date_created: self.$date_created.value,
          date_supply: self.$date_supply.value,
          date_due: self.$date_due.value,
          comment: self.$comment.value,
        }
        handler(item);
      });
    }
  };
  
  View.prototype.setView = function(data) {
    this.$number.value = data.number;

    //as ui lib is used value must be setted using lib..
    //https://github.com/Dogfalo/materialize/issues/6074
    M.Datepicker.getInstance(this.$date_created).setDate(data.date_created);
    M.Datepicker.getInstance(this.$date_created)._finishSelection();

    M.Datepicker.getInstance(this.$date_supply).setDate(data.date_supply);
    M.Datepicker.getInstance(this.$date_supply)._finishSelection();

    M.Datepicker.getInstance(this.$date_due).setDate(data.date_due);
    M.Datepicker.getInstance(this.$date_due)._finishSelection();

    this.$direction.value = data.direction;

    //problem with textarea...
    this.$comment.value = data.comment;
    M.textareaAutoResize(this.$comment);
    
    //set value in hidden field
    this.$id.value = data.id;
  };

	
	window.app = window.app || {};
	window.app.View = View;
}(window));