import Jatekter from "./Jatekter.js";

const jatekLista = ["X", " ", " ", " ", " ", " ", " ", " ", "O"];
let lepes = 0;

new Jatekter(jatekLista);

$(window).on("katt", (event) => {
  console.log(event.detail);
});
