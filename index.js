
const time = document.querySelector('.time');
const allCoins = document.querySelectorAll('.coin-button');
const ticketButton = document.querySelector('.ticket-button');
const output = document.querySelector('.output');
const reset = document.querySelector('.reset-button');
let timeValue = 0;

allCoins.forEach(coin => {
    coin.addEventListener('click', (event) => {
        const clickedId = event.target.id;

        switch (clickedId) {
            case 'five-cent':
                timeValue += 5;
                break;
            case 'ten-cent':
                timeValue += 10;
                break;
            case 'fifty-cent':
                timeValue += 50;
                break;
            case 'one-euro':
                timeValue += 100;
                break;
            case 'two-euro':
                timeValue += 200;
                break;
        }
        time.innerText = `Time: ${timeValue}min`;
    })
})
ticketButton.onclick = () => {
    output.innerHTML = `You have drawn a ticket that allows you to park here for: <b>${timeValue}min</b>`;
}
reset.onclick = () => {
    timeValue = 0;
    time.innerText = `Time: ${timeValue}min`;
    output.innerText = '';
}