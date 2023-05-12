//event listener 1
console.log("Your index file is loaded correctly!"); 

//event listener 2
$("#myBtn").on("click", function() {
    console.log("You clicked on #myBtn");
}); 

//scroll to top interaction
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
