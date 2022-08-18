const cards = document.querySelectorAll('.card');

let firstCard, secondCard;
let contadorCardClick = 0;
let pairCard = [];

function flipCard(blabla) {

    const front = blabla.querySelector('.front-card');
    const back = blabla.querySelector('.back-card');
    console.log(front, back)
    contadorCardClick++;

    blabla.classList.add('flip');
    front.classList.add('turned');
    back.classList.add('turned');
    /* back.classList.toggle('unhidden'); */

    pairCard.push(blabla);

    if (pairCard.length === 2) {
        console.log(pairCard);
        checkPair();
    }
}

function checkPair() {
    if (pairCard[0].dataset.card === pairCard[1].dataset.card) {
        pairCard[0].classList.add('disabled');
        pairCard[1].classList.add('disabled');

        checkPair.pop();
        checkPair.pop();
    } else {
        setTimeout(() => {
            blabla.classList.remove('flip');
            checkPair[0].classList.remove("turned");
            checkPair[1].classList.remove("turned");
        
            /* resetCards(); */
          }, 1000);
    }
}

