const btnlogin = document.querySelector ("#btnlogin");
const imputUuario= document.querySelector ("#usuario");
const imputSenha = document.querySelector ("#senha");
let usuarioLogado = null;
(()=>{
    usuarioLogado = localStorage.getItem ("usuario");
    if(usuarioLogado) {
        window.location.href = "/logado.html";

    }
})();

btnLogin.onclick = () => {
    e.preventDefault();

    let usuario = inputUsuario.value;
    let senha = inputSenha.value;
    if(usuario) {
        if(usuario ==="raul"){
            if(senha ==="123"){  
                localStorage.setItem("usuario", usuario);
                window.location.helf = "/tmp/guest-qnirxf/%C3%81rea%20de%20Trabalho/g243I2t-main/index.html";
            }
            else{
                inputUsuario.focus();
            }      
        }
    }
    }
   

