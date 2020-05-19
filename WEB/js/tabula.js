var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["objID"] = document.getElementById("objID").value;
    formData["Numurs"] = document.getElementById("Numurs").value;
    formData["Cena"] = document.getElementById("Cena").value;
    formData["Termiņš"] = document.getElementById("Termiņš").value;
    formData["Daudzums"] = document.getElementById("Daudzums").value;
    formData["Laiks"] = document.getElementById("Laiks").value;
    formData["Kabinets"] = document.getElementById("Kabinets").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("Objekti").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.objID;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Numurs;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Cena;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Termiņš;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Daudzums;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.Laiks;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.Kabinets;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("objID").value = "";
    document.getElementById("Numurs").value = "";
    document.getElementById("Cena").value = "";
    document.getElementById("Termiņš").value = "";
    document.getElementById("Daudzums").value = "";
    document.getElementById("Laiks").value = "";
    document.getElementById("Kabinets").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("objID").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Numurs").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Cena").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Termiņš").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Daudzums").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Laiks").value = selectedRow.cells[5].innerHTML;
    document.getElementById("Kabinets").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.objID;
    selectedRow.cells[1].innerHTML = formData.Numurs;
    selectedRow.cells[2].innerHTML = formData.Cena;
    selectedRow.cells[3].innerHTML = formData.Termiņš;
    selectedRow.cells[4].innerHTML = formData.Daudzums;
    selectedRow.cells[5].innerHTML = formData.Laiks;
    selectedRow.cells[6].innerHTML = formData.Kabinets;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("Objekti").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("objID").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}