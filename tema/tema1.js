let btnToggle = document.getElementById("toggle-content");
let btnAdd = document.getElementById("add-content");
let btnRemove = document.getElementById("remove-content");

btnToggle.addEventListener("click", onClickBtnToggle);
btnAdd.addEventListener("click", onClickBtnAdd);
btnRemove.addEventListener("click", onClickBtnRemove);

function dateTimePicker() {
    let date = document.getElementById("datepicker");
    date.datepicker();
}