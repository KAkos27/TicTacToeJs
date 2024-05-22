import Elem from "./Elem.js";

class Jatekter {
  #jatekLista = [];

  constructor(jatekLista) {
    this.#jatekLista = jatekLista;
    const szuloElem = $(".jatekter");

    szuloElem.empty();
    for (let index = 0; index < this.#jatekLista.length; index++) {
      const elem = new Elem(index, this.#jatekLista[index], szuloElem);
    }
  }
}

export default Jatekter;
