let num = document.getElementById('number')
let count = 0;

setInterval(() => {
    if (count == 65) {
        clearInterval();
    } else {

        count++;
        num.innerHTML = count + "%";
    }
}, 30)