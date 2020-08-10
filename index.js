var i=0;
function game() {
  document.getElementById("wlcm").style.display = "none";
  document.getElementById("game").style.display = "inline-block";
  document.getElementById("one").style.display = "inline-block";
  document.getElementById("b1").style.display = "inline-block";
    document.getElementById("five").style.display = "none";
      document.getElementById("b3").style.display = "none";
      i=0;
}

function one() {
  document.getElementById("one").style.display = "none";
  document.getElementById("b1").style.display = "none";
  document.getElementById("two").style.display = "inline-block";
  document.getElementById("b2").style.display = "inline-block";
}

function two(){
  i=i+1;
  switch (i) {
    case 1:
    document.getElementById("two").style.display = "none";
    document.getElementById("three").style.display = "inline-block";
      break;

      case 2:
      document.getElementById("three").style.display = "none";
      document.getElementById("four").style.display = "inline-block";
        break;

        case 3:
        document.getElementById("four").style.display = "none";
        document.getElementById("five").style.display = "inline-block";
        document.getElementById("b2").style.display = "none";
        document.getElementById("b3").style.display = "inline-block"
        break;
  }}

  function exit() {
    document.getElementById("game").style.display= "none";
    document.getElementById("wlcm").style.display = "inline-block";

  }
