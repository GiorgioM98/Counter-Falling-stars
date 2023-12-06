// creazione bottone crescente
const btnPlus= document.createElement("button");
btnPlus.setAttribute("class", "btnPlus");
const textBtnPlus= document.createTextNode("+");
btnPlus.appendChild(textBtnPlus);
document.querySelector(".container").appendChild(btnPlus);



// creazione bottone decrescente
const btnLess= document.createElement("button");
btnLess.setAttribute("class", "btnLess");
const textBtnLess= document.createTextNode("-");
btnLess.appendChild(textBtnLess);
document.querySelector(".container").appendChild(btnLess);



// creazione bottone reset
const btnReset= document.createElement("button");
btnReset.setAttribute("class", "btnReset");
const textBtnReset= document.createTextNode("Reset");
btnReset.appendChild(textBtnReset);
document.querySelector(".container").appendChild(btnReset);


// creazione display contatore
let somma= 0;
const counterDisplay= document.createElement("div");
counterDisplay.setAttribute("class", "counterDisplay")
const textCounterDisplay= document.createTextNode("Conta le stelle!");
counterDisplay.appendChild(textCounterDisplay);
document.querySelector(".container").appendChild(counterDisplay);




// effetto bottone mouseenter/leave
btnPlus.addEventListener("mouseenter", function(){
    btnPlus.style.boxShadow="0 0 20px 2px white";
})
btnPlus.addEventListener("mouseleave", function(){
    btnPlus.style.boxShadow="none";
})


btnLess.addEventListener("mouseenter", function(){
    btnLess.style.boxShadow="0 0 20px 2px white";
})
btnLess.addEventListener("mouseleave", function(){
    btnLess.style.boxShadow="none";
})


btnReset.addEventListener("mouseenter", function(){
    btnReset.style.boxShadow="0 0 20px 2px white";
})
btnReset.addEventListener("mouseleave", function(){
    btnReset.style.boxShadow="none";
})




// evento listener addizione
btnPlus.addEventListener("click", function(){
    somma= somma +1;
    textCounterDisplay.nodeValue = somma;
})

// evento listener sottrazione
btnLess.addEventListener("click", function(){
    somma= somma -1;
    textCounterDisplay.nodeValue = somma;
})

// evento listener contatore uguale a zero
btnLess.addEventListener("click", function(){
    if(somma<0){
        alert("Il contatore e' gia' a zero");
    }
});


// evento reset
btnReset.addEventListener("click", function(){
    somma= 0;
    textCounterDisplay.nodeValue= somma;
})















