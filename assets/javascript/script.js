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




    //   funzione per aggiungere effetti al bottone
function aggiungiEffettoBottone(btn){
    // evento al passaggio del mouse
    btn.addEventListener("mouseenter", function(){
        btn.style.boxShadow= "0 0 20px 2px white";
    });
    // evento all'abbandono del bottone del mouse
    btn.addEventListener("mouseleave", function(){
        btn.style.boxShadow= "none";
    })
};

    // aggiunta funzione evento ai bottoni
aggiungiEffettoBottone(btnPlus);
aggiungiEffettoBottone(btnLess);
aggiungiEffettoBottone(btnReset);


    // evento listener addizione
let somma= 0;
btnPlus.addEventListener("click", function(){
    somma= somma +1;
    counterDisplay.innerHTML= somma;
})

    // evento listener sottrazione con "if" nel caso somma fosse minore di zero
btnLess.addEventListener("click", function(){
    somma= somma -1;
    if(somma<0){
        somma=0;
    }
    counterDisplay.innerHTML= somma;
})

    // evento reset
btnReset.addEventListener("click", function(){
    somma= 0;
    counterDisplay.innerHTML= somma;
})
});

















