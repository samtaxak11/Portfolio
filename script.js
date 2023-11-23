Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./rocket.mp4", "./ribbon.mp4", "./diamond.mp4", "./walk.mp4", "./pattern.mp4"],
});

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+ 20 + "px";
    crsr.style.top = dets.y+ 20 + "px";
});

var boxes = document.querySelectorAll(".box")
var page3 = document.querySelector(".page3")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "300px"
        crsr.style.height = "200px"
        crsr.style.borderRadius = "10px"
        crsr.style.backgroundImage = `url(${att})`
        page3.style.backgroundColor ="#d7f2de"
    })
    elem.addEventListener("mouseleave", function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "0px"
        crsr.style.height = "0px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
        page3.style.backgroundColor = "#F2F2F2"
    })
})

function locoInitialize(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
}
locoInitialize();

function cardHoverEffect() {
  document.querySelectorAll(".cnt")
  .forEach(function(cnt){
    var showingImage;
    cnt.addEventListener("mousemove", function(dets){
      document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
      showingImage = dets.target;
      document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
      showingImage.style.filter = "grayscale(1)";

      document.querySelector(".page4").style.backgroundColor = dets.target.dataset.color;
    })
    cnt.addEventListener("mouseleave", function(dets){
      document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity = 0;
      showingImage.style.filter = "grayscale(0)";

      document.querySelector(".page4").style.backgroundColor = "#F2F2F2";
    })
  })
}
cardHoverEffect();