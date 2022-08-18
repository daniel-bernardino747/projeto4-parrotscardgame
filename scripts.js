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

    if (blabla === pairCard[0]) {
        return;
    }

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

        pairCard.pop();
        pairCard.pop();
    } else {
        setTimeout(() => {
            pairCard[0].classList.remove('flip');
            pairCard[0].children[0].classList.remove("turned");
            pairCard[0].children[1].classList.remove("turned");

            pairCard[1].classList.remove('flip');
            pairCard[1].children[0].classList.remove("turned");
            pairCard[1].children[1].classList.remove("turned");

            pairCard.pop();
            pairCard.pop();
          }, 1000);
    }
}
