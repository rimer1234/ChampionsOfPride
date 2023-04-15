function button1(){
/* Card 1 should go back and card 2 should come front.*/
    const c1 = document.querySelector('.card1');
    const c2 = document.querySelector('.card2');
    c1.classList.add("card1-back");
    c2.classList.add("card2-top");
    c2.classList.remove("card2-back");
    c1.classList.remove("card1-top");
};

function button2(){
    /* Card 2 should go back and card 3 should come front.*/
    const c2 = document.querySelector('.card2');
    const c3 = document.querySelector('.card3');
    c2.classList.add("card2-back");
    c3.classList.add("card3-top");
    c3.classList.remove("card3-back");
    c2.classList.remove("card2-top");
};

function button3(){
    /* Card 3 should go back and card 4 should come front.*/
    const c4 = document.querySelector('.card4');
    const c3 = document.querySelector('.card3');
    c4.classList.add("card4-top");
    c3.classList.add("card3-back");
    c4.classList.remove("card4-back");
    c3.classList.remove("card3-top");
};

function button4(){
    /* Card 4 should go back and card 1 should come front.*/
    const c1 = document.querySelector('.card1');
    const c4 = document.querySelector('.card4');
    c1.classList.add("card1-top");
    c4.classList.add("card4-back");
    c1.classList.remove("card1-back");
    c4.classList.remove("card4-top");
};