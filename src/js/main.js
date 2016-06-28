import $ from 'jquery';

var node = $(".form_body");
var baseURL = "http://json-data.herokuapp.com/forms";

// The following function dynamically creates for text, email, phone
// WORKING CODE
// function textTemplate(field) {
//     return `<div class="form_content">
//   <label for="${field.label}" class = "form_label">${field.label}</label>
//   <input id="${field.id}" class = "form_field" type=${field.type}></br>
//   <i class="fa ${field.icon}"></i>
//   </div>`;
// }


function textTemplate(field) {
    return `<div class="form_content" id="${field.id}">
    <label for="${field.label}" class = "form_label">${field.label}</label>
  <input id="${field.id}" class = "form_field" type=${field.type}></br>
  <i class="fa ${field.icon}"></i>
  </div>`;
}

// The following function dynamically creates for textarea

function textareaTemplate(field) {
    return `<div class="form_textarea_field">
  <label for="${field.label}" class = "form_label">${field.label}</label>
  <textarea name="${field.id}" rows="3" cols="50"></textarea></br>
  <i class="fa ${field.icon}"></i>
  </div>`;
}

// The following function dynamically creates for select

function selectTemplate(field) {
    var selectString = ""
    var optionsString = ""
    selectString = `<div class="form_select_field"><select name ="language_select">`
    field.options.forEach(function(option) {
        optionsString += `<option value = "${option.value}">${option.label}</option>`
    })
    return selectString += optionsString + `</select></div>`;
};


// The following function checks the field.type
// and calls the appropriate function

function generateHTML(field) {
    if (field.type === "text") {
        return textTemplate(field);
    } else if (field.type === "textarea") {
        return textareaTemplate(field);
    } else if (field.type === "email") {
        return textTemplate(field);
    } else if (field.type === "tel") {
        return textTemplate(field);
    } else if (field.type === "select") {
        return selectTemplate(field);
    };
};


// The following ajax call requests the form data, calls the form function
// and appends the data to the node.

$.ajax({
    url: baseURL,
    dataType: "json"
}).then(function(response) {
    var formHTML = response.map(generateHTML);
    node.append(formHTML);
});
