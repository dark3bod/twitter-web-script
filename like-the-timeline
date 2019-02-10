/*
 * like all the tweets in timeline
 * you use this in developers console
 */
function sleep(time) {
    const d1 = new Date();
    while (true) {
        const d2 = new Date();
        if (d2 - d1 > time) {
            return;
        }
    }
}

Array.prototype.forEach.call(document.getElementsByClassName('HeartAnimation'),function(element){
  element.click()
  sleep(10)
})
