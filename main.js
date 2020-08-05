let submitForm = document.getElementById('form1');
let validarDatos = (e) => {

    let input = document.querySelectorAll(".form-control");
    let alertMessage = document.querySelector("#alert-message");
    let mandatoryInputs = Array.from(input).filter(val => {
        return (val.id !== "Textarea1");
    });
    mandatoryInputs.forEach(element => {
        if (element.value === "") {
            e.preventDefault();
            element.classList.add("alert-danger")
            alertMessage.classList.remove("d-none");
        } else {
            element.classList.remove("alert-danger");
            
        }
    });
};
submitForm.addEventListener("submit", validarDatos)