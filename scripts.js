const cards = document.querySelectorAll('.card');
const box = document.querySelector('.screen');

let contadorCardClick = 0;
let qtdeCartas = 0;
let toWinGame = 0;

let pairCard = [];
let cardList;

startGame();

function startGame() {

    alert('Bem-vindo ao Parrot Card Game, clique "OK" e escolha o número de cartas para jogar.');
    playGame();
}

function playGame() {

    qtdeCartas = Number(prompt('Número de Cartas: (min. 4 / max. 14)'));

    if (qtdeCartas % 2 === 0 && 4 <= qtdeCartas && qtdeCartas <= 14) {

        createCards(qtdeCartas);
        cardList.sort(comparador);

        function comparador() {
            return Math.random() - 0.5;
        }

        showInHTML();

    } else {

        alert('Por favor, só números pares entre 4 e 14.');
        playGame();
    }
}

function winGame() {

    if (toWinGame === qtdeCartas) {

        const timeMin = document.getElementById('minute').innerText;
        const timeSec = document.getElementById('second').innerText;
        const timeMil = document.getElementById('millisecond').innerText;

        if (timeMin === '00') {
            alert(`Parabéns, você terminou em ${contadorCardClick} jogadas! \nE seu tempo foi:  \n\n${timeSec} segundo(s) e ${timeMil} milisegundo(s)`);
 
        } else {
            alert(`Parabéns, você terminou em ${contadorCardClick} jogadas! \nE seu tempo foi:  \n\n${timeMin} minuto(s), \n${timeSec} segundo(s) e ${timeMil} milisegundo(s)`);
        }
        playAgain();

    } else {
        return;
    }
}

function playAgain() {

    let answer = prompt('Quer jogar de novo?')

    if (
        answer === 'Sim' || answer === 'sim' ||
        answer === 'S' || answer === 's'
    ) {
        NumberCards = cardList.length

        contadorCardClick = 0;
        toWinGame = 0;

        for (i = 0; i < NumberCards; i++) {

            const toRemove = document.querySelector('.card');
            toRemove.remove();
            cardList.pop();
        }

        playGame();

    } else if (
        answer === 'Não' || answer === 'não' ||
        answer === 'N' || answer === 'n'
    ) {
        alert('Obrigado por jogar com a gente!');

    } else {

        alert('Não entendi. Por favor, responda com "sim" ou "não".');
        playAgain();
    }

}

function createCards(Number) {

    const firstsCards = [];
    const secondsCards = [];

    for (i = 0; i < Number / 2; i++) {

        const divCard = document.createElement('div');
        divCard.className = 'card';
        divCard.setAttribute(`data-card`, `card${i}`);
        divCard.setAttribute('onclick', 'flipCard(this)');

        const imgFront = document.createElement('img');
        imgFront.className = 'front-card';
        imgFront.src = './src/front.png';


        const imgBack = document.createElement('img');
        imgBack.className = 'back-card';
        imgBack.src = `./src/${i}.gif`;

        divCard.appendChild(imgFront);
        divCard.appendChild(imgBack);

        firstsCards[i] = divCard;
    }

    for (i = 0; i < Number / 2; i++) {

        const divCard = document.createElement('div');
        divCard.className = 'card';
        divCard.setAttribute(`data-card`, `card${i}`);
        divCard.setAttribute('onclick', 'flipCard(this)');

        const imgFront = document.createElement('img');
        imgFront.className = 'front-card';
        imgFront.src = './src/front.png';


        const imgBack = document.createElement('img');
        imgBack.className = 'back-card';
        imgBack.src = `./src/${i}.gif`;

        divCard.appendChild(imgBack);
        divCard.appendChild(imgFront);

        secondsCards[i] = divCard;
    }

    cardList = firstsCards.concat(secondsCards);
}

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
        toWinGame = toWinGame + 2;

        pairCard.pop();
        pairCard.pop();

        setTimeout(winGame, 1000);

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

function showInHTML() {

    for (i = 0; i < cardList.length; i++) {

        box.appendChild(cardList[i]);
    }
}

// --------------- clock --------------- //

let minute = 0;
let second = 0;
let millisecond = 0;

let time;

function start() {
    time = setInterval(timer, 10);
}

function timer() {

    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
    }

    document.getElementById('minute').innerText = returnTime(minute);
    document.getElementById('second').innerText = returnTime(second);
    document.getElementById('millisecond').innerText = returnTime(millisecond);
}

function returnTime(time) {
    if (time > 10) {
        return time;
    } else {
        return `0${time}`;
    }
}

function show() {
    const blabla = document.querySelector('.clock').innerText;
    console.log(blabla)
}