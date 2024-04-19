function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual a melhor marca?");

    
    if (respostaTime.toLowerCase() === "Adidas") {
      alert("Isso mesmo! Adidas é a melhor marca!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}