// selettori elementi html
const calcolatoreTasse = document.querySelector(".calcolatore--tasse");
const inputImporto = document.querySelector(".importo--euro");
const btnCalcola = document.querySelector(".btn--calcola");
const boxImporto = document.querySelector(".box--importo");
const cestinoSvg = document.querySelector(".bi");

// tasse che verranno calcolate
let tasse;
// profitto netto che verrà calcolato
let profittoNetto;
// immagine
let img;
// btnReset
let btnReset;

// funzione che calcola le tasse
const calcTasse = (importo) => {
  return ((importo.split(".").join("") / 100) * 40).toFixed(0);
};

// funzione che calcola il profitto netto
const calcProfittoNetto = (importo) => {
  return (
    +importo.split(".").join("") -
    (importo.split(".").join("") / 100) * 40
  ).toFixed(0);
};

// function che crea dinamicamente due elementi che conterranno il testo con le tasse calcolate e il profitto netto
const displayTasse = () => {
  // creazione dinamica p (tasse)
  tasse = document.createElement("p");
  calcolatoreTasse.appendChild(tasse);
  tasse.classList.add("tasse--profitto-netto");
  tasse.textContent = `Le tasse totali ammontano alla cifra di: ${calcTasse(
    inputImporto.value
  )}€.`;

  // creazione dinamica p (profitto netto)
  profittoNetto = document.createElement("p");
  calcolatoreTasse.appendChild(profittoNetto);
  profittoNetto.classList.add("tasse--profitto-netto");
  profittoNetto.textContent = `Il profitto netto è di: ${calcProfittoNetto(
    inputImporto.value
  )}€.`;

  // creazione dinamica img
  img = document.createElement("img");
  calcolatoreTasse.appendChild(img);
  img.classList.add("img");
  img.src = "img/img-favicon.webp";

  // reset
  if (window.innerWidth > 1000) {
    // display grande bottone elimina ricerche
    btnReset = document.createElement("button");
    document.body.appendChild(btnReset);
    btnReset.textContent = "Cancella ricerche";
    btnReset.classList.add("btn--reset");

    // function reset
    btnReset.addEventListener("click", function () {
      tasse.style.display = "none";
      profittoNetto.style.display = "none";
      inputImporto.value = " ";
      img.style.display = "none";
    });
  } else {
    // display piccolo cestino elimina ricerche
    cestinoSvg.classList.toggle("bi");

    // function reset
    cestinoSvg.addEventListener("click", function () {
      tasse.style.display = "none";
      profittoNetto.style.display = "none";
      inputImporto.value = " ";
      img.style.display = "none";
    });
  }
};

btnCalcola.addEventListener("click", displayTasse);
