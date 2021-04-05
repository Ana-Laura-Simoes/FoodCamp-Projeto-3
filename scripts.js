let prato = 0;
let sobremesa = 0;
let bebida = 0;
let NomePrato;
let ValorPrato;
let NomeBebida;
let ValorBebida;
let NomeSobremesa;
let ValorSobremesa; 
let nome;
let endereço;
let total=0;

function selecionarPRATO(op, valor, item) {
    NomePrato = item;
    ValorPrato = parseFloat(valor.replace(",", "."));
    let certinho = op + "_certinho";
    const selecionado = document.querySelector(".PRATOS .selecionado");
    const CERTO = document.querySelector(".PRATOS .escolhido");
  
    if (selecionado !== null) {
      selecionado.classList.remove("selecionado");
      CERTO.classList.add("escondido");
      CERTO.classList.remove("escolhido");
    }
  
    const elemento = document.querySelector(op);
    elemento.classList.add("selecionado");
    const certo = document.querySelector(certinho);
    certo.classList.remove("escondido");
    certo.classList.add("escolhido");
    prato = 1;
    BotaoFinal();
  }
function selecionarBEBIDA(op, valor, item) {
  NomeBebida = item;
  ValorBebida = parseFloat(valor.replace(",", "."));
  let certinho = op + "_certinho";
  const selecionado = document.querySelector(".BEBIDAS .selecionado");
  const CERTO = document.querySelector(".BEBIDAS .escolhido");

  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
    CERTO.classList.add("escondido");
    CERTO.classList.remove("escolhido");
  }

  const elemento = document.querySelector(op);
  elemento.classList.add("selecionado");
  const certo = document.querySelector(certinho);
  certo.classList.remove("escondido");
  certo.classList.add("escolhido");
  bebida = 1;
  BotaoFinal();
}

function selecionarSOBREMESA(op, valor, item) {
  NomeSobremesa = item;
  ValorSobremesa = parseFloat(valor.replace(",", "."));
  let certinho = op + "_certinho";
  const selecionado = document.querySelector(".SOBREMESAS .selecionado");
  const CERTO = document.querySelector(".SOBREMESAS .escolhido");

  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
    CERTO.classList.add("escondido");
    CERTO.classList.remove("escolhido");
  }

  const elemento = document.querySelector(op);
  elemento.classList.add("selecionado");
  const certo = document.querySelector(certinho);
  certo.classList.remove("escondido");
  certo.classList.add("escolhido");
  sobremesa = 1;
  BotaoFinal();
}

function BotaoFinal() {
    if (prato && bebida && sobremesa) {
      const elemento = document.querySelector(".final .botão");
      elemento.innerHTML = "<p onclick='confirmarPedido()'>Fechar pedido<p>";
      elemento.classList.add("Finalizar");
    }
  }
  function NomeEndereço(){
    nome=prompt("Para continuar, informe seu nome:");
    endereço=prompt("Agora, coloque o endereço para entrega:");
  }
  function confirmarPedido() {
      NomeEndereço();
    const elemento = document.querySelector(".fundo");
    elemento.classList.remove("escondido");

    const itemprato=document.querySelector(".fundo .confirmar .itemPrato");
    itemprato.innerHTML=NomePrato;
    const preçoprato=document.querySelector(".fundo .confirmar .preçoprato");
    preçoprato.innerHTML=ValorPrato.toFixed(2);

    
    const itembebida=document.querySelector(".fundo .confirmar .itemBebida");
    itembebida.innerHTML=NomeBebida;
    const preçobebida=document.querySelector(".fundo .confirmar .preçoBebida");
    preçobebida.innerHTML=ValorBebida.toFixed(2);

    const itemdoce=document.querySelector(".fundo .confirmar .itemDoce");
    itemdoce.innerHTML=NomeSobremesa;
    const preçodoce=document.querySelector(".fundo .confirmar .preçoDoce");
    preçodoce.innerHTML=ValorSobremesa.toFixed(2);

    total = ValorPrato + ValorBebida + ValorSobremesa;

    const itenstotal=document.querySelector(".fundo .confirmar .total");
    itenstotal.innerHTML=total.toFixed(2);
}
  
  function cancelarPedido() {
    const elemento = document.querySelector(".fundo");
    elemento.classList.add("escondido");
  }
 
  function whatsapp(){
    let mensagem =
    "Olá, gostaria de fazer o pedido: \n- Prato: " +NomePrato+"\n- Bebida: " +NomeBebida+"\n- Sobremesa: " +NomeSobremesa +"\nTotal: R$ " +total.toFixed(2);
    //console.log(mensagem);
    mensagem = mensagem + "\n\nNome: " + nome + "\nEndereço: " + endereço;
        mensagem = encodeURIComponent(mensagem);
    window.open("https://wa.me/5514991439964?text=" + mensagem);
  }  
  