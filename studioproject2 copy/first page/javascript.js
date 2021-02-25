var i = 0;
var txt = document.getElementById('demo').textContent; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.getElementById('demo').innerHTML="";

typeWriter();

<script src="/path/to/infinite-scroll.pkgd.min.js"></script>

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}




