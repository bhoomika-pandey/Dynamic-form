var selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();
  if (selectedRow == null) insertNewRecord(formData);
  else updateRecord(formData);
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["emailId"] = document.getElementById("emailId").value;
  formData["department"] = document.getElementById("department").value;
  formData["phone"] = document.getElementById("phone").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("officer-list")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.emailId;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.department;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.phone;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<a onClick="onEdit(this)" data-toggle="modal" data-target="#add-officer" data-whatever="@mdo">Edit</a>
                     <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("emailId").value = "";
  document.getElementById("department").value = "";
  document.getElementById("phone").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("emailId").value = selectedRow.cells[1].innerHTML;
  document.getElementById("department").value = selectedRow.cells[2].innerHTML;
  document.getElementById("phone").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.emailId;
  selectedRow.cells[2].innerHTML = formData.department;
  selectedRow.cells[3].innerHTML = formData.phone;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("officer-list").deleteRow(row.rowIndex);
    resetForm();
  }
}

// function validate() {
//   isValid = true;
//   if (document.getElementById("fullName").value == "") {
//     isValid = false;
//     document.getElementById("fullNameValidationError").classList.remove("hide");
//   } else {
//     isValid = true;
//     if (
//       !document
//         .getElementById("fullNameValidationError")
//         .classList.contains("hide")
//     )
//       document.getElementById("fullNameValidationError").classList.add("hide");
//   }
//   return isValid;
// }
