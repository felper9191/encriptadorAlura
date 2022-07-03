/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function codifica(){
  let texto = document.getElementById('campo').value;
  let resultado = document.getElementById('resultado');
  
  let codigos = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat'], ['aimes', 'ai']]; 
  texto = texto.toLowerCase();
  
  for(let i = 0; i < codigos.length; i++){
    if(texto.includes(codigos[i][0])){
      texto = texto.replaceAll(codigos[i][0], codigos[i][1]);
    }
  }
    resultado.value = texto;
}
  
function decodifica(){
  let texto = document.getElementById('campo').value;
  let resultado = document.getElementById('resultado');
  
  let codigos = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat'], ['aimes', 'ai']];
  texto = texto.toLowerCase();  
  
  for(let i = 0; i < codigos.length; i++){
    if(texto.includes(codigos[i][0])){
      texto = texto.replaceAll(codigos[i][1], codigos[i][0]);
    }
  }
    resultado.value = texto;
}

function copiaTexto() {
        let textoCopiado = document.getElementById("resultado");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999)
        document.execCommand("copy");
}
