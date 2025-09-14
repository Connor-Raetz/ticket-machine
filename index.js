
const allCoins = document.querySelectorAll('.coin-button');
const fiveCent = document.getElementById('five-cent');
const tenCent = document.getElementById('ten-cent');

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
        console.log(timeValue);
    })
})