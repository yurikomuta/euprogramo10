document.getElementById("enviar").addEventListener("click",validaFormulario)

function validaFormulario(){

  if(document.getElementById("nome").value != "" &&
     document.getElementById("email").value != "" &&
     document.getElementById("tel").value != "" ){

    alert("Prontinho! você receberá as novidades por email.")
  }else{
    alert("Por favor, preencha os campos nome e email.")
  }
}

