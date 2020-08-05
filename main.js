let boton = document.getElementById('form1');
let validarDatos = (e) => {

    let input = document.querySelectorAll(".form-control");
    let alertMessage = document.querySelector("#alert-message");

    input.forEach(element => {
        if (element.value === "") {
            e.preventDefault();
            element.classList.add("alert-danger")
            alertMessage.classList.remove("d-none");
        } else {
            element.classList.remove("alert-danger");
            alertMessage.classList.add("d-none");
        }
    });
};
boton.addEventListener("submit", validarDatos)