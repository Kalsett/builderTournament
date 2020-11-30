let button = document.getElementById("button");
let buttonCopia = document.getElementById("buttonCopia");
let buttonPulisci = document.getElementById("buttonPulisci");

// Quando Clicchi il primo pulsante
button.addEventListener("click", function () {
  let list = document.getElementById("inputList").value;
  let listFromServer = list.split("\n");
  let listForServer = divideArr(randomizeArr(listFromServer));
  let outputList = document.getElementById("outputList").value;

  for (let fight of listForServer) {
    outputList += "\n" + fight.join(" - ");
  }

  document.getElementById("outputList").value = outputList;
});

// Quando clicchi il pulsante di copia
buttonCopia.addEventListener("click", copyText);

// Quando clicchi il pulsante pulisci
buttonPulisci.addEventListener("click", function () {
  document.getElementById("outputList").value = "";
});

// Funzione che come argomento prende un array e riposiziona i suoi elementi in maniera casuale
function randomizeArr(arr) {
  let rNum = function () {
    return Math.floor(Math.random() * arr.length);
  };
  for (let i = 0; i < arr.length; i++) {
    let tempValue = arr[i];
    let randomIndex = rNum();
    arr[i] = arr[randomIndex];
    arr[randomIndex] = tempValue;
  }
  return arr;
}

// Funzione che prende gli elementi di un array e li restituisce in un nuovo array divisi a coppie,
// Esempio: ['a','b','c','d','e','f','g'] => [['a','b'],['c','d'],['e','f'],['g']]
function divideArr(arr) {
  let newArr = [];
  let competitionList = [];
  for (let i = 0; i <= arr.length; i = i + 2) {
    newArr.push(arr[i]);
    if (arr[i + 1] !== undefined) newArr.push(arr[i + 1]);
    competitionList.push(newArr);
    newArr = [];
  }
  return competitionList;
}

// Funzione che copia il testo premendo un pulsante
function copyText() {
  var copyText = document.getElementById("outputList");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
