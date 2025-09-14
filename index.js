
const fiveCent = document.getElementById('five-cent');
const tenCent = document.getElementById('ten-cent');

let timeValue = 0;

fiveCent.onclick = function () {
    console.log(timeValue);
    timeValue = timeValue + 5;
    console.log(timeValue);

}
tenCent.onclick = function () {
    console.log(timeValue);
    timeValue = timeValue + 10;
    console.log(timeValue);
}
