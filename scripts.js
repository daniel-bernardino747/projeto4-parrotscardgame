const cards = document.querySelectorAll('.card');

let firstCard, secondCard;
let cont = 1;

for (let card of cards) {
    card.addEventListener('click', function() {

        const front = this.querySelector('.front-card');
        const back = this.querySelector('.back-card');
        front.classList.toggle('hidden')
        back.classList.toggle('unhidden');

        if (cont === 1) {
            firstCard = this;
            cont++;
        } else {
            secondCard = this;
        }

        if (firstCard.dataset.card === secondCard.dataset.card) {
            alert('deu match!')
        }
    });
}

