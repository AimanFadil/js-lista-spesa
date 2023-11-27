//LISTA SPESA CICLO WHILE

let lista_spesa = ['Pane', 'Farina', 'latte', 'Olio', 'Sale','Pomodoro'];
let cont = 0;

while (cont < lista_spesa.length) {
    let prodotto = lista_spesa[cont];
    console.log(prodotto)
    let li = document.createElement("li");
    li.innerText = prodotto;
    document.getElementById("lista_spesa").appendChild(li);
    cont++;
}

