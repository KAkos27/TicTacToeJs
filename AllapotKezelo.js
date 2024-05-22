import Jatekter from "./Jatekter.js";

class AllapotKezelo {
  #jatekLista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  #lepes = 0;

  constructor() {
    new Jatekter(this.#jatekLista);

    $(window).on("katt", (event) => {
      let index = event.detail;
      this.#jatekLista[index] = this.#lepes % 2 === 0 ? "X" : "O";
      this.#lepes++;

      new Jatekter(this.#jatekLista);
    });
  }
}

export default AllapotKezelo;
