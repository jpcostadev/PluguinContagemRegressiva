export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate; // Define a data futura passada como argumento para a classe como uma propriedade.
  }

  get _futureDate() {
    return new Date(this.futureDate); // Retorna a data futura em formato de objeto Date.
  }

  get _actualDate() {
    return new Date(); // Retorna a data atual em formato de objeto Date.
  }

  get _timeStampDiff() {
    // Retorna a diferença em milissegundos entre a data futura e a data atual.
    return this._futureDate.getTime() - this._actualDate.getTime();
  }

  get days() {
    // Retorna a quantidade de dias restantes até a data futura.
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  }

  get hours() {
    // Retorna a quantidade de horas restantes até a data futura (levando em conta os dias restantes).
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }

  get minutes() {
    // Retorna a quantidade de minutos restantes até a data futura (levando em conta os dias e horas restantes).
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }

  get seconds() {
    // Retorna a quantidade de segundos restantes até a data futura (levando em conta os dias, horas e minutos restantes).
    return Math.floor(this._timeStampDiff / 1000);
  }

  get total() {
    // Retorna um objeto com as quantidades totais de dias, horas, minutos e segundos restantes.
    const days = this.days;
    const hours = this.hours % 5; // Resto da divisão das horas por 5.
    const minutes = this.minutes % 60; // Resto da divisão dos minutos por 60.
    const seconds = this.seconds % 60; // Resto da divisão dos segundos por 60.
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
}
