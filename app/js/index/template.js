(function (window) {
  'use strict';
  
  function Template() {
    this.invoiceListItemTemplate = 
    `
    <tr id="{{id}}">
      <td>{{date_created}}</td>
      <td>{{number}}</td>
      <td>{{date_supply}}</td>
      <td>{{date_due}}</td>
      <td>{{comment}}</td>
      <td class="center">
        <a class="btn" href="./edit.html?id={{id}}">
          <i class="material-icons">edit</i>
        </a>
        <button class="btn" data-id={{id}}>
          <i class="material-icons">delete</i>
        </button>
      </td>
    </tr>
    `;
  }
  
	Template.prototype.showList = function (data) {
    let listView = '';
    for(let i = 0; i < data.length; i++) {
      let template = this.invoiceListItemTemplate;
      template = template.replace('{{date_created}}', data[i].date_created);
			template = template.replace('{{number}}', data[i].number);
      template = template.replace('{{date_supply}}', data[i].date_supply);
      template = template.replace('{{date_due}}', data[i].date_due);
      template = template.replace('{{comment}}', data[i].comment);

      template = template.replace('{{id}}', data[i].id);
      template = template.replace('{{id}}', data[i].id);
      template = template.replace('{{id}}', data[i].id);

      listView += template;
    }

		return listView;
	};

	window.app = window.app || {};
	window.app.Template = Template;
})(window);