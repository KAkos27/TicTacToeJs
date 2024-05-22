class Elem {
  #ertek = "";
  #szuloElem;
  #divElem;
  #index = 0;

  constructor(index, ertek, szuloElem) {
    this.#index = index;
    this.#ertek = ertek;
    this.#szuloElem = szuloElem;
    this.#megjelenit();
    this.#divElem = this.#szuloElem.children("div:last-child");
    this.#divElem.on("click", () => {
      console.log(this.#index);
      this.#trigger("katt");
    });
  }

  #megjelenit = () => {
    let txt = `
        <div class='elem'>
            <p>${this.#ertek}</p>
        </div>`;

    this.#szuloElem.append(txt);
  };

  #trigger = (esemenyNev) => {
    const e = new CustomEvent(esemenyNev, { detail: this.#index });
    window.dispatchEvent(e);
  };
}

export default Elem;
