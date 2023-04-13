/*// 
IF A)
function doisNumero(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(numero1, "é o Maior numero!");
  } else if (numero1 < numero2) {
    console.log(numero2, "é o Maior numero!");
  }
}
doisNumero(10, 20);
//*/

/*// 
IF B)
function posiNegaZero(num) {
  if (num > "0") {
    console.log("Positivo");
  } else if (num < "0") {
    console.log("Negativo");
  } else if (num === "0") {
    console.log("zero");
  }
}
posiNegaZero(-3);
//*/

/*// 
IF C)
function parInpar(numero) {
  if (numero % 2 == 0) {
    console.log("Par");
  } else {
    console.log("Ínpar");
  }
}
parInpar(1241);
//*/

/*// 
Function A)
function somaNumeros(num1, num2, num3) {
  return [num1 + num2 + num3];
}
console.log(somaNumeros(2, 5, 3));
//*/

/*// 
Function B)
function medNumeros(num1, num2, num3) {
  return [num1 + num2 + num3] / 3;
}
console.log(medNumeros(12, 35, 4));
//*/

/*// 
Function C)
function maiorNumero(num1, num2, num3) {

  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else if (num3 > num1 && num3 > num2) {
    return num3;
  }
}
console.log(maiorNumero(51, 42, 18));
//*/

/*// 
Function D)
function menorNumero(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    return num1;
  } else if (num2 < num1 && num2 < num3) {
    return num2;
  } else if (num3 < num1 && num3 < num2) {
    return num3;
  }
}
console.log(menorNumero(11, 42, 32));
//*/

/*// Array A)
function numCrescente(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
      return [num3, num2, num1];
    } else {
      return [num2, num3, num1];
    }
  } else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
      return [num3, num1, num2];
    } else {
      return [num1, num3, num2];
    }
  } else if (num3 > num1 && num3 > num2) {
    if (num1 > num2) {
      return [num2, num1, num3];
    } else {
      return [num1, num2, num3];
    }
  }
  return [num1, num2, num3];
}

let arrayCrescente = [5, 11, 7];
console.log(
  numCrescente(arrayCrescente[0], arrayCrescente[1], arrayCrescente[2])
);
//*/

/*// Array B)
function numCrescente(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    if (num2 < num3) {
      return [num3, num2, num1];
    } else {
      return [num2, num3, num1];
    }
  } else if (num2 < num1 && num2 < num3) {
    if (num1 < num3) {
      return [num3, num1, num2];
    } else {
      return [num1, num3, num2];
    }
  } else if (num3 < num1 && num3 < num2) {
    if (num1 < num2) {
      return [num2, num1, num3];
    } else {
      return [num1, num2, num3];
    }
  }
  return [num1, num2, num3];
}

let arrayCrescente = [5, 11, 7];
console.log(
  numCrescente(arrayCrescente[0], arrayCrescente[1], arrayCrescente[2])
);

//*/
/*// 
OBJETO)

const carro = {
  modelo: "Opala SS",
  ano: 1974,
  cor: "vermelho",
  velocidadeAtual: 0,

  acelerar: function (velocidade) {
    this.velocidadeAtual += velocidade;
  },

  frear: function (velocidade) {
    this.velocidadeAtual -= velocidade;
  },
};

console.log(carro.modelo);
console.log(carro.ano);
console.log(carro.cor);

console.log("Ligando.........");

console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Acelerando..........");

carro.acelerar(20);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Acelerando..........");

carro.acelerar(20);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Acelerando..........");

carro.acelerar(40);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Acelerando..........");

carro.acelerar(20);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Acelerando..........");

carro.acelerar(40);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Freando..........");

carro.frear(20);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Freando..........");

carro.frear(40);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Freando..........");

carro.frear(40);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Freando..........");

carro.frear(30);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Freando..........");

carro.frear(10);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");
//*/
