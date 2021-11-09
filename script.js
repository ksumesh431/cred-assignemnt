let addButton = document.querySelector(".add-btn");
let inputFields = document.querySelector(".inp-fields");
let submitButtons = document.querySelector(".submit-buttons");
let tBody = document.querySelector("tbody");

let cancelBtn = document.querySelector(".cancel-btn");
let clearBtn = document.querySelector(".clear-btn");
let saveBtn = document.querySelector(".save-btn");

let nameField = document.querySelector(".name-field");
let dateField = document.querySelector(".date-field");
let designationField = document.querySelector(".designation-field");
let ageField = document.querySelector(".age-field");

addButton.addEventListener("click", function (e) {
    addButton.style.display = "none";
    inputFields.style.display = "flex";
    submitButtons.style.display = "flex";
    nameField.value = ""
    dateField.value = ""
    designationField.value = ""
    ageField.value = ""
})
cancelBtn.addEventListener("click", function (e) {
    addButton.style.display = "block";
    inputFields.style.display = "none";
    submitButtons.style.display = "none";
})
clearBtn.addEventListener("click", function (e) {
    nameField.value = ""
    dateField.value = ""
    designationField.value = ""
    ageField.value = ""
})
saveBtn.addEventListener("click", function (e) {
    let name = nameField.value;
    let date = dateField.value;
    let designation = designationField.value;
    let age = ageField.value;
    if (name && date && designation && age) {
        makeRow(name, date, designation, age);
        addButton.style.display = "block";
        inputFields.style.display = "none";
        submitButtons.style.display = "none";
    } else {
        alert("Please fill all the boxes");
    }
})
const makeRow = (name, date, designation, age) => {
    let newRow = document.createElement("tr");
    newRow.innerHTML = `<th scope="row">${name}</th>
    <td>${designation}</</td>
    <td>${date}</</td>
    <td>${age}</</td>
    <td><div class="button-div">
    <button type="button" class="btn btn-danger ">Delete</button>
</div></td>`
    newRow.querySelector("button").addEventListener("click", function (e) {
        newRow.remove();
    })
    tBody.appendChild(newRow);

}
