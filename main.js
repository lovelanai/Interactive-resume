var sop = new Audio();
sop.src = "./assets/audio/sop.wav";


/** Removes intro-scene and replace it with the main content (resumé) */

function showresume() {
  //Remove intro scene
  var myobj = document.getElementById("container");
  myobj.remove();
  var myobj = document.getElementById("container-mobile");
  myobj.remove();

  // Show main content (resumé)
  document.getElementById('resume').style.display = "grid";

  // Slide animation for curtain-opener
  $("#opencurtain").delay(3000).animate({ "top": "-10rem" }, 500)
}



/** Eyeball movement */
var balls = document.getElementsByClassName("ball");
document.onmousemove = function () {
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerHeight + "%";


  //event.clientX => get the horizontal coordinate of the mouse
  //event.clientY => get the Vertical coordinate of the mouse
  //window.innerWidth => get the browser width
  //window.innerHeight => get the browser height


  for (var i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
  }

}



/**Curtain+effects */

function open_curtain() {
  // Starts zeppelin animation
  document.getElementById('zeppelin-container').style.display = "flex";

    // Arm pulling rope animation
  $("#arm").animate({ "left": "-17.25rem", "z-index": "1" }, 100)
  $("#arm").delay(400).animate({ "top": "15rem" }, 200)
  $("#arm").delay(100).animate({ "top": "10rem", "z-index": "-1" }, 100)
  $("#arm").animate({ "left": "0rem" }, 100)

  // Curtain opening animation

  $("#curtain1").delay(500).animate({ width: 20 }, 1000);
  $("#curtain2").delay(500).animate({ width: 20 }, 1000);
  $("#left-side").animate({ "z-index": "1" }, 1400);

// Switch between opening and closing curtain buttons

  document.getElementById('opencurtain').style.display = "none";
  document.getElementById('closecurtain').style.display = "initial";
}
function close_curtain() {

    // Arm pulling rope animation
  $("#arm").animate({ "left": "-17.25rem", "z-index": "1" }, 100)
  $("#arm").delay(400).animate({ "top": "15rem" }, 200)
  $("#arm").delay(100).animate({ "top": "10rem", "z-index": "-1" }, 100)
  $("#arm").animate({ "left": "0rem" }, 100)

  // Curtain closing animation
  $("#curtain1").delay(500).animate({ width: 520 }, 1000);
  $("#curtain2").delay(500).animate({ width: 520 }, 1000);
  $("#left-side").animate({ "z-index": "0" }, 100);

  // Switch between closing and opening curtain buttons
  document.getElementById('opencurtain').style.display = "initial";
  document.getElementById('closecurtain').style.display = "none";
}
