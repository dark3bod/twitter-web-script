/*
 * remove oneway followees
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

Array.prototype.forEach.call(document.getElementsByClassName('ProfileCard-content'),function(element){
  if (element.getElementsByClassName('FollowStatus').length == 0) {
    var followButton = element.getElementsByClassName('user-actions-follow-button')[0];
    followButton.click()
    sleep(100)
  }
})
