// Checkpoint 2 - Microondas com objeto

let tempoComida = {
    pipoca: 10,
    macarrão: 8,
    brigadeiro: 8,
    carne: 15,
    feijão: 12
}

function microondas(prato, tempoPreparo) {
    let tempoPadrao = tempoComida[prato];
  
    if (tempoPreparo >= 3 * tempoPadrao) {
      return "KABUMMM";
    } else if (tempoPreparo >= 2 * tempoPadrao) {
      return "Comida queimada :/";
    } else if (tempoPreparo < tempoPadrao) {
      return "Tempo insuficiente";
    } else if (tempoPreparo > tempoPadrao) {
      return "Tempo não recomendado";
    } else if (tempoPadrao === undefined) {
      return "Prato inexistente";
    } else {
      return "Prato pronto, bom apetite!!!";
    }
  }

  console.log(microondas("carne", 32));