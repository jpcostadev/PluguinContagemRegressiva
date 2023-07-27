import Countdown from "./contador.js";

// Cria uma instância da classe Countdown com a data do Natal de 2023
const timeToChristmas = new Countdown("10 November 2023 23:59:59 GMT-0300");

// Define a função que atualiza o display do contador de tempo
function setTimeDisplay() {
  // Seleciona o elemento <span> onde o contador será exibido
  const dias = document.querySelector(".days span");
  const horas = document.querySelector(".hours span");
  const minutos = document.querySelector(".minutes span");
  const seconds = document.querySelector(".seconds span");

  // Define a função interna que atualiza o conteúdo do display com as informações de tempo
  function updateDisplay() {
    // Atualiza o texto do elemento <span> com os valores de dias, horas, minutos e segundos
    dias.textContent = timeToChristmas.total.days;
    horas.textContent = timeToChristmas.total.hours;
    minutos.textContent = timeToChristmas.total.minutes;
    seconds.textContent = timeToChristmas.total.seconds;
  }

  // Atualiza o display imediatamente para evitar um atraso inicial.
  updateDisplay();

  // Atualiza o display a cada segundo usando setInterval.
  setInterval(updateDisplay, 1000);
}

// Chama a função para iniciar a exibição do contador de tempo
setTimeDisplay();
