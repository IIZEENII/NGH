const form = document.getElementById("form");

const validaForm = (event) => {

    event.preventDefault();
    
    const {email, password } = event.target;

    console.log(email, password);
    if (email.value.length == 0 || password.value.length == 0) {
        alert("No se han completado los campos");
    } else {
        if (email.value == "admin@gmail.com") {
            location.href = "../DashboardNGH/Dashboard.html"; 
        } else {
            location.href = "../index.html";
        }
    }   
}

form.addEventListener("submit", validaForm);