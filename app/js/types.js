(function(window) {
  
  function Invoice(data) {
    this.id = data.id;
    this.direction = data.direction;
    this.date_created = data.date_created;
    this.number = data.number;
    this.date_due = data.date_due;
    this.date_supply = data.date_supply;
    this.comment = data.comment;
  }

  window.app = window.app || {};
  window.app.types = window.app.types || {};
  window.app.types.Invoice = Invoice;
})(window);