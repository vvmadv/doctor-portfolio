function darkMode () {
  document.body.classList.toggle('active');
}

// 
function change() {
  let element = document.body;
  element.classList.toggle("dark-mode");

  if (element.classList.contains("dark-mode")) {
 //if class was added to body
    localStorage.setItem("background", "dark-mode");
 //save information in "background" localStorage variable, use dark-mode class name
  } else {
    localStorage.setItem("background", "");
//if class was removed set background" localStorage variable to null
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
//when loading document
  var background = localStorage.getItem("background");
// get localStorage var background
  if (background) {
// if its not null and empty
    document.body.className += background;
//add class to body
  }
});


// 


// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").classList.add('moving-header')
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").classList.remove('moving-header')
    // document.getElementById("logo").style.fontSize = "35px";
  }
}   