(function () {
	'use strict';

  const config = new app.Config();
  const store = new app.Store(config);
  const model = new app.Model(store);
  const template = new app.Template();
  const view = new app.View(template);
  const controller = new app.Controller(view, model);

  //ui lib
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  });
})();