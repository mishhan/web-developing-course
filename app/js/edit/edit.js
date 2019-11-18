(function () {
	'use strict';

  const config = new app.Config();
  const store = new app.Store(config);
  const model = new app.Model(store);
  const view = new app.View();
  const controller = new app.Controller(view, model);

  document.addEventListener('DOMContentLoaded', function() {
    //ui lib
    let elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);

    elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems);

    //really bad..
    if (document.location.href.match(/\?./)) {
      const invoiceId = document.location.href.split('?')[1].split('=')[1];
      controller.loadItem(invoiceId);
    }
    else {
      const toastHTML = `<span>Can not load Invoice for editing...Pls do not modify url by yourself :)</span>`;
      M.toast({ 
        html: toastHTML, 
        timeRemaining: 1000, 
        completeCallback: function() {
          controller._openList();
        }
      });
    }

  });
})();