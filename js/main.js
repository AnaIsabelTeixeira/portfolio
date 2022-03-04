//ANA ISABEL TEIXEIRA

//TEXT FRAME

jQuery(document).ready(function () {
  const heights = ["40", "20", "10", "60", "80"];
  const height = heights.shift();
  console.log(height);
  $('#outer').css('top', height);
  heights.push(height);
  

let outer = document.querySelector("#outer");
let content = outer.querySelector("#content");

repeatContent(content, outer.offsetWidth);

let el = outer.querySelector("#loop");
el.innerHTML = el.innerHTML + el.innerHTML;

function repeatContent(el, till) {
    let html = el.innerHTML;
    let counter = 0; // prevents infinite loop
    
    while (el.offsetWidth < till && counter < 100) {
        el.innerHTML += html;
        counter += 1;
    }
}

//IMAGE SLIDER
//https://codepen.io/kellyex/pen/KKwwdYg
// falta dar reset ao start sempre que se abre outro projeto 
//ignorar se não for mobile


let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.items');

const end = () => {
	isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;	
}

const move = (e) => {
	if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

(() => {
	slider.addEventListener("mousedown", start);
	slider.addEventListener("touchstart", start);

	slider.addEventListener("mousemove", move);
	slider.addEventListener("touchmove", move);

	slider.addEventListener("mouseleave", end);
	slider.addEventListener("mouseup", end);
	slider.addEventListener("touchend", end);
})();

//OPEN CLOSE TABS

jQuery(function($){
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  $(window).resize(function() {
    if(windowWidth != $(window).width() || windowHeight != $(window).height()) {
      location.reload();
      return;
    }
  });
});

if($(window).width() < 768){

}

  jQuery("h3").click(function () {
    
    $("#project_display").scrollTop(0);

      var tab_id = jQuery(this).attr("data-tab");
      console.log(tab_id);
      jQuery("h3").not("[data-tab="+tab_id+"]").removeClass("current");
      jQuery(".project_tab:not(#"+tab_id+")").removeClass("current");

      jQuery(this).toggleClass("current");
      jQuery("#" + tab_id).toggleClass("current");  
      
      if($(window).width() < 768){
        
        $(".items").scrollLeft(0);

      if ($("#project_display:not(:has(.current))")){
        $('.items').css('display', 'none');
      }
  
      if ( $('#tab-0').hasClass('current') ) {
        console.log("slider 1");
        $('.items').css('display', 'block');
        $('.item').css('background-size', 'cover');
        $('.item:first-child').css('background-image', 'url("../img/p1_1.jpg")');
        $('.item:nth-child(2)').css('background-image', 'url("../img/p1_2.gif")');
        $('.item:nth-child(3)').css('background-image', 'url("../img/p1_3.jpg")');
        $('.item:nth-child(4)').css('background-image', 'url("../img/p1_4.gif")');
        $('.item:nth-child(5)').css('background-image', 'url("../img/p1_5.jpg")');
     }
     
     if ( $('#tab-1').hasClass('current') ) {
        console.log("slider 1");
       $('.items').css('display', 'block');
       $('.item').css('background-size', 'contain');
       $('.item:first-child').css('background-image', 'url("../img/p2_1.png")');
       $('.item:nth-child(2)').css('background-image', 'url("../img/p2_2.png")');
       $('.item:nth-child(3)').css('background-image', 'url("../img/p2_3.png")');
       $('.item:nth-child(4)').css('background-image', 'url("../img/p2_4.png")');
       $('.item:nth-child(5)').css('background-image', 'url("../img/p2_6.png")');
    }
  
    if ( $('#tab-2').hasClass('current') ) {
      console.log("slider 1");
     $('.items').css('display', 'block');
     $('.item').css('background-size', 'contain');
     $('.item:first-child').css('background-image', 'url("../img/p3_1.png")');
     $('.item:nth-child(2)').css('background-image', 'url("../img/p3_3.png")');
     $('.item:nth-child(3)').css('background-image', 'url("../img/p3_5.png")');
     $('.item:nth-child(4)').css('background-image', 'url("../img/p3_2.png")');
     $('.item:nth-child(5)').css('display', 'none');
  }

  if ( $('#tab-3').hasClass('current') ) {
    console.log("slider 1");
   $('.items').css('display', 'block');
   $('.item').css('background-size', 'contain');
   $('.item:first-child').css('background-image', 'url("../img/p4_4large.gif")');
   $('.item:nth-child(2)').css('background-image', 'url("../img/p4_1large.jpg")');
   $('.item:nth-child(3)').css('background-image', 'url("../img/p4_2.png")');
   $('.item:nth-child(4)').css('background-image', 'url("../img/p4_2large.gif")');
   $('.item:nth-child(5)').css('display', 'none');
}

if ( $('#tab-4').hasClass('current') ) {
  console.log("slider 1");
 $('.items').css('display', 'block');
 $('.item').css('background-size', 'contain');
 $('.item:first-child').css('background-image', 'url("../img/p5_2.png")');
 $('.item:nth-child(2)').css('background-image', 'url("../img/p5_3.png")');
 $('.item:nth-child(3)').css('background-image', 'url("../img/p5_4.png")');
 $('.item:nth-child(4)').css('background-image', 'url("../img/p5_1.png")');
 $('.item:nth-child(5)').css('display', 'none');
}

if ( $('#tab-5').hasClass('current') ) {
  console.log("slider 1");
 $('.items').css('display', 'block');
 $('.item').css('background-size', 'contain');
 $('.item:first-child').css('background-image', 'url("../img/p6_1.png")');
 $('.item:nth-child(2)').css('background-image', 'url("../img/p6_2.png")');
 $('.item:nth-child(3)').css('background-image', 'url("../img/p6_3.png")');
 $('.item:nth-child(4)').css('background-image', 'url("../img/p6_4.png")');
 $('.item:nth-child(5)').css('background-image', 'url("../img/p6_5.png")');
}

if ( $('#tab-6').hasClass('current') ) {
  console.log("slider 1");
 $('.items').css('display', 'block');
 $('.item').css('background-size', 'contain');
 $('.item:first-child').css('background-image', 'url("../img/p7_1.png")');
 $('.item:nth-child(2)').css('background-image', 'url("../img/p7_2.png")');
 $('.item:nth-child(3)').css('background-image', 'url("../img/p7_3.png")');
 $('.item:nth-child(4)').css('background-image', 'url("../img/p7_4.png")');
 $('.item:nth-child(5)').css('background-image', 'url("../img/p7_5.png")');
}
}
    else{
      $('.items').css('display', 'none');
    } 
})
})

/*RANDOM COLORS*/
/*
function randomColor() {
  const color1 = colors1.shift();
  document.documentElement.style.setProperty("--hover-color", color);
  return 'rgb(' + color.join(', ') + ')';
} */
const hovercolors = ["#ff00ff", "#ff0000", "#0000ff", "#ff6600", "#6600ff", "#00ff00"];
const highlightcolors = ["#abfffe", "#abffbc", "#fff9ab", "#ffabc7", "#cfabff"];
const selectcolors = ["#abfffe", "#abffbc", "#fff9ab", "#ffabc7", "#cfabff"];

$("a, h3").on("mouseover", function () {
    const hovercolor = hovercolors.shift();
    document.documentElement.style.setProperty("--hover-color", hovercolor);
    hovercolors.push(hovercolor);
  });

window.addEventListener("mousedown", (e) => {
  const highlightcolor = highlightcolors.shift();
  document.documentElement.style.setProperty("--highlight-color", highlightcolor);
  highlightcolors.push(highlightcolor);
});

$("a, h3").click(function () {
  const selectcolor = selectcolors.shift();
  document.documentElement.style.setProperty("--select-color", selectcolor);
  selectcolors.push(selectcolor);
});
