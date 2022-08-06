// window.onscroll = function () { myFunction() };

// var navbar = document.getElementById("nav");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

function responsive() {
  var x = document.getElementById("menu");
  if (x.className === "menu") {
    x.className = "menu2";

  }
  else {
    x.className = "menu";
  }
  var y = document.getElementById("todder");
  if (y.className === "fa fa-bars") {
    y.className = "fa fa-close";
  }
  else {
    y.className = "fa fa-bars";
  }
}


// Counter...
var speed = 8;


function incEltNbr(id) {
  elt = document.getElementById("counter");
  endNbr = Number(document.getElementById("counter").innerHTML);
  incNbrRec(0, endNbr, elt);
  elt = document.getElementById("counter1");
  endNbr = Number(document.getElementById("counter1").innerHTML);
  incNbrRec(0, endNbr, elt);
  elt = document.getElementById("counter2");
  endNbr = Number(document.getElementById("counter2").innerHTML);
  incNbrRec(0, endNbr, elt);
  elt = document.getElementById("counter3");
  endNbr = Number(document.getElementById("counter3").innerHTML);
  incNbrRec(0, endNbr, elt);

}


function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function () {
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}
function incNbr() {
  incEltNbr("counter");
}
incEltNbr("counter");

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})