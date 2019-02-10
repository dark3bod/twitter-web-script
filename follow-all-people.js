/*
 * follow all people
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

Array.prototype.forEach.call(document.getElementsByClassName('user-actions-follow-button'),function(element){
  parent = element.parentNode;
  if( parent.classList.contains('not-following') == true ){
    element.click()
    sleep(100)
  }
})
