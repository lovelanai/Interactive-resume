
/** Removes intro-scene and replace it with the main content (resumé) */

function showresume() { 
    var myobj = document.getElementById("container");
    myobj.remove();
    document.getElementById('resume').style.display = "grid";
  }
  