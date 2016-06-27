import $ from 'jquery';

var node = $(".form_body");
var baseURL = "http://json-data.herokuapp.com/forms";

// The following function dynamically creates the form from the ajax call

function form_template(field) {
    return `<div class="form_content"><form>
    <label for="${field.label}" class = "form_label">${field.label}</label>
    <input id="${field.id}" class = "form_field" type="text"></br>
    <i class="fa ${field.icon}"></i></form>
  </div>`;
};

// The following ajax call requests the form data, calls the form function
// and appends the data to the node.

$.ajax({
  url: baseURL,
  dataType: "json"
}).then(function(response){
    var formHTML = response.map(form_template);
    node.append(formHTML);
});
