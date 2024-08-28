const loginInput = document.getElementById('login')
const passwordInput = document.getElementById('password');
const viewpassword = document.getElementById('viewpassword');
const button = document.querySelector('.button');

viewpassword.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        viewpassword.src = '/icon/olho.png';
    } else {
        passwordInput.type = 'password';
        viewpassword.src = '/icon/olho-aberto.png';
    }
})

const loginCorreto = "sam"
const senhaCorreta = "1234"
const menssagem = document.getElementById('menssagem')

function verificarLogin() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    if (login === loginCorreto && password === senhaCorreta) {
        // Salva os dados na sessionStorage
        sessionStorage.setItem('usuarioAutenticado', 'True');
        alert("login bem-sucedido!")
        window.location.href = "pagina.html"
    } else {
        menssagem.textContent = "Login e Senha incorretos!"
    }

}

document.getElementById('botão').addEventListener("click", verificarLogin);