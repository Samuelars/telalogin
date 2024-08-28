const autenticado = window.sessionStorage.getItem("usuarioAutenticado");

if(autenticado !== 'True') {
    window.location = "index.html";
} else {
    console.log("O usuário está autenticado!")
}