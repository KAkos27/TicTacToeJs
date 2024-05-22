class Elem {
  #ertek = "";
  #szuloElem;

  constructor(ertek, szuloElem) {
    this.#ertek = ertek;
    this.#szuloElem = szuloElem;
    this.#megjelenit();
  }

  #megjelenit = () => {
    let txt = `
        <div class='elem'>
            <p>${this.#ertek}</p>
        </div>`;

    this.#szuloElem.append(txt);
  };
}

export default Elem;
