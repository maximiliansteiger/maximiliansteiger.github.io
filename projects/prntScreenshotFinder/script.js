/**
 * Opens a new tab
 * 
 * @param {String} pattern 
 */
function openPrnt(pattern) {

    let win = window.open(`https://prnt.sc/${pattern}`, '_blank');
    if (!win) {

        alert('Please allow popups for this site / disable adblocker');
    }
}

/**
 * generates a random link
 */
function getRandomLink() {
    let pattern = "";
    let lettersAndNumbers = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
        pattern += lettersAndNumbers.charAt(Math.floor(Math.random() * lettersAndNumbers.length));
    }
    openPrnt(pattern);
}
/**
 * opens the given link
 */
function getSingleLink() {
    let pattern = document.getElementById("patternInput").value;
    openPrnt(pattern)
}


/**
 * opens a few links ("." with a number between 100 and the stopvalue)
 */
function getLoopLink() {
    let pattern = document.getElementById("loopInput").value;
    let stopvalue = document.getElementById("stopValue").value;
    let i = 100;
    let interval = setInterval(function () {
        pattern = document.getElementById("loopInput").value;
        openPrnt(pattern.replace(".", i++));
        if (i > stopvalue) {
            clearInterval(interval);
        }
    }, 1000);


}
/**
 * opens 10 random links
 */
function getRandomLoop() {
    let stopvalueRandom = document.getElementById("stopvalueRandom").value;
    let i = 1;
    let interval = setInterval(function () {
        i++;
        getRandomLink();
        if (i > stopvalueRandom) {
            clearInterval(interval);
        }
    }, 1000);

}