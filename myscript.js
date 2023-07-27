// ==================================main-navbar============

let menu1 = document.getElementById('links')
let open1 = document.getElementById('menu-btn')
let close1 = document.getElementById('closebtn')
let color1 = document.getElementById('navbar_main')
let icon1 = document.getElementById('icon')

function openNav() {
  var width = document.getElementById("mySidenav");
  var blur = document.querySelector('#main-sidebar');
  var m_width = document.getElementById("main-sidebar");
  if (window.innerWidth < 768) {
    width.style.width = '100%';
    close1.style.transform = "rotate(360deg)";
  } else {
    width.style.width = '450px';
    blur.style.backdropFilter = 'blur(30px)';
    m_width.style.display = "block";
    close1.style.transform = "rotate(360deg)";
  }
}
function closeNav() {
  var width = document.getElementById("mySidenav");
  var blur = document.querySelector('#main-sidebar');
  var m_width = document.getElementById("main-sidebar");
  width.style.width = "0";
  m_width.style.display = "none";
  close1.style.transform = "rotate(360deg)";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    width.style.top = "0";
    if (screenTop == currentScrollPos) {
      document.getElementById("navbar").style.top = "0px";
    }
  }
  else {
    document.getElementById("navbar").style.top = " -100px";
  }
  prevScrollpos = currentScrollPos;
}


window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar_main");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}




// Get a reference to the HTML element you want to add divs to
var container = document.getElementById('menu-section');

// Get a reference to the button that will trigger the addition of the div
var addButton1 = document.getElementById('list_thumb1');
var addButton2 = document.getElementById('list_thumb2');
var addButton3 = document.getElementById('list_thumb3');

// Set the maximum number of divs that can be added
var divNo1 = document.getElementById('menu-section1');
var divNo2 = document.getElementById('menu-section2');
var divNo3 = document.getElementById('menu-section3');

if (window.innerWidth < 768) {
  // div no 1
  addButton1.addEventListener('click', function () {
    divNo1.style.display = "block";
    // divNo1.style.background = "#191a19";
    divNo1.style.height = "auto";
    divNo2.style.display = "none";
    divNo3.style.display = "none";
  });

  // div no 1
  addButton2.addEventListener('click', function () {
    divNo1.style.display = "none";
    divNo2.style.display = "block";
    // divNo2.style.background = "#191a19";
    divNo2.style.height = "auto";
    divNo3.style.display = "none";
  });

  // div no 1
  addButton3.addEventListener('click', function () {
    divNo1.style.display = "none";
    divNo2.style.display = "none";
    divNo3.style.display = "block";
    // divNo3.style.background = "#191a19";
    divNo3.style.height = "auto";
  });
} else {
  // div no 1
  addButton1.addEventListener('click', function () {
    divNo1.style.display = "flex";
    // divNo1.style.background = "#191a19";
    divNo1.style.height = "auto";
    divNo2.style.display = "none";
    divNo3.style.display = "none";
  });

  // div no 1
  addButton2.addEventListener('click', function () {
    divNo1.style.display = "none";
    divNo2.style.display = "flex";
    // divNo2.style.background = "#191a19";
    divNo2.style.height = "auto";
    divNo3.style.display = "none";
  });

  // div no 1
  addButton3.addEventListener('click', function () {
    divNo1.style.display = "none";
    divNo2.style.display = "none";
    divNo3.style.display = "flex";
    // divNo3.style.background = "#191a19";
    divNo3.style.height = "auto";
  });

}