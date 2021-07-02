// Checkpoint 2 - Microondas com switch

function tempoComida(comida) {
  let resultado;
  switch (comida) {
    case "pipoca":
      resultado = 10;
      break;
    case "macarrão":
      resultado = 8;
      break;
    case "brigadeiro":
      resultado = 8;
      break;
    case "carne":
      resultado = 15;
      break;
    case "feijão":
      resultado = 12;
      break;
  }
  return resultado;
}

function microondas(prato, tempoPreparo) {
  let tempoPadrao = tempoComida(prato);

  if (tempoPreparo >= 3 * tempoPadrao) {
    return "KABUMMM";
  } else if (tempoPreparo >= 2 * tempoPadrao) {
    return "Comida queimada :/";
  } else if (tempoPreparo < tempoPadrao) {
    return "Tempo insuficiente";
  } else if (tempoPadrao === undefined) {
    return "Prato inexistente";
  } else {
    return "Prato pronto, bom apetite!!!";
  }
}

console.log(microondas("carne", 15));
