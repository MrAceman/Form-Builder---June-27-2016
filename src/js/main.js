import $ from 'jquery';

var node = $(".form_body");
var baseURL = "http://json-data.herokuapp.com/forms";

// The following function dynamically creates the form from the ajax call

// WORKING FORM GENERATION
// function form_template(field) {
//     return `<div class="form_content"><form>
//     <label for="${field.label}" class = "form_label">${field.label}</label>
//     <input id="${field.id}" class = "form_field" type=${field.type}></br>
//     <i class="fa ${field.icon}"></i></form>
//   </div>`;
// };

function form_template(field) {
    return `<div class="form_content"><form>
    <label for="${field.label}" class = "form_label">${field.label}</label>
    <input id="${field.id}" class = "form_field" type=${field.type}></br>
    <i class="fa ${field.icon}"></i></form>
  </div>`;
};

// <select name="Select Language">
//   <option value="EN">English</option>
//   <option value="FR">French</option>
//   <option value="SP">Spanish</option>
//   <option value="CH">Chinese</option>
//   <option value="JP">Japanese</option>
// </select>


// The following ajax call requests the form data, calls the form function
// and appends the data to the node.

$.ajax({
  url: baseURL,
  dataType: "json"
}).then(function(response){
    var formHTML = response.map(form_template);
    node.append(formHTML);
});
