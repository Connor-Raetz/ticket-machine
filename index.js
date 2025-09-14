
const fiveCent = document.getElementById('five-cent');

let timeValue = 0;

fiveCent.onclick = function () {
    console.log(timeValue);
    timeValue = timeValue + 5;
    console.log(timeValue);
}