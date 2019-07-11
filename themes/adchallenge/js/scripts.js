var newimg = document.createElement("img");
newimg.setAttribute("src", "https://i.ibb.co/ns6Bh0S/hamburger.png");
newimg.setAttribute("id", "hamburger");

document.getElementsByTagName("header")[0].appendChild(newimg);

// toggle

var hamb = document.getElementById("hamburger")
var nav = document.querySelector(".region-header ul.menu")

hamb.addEventListener("click", function(){
    if(nav.classList.contains("open")){
      nav.classList.remove("open");
    } else {
      nav.classList.add("open");
    }
  });


// jquery
// hamb.onclick = function() {myFunction()};
//
// function myFunction() {
//   if (nav.classList.contains("open")){
//     nav.classList.remove("open");
//   } else {
//     nav.className= "open";
//   }
// }
//
// function kaja($){
// $( "#hamburger" ).click(function() {
//   $(".region-header ul.menu").toggleClass( "open" );
//   });
// });
// })(jQuery);
