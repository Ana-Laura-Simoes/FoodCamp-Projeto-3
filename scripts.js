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

function selecionarPRATO(op,valor,item) {
    NomePrato = item;
    ValorSobremesa = parseFloat(valor.replace(",", "."));
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
function selecionarBEBIDA(op, valor,item) {
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

function selecionarSOBREMESA(op, valor,item) {
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
