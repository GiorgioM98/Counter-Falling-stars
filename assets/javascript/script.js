    // aggiunta del DomContentLoad
document.addEventListener("DOMContentLoaded", function(){
    // funzione unica per creare elementi in html
function creaNuovoElemento(tagName,classe, testo){
    nuovoElemento= document.createElement(tagName);
    nuovoElemento.classList.add(classe);
    nuovoElemento.textContent= testo;
    document.querySelector(".container").appendChild(nuovoElemento);
    return nuovoElemento;
}

    // creazione elementi in html e creazione const btn da usare per gli eventi
const btnPlus= creaNuovoElemento("button","btnPlus","+");
const btnLess= creaNuovoElemento("button","btnLess","-");
const btnReset=creaNuovoElemento("button","btnReset","Reset");
const counterDisplay=creaNuovoElemento("div","counterDisplay","Conta le stelle!");



// "MOUSEENTER" NON FUNZIONA IN QUESTO CASO, TUTTI GLI ALTRI EVENT SI' INVECE, NON SONO RIUSCITO A CAPIRE IL MOITVO

    // Creazione funzione sul container per ascoltare tutti gli eventi dentro
    document.querySelector(".container").addEventListener("mouseenter", function(event) {
        const target = event.target;
    
        // Verifica se l'elemento di destinazione ha la classe "btnPlus" o "btnLess" o "btnReset"
        if (target.classList.contains("btnPlus") || target.classList.contains("btnLess")  || target.classList.contains("btnReset")) {
            target.style.boxShadow = "0 0 20px 2px white";
        } else {
            // Rimuovi l'ombra dagli altri elementi
            document.querySelectorAll(".btnPlus, .btnLess").forEach(function(btn) {
                btn.style.boxShadow = "none";
            });
        };
    });
        
    
    
    // dichiarazione della variabile somma inizializzata a 0
    let somma= 0;
    // creazione funzione sul container per ascoltare tutti gli eventi dentro
    document.querySelector(".container").addEventListener("click", function(event){
        const target = event.target;
    
             // Verifica se l'evento proviene da un pulsante all'interno del container
        if (target.closest(".container")) {
            // evento bottone addizione
            if(target.classList.contains("btnPlus")){
                somma++;
                // evento bottone sottrazione con "if" nel caso somma fosse minore di zero
            }else if(target.classList.contains("btnLess")){
                somma--;
                if(somma<0){
                    somma=0;
                }
                // evento bottone reset
            }else if(event.target.classList.contains("btnReset")){
                somma=0;
            }
            // aggiunta di somma a counterdisplay per visualizzare il numero corrente
            counterDisplay.innerHTML= somma;
         };
    });
    });
   



