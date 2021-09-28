
let baner = document.getElementsByClassName("fondo")[0];
let title = document.getElementsByClassName("title")[0];
let body = document.getElementsByTagName("body")[0];
let cardsocial = document.querySelectorAll(".socialcard");//selecion de todos los elementos que contecgan la misma clase
let cardoverview = document.querySelectorAll(".overiewcards");
var checkbox = document.getElementsByClassName("toggle")[0];
let followers = document.querySelectorAll(".socialcard__followers");
let itemnumber = document.querySelectorAll(".item__number");

checkbox.addEventListener('change', function() {//Validacion de el checkbox
    if(this.checked){
     
        body.style.background = "hsl(0, 0%, 100%)";
        title.style.color = "hsl(230, 17%, 14%)";
        baner.style.background = "hsl(225, 100%, 98%)";
        
        cardsocial.forEach(elemento =>{//aplicar a cada elemento de esta variable las entencias siguientes
            // elemento.style.background = "hsl(227, 47%, 96%)";
            elemento.classList.add("light");
            elemento.classList.remove("hoverdark");
        });
        followers.forEach(followers =>{
            followers.style.color = "hsl(230, 17%, 14%)";
        });
        cardoverview.forEach(overview =>{
            // overview.style.background = "hsl(227, 47%, 96%)";
            overview.classList.add("light");
            overview.classList.remove("hoverdark");
        });
        itemnumber.forEach(item =>{
            item.style.color = "hsl(230, 17%, 14%)";
        });
    }
    else{
        title.style.color = "hsl(0, 0%, 100%)";
        body.style.background = "hsl(230, 17%, 14%)";
        baner.style.background = "hsl(232, 19%, 15%)";
        cardsocial.forEach(elemento =>{
            // elemento.style.background = "hsl(228, 28%, 20%)";
            elemento.classList.add("hoverdark");
            elemento.classList.remove("light");
        });
        followers.forEach(followers =>{
            followers.style.color = "hsl(0, 0%, 100%)";
        });
        cardoverview.forEach(overview =>{
            // overview.style.background = "hsl(228, 28%, 20%)";
            overview.classList.add("hoverdark");
            overview.classList.remove("light");
        });
        itemnumber.forEach(item =>{
            item.style.color = "hsl(0, 0%, 100%)";
        });
    }
});

