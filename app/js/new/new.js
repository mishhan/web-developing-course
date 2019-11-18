(function () {
	'use strict';

  const config = new app.Config();
  const store = new app.Store(config);
  const model = new app.Model(store);
  const view = new app.View();
  const controller = new app.Controller(view, model);

  //ui lib
  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);

    elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems);
  });
})();