function aniemtionEvent(selector) {
    var elm = document.querySelector(selector);
    elm.addEventListener('animationstart', function (e) {});
    elm.addEventListener('onanimate', function (e) {});
    elm.addEventListener('animationend', function (e) {});
}

function animationContinue (animation1,animation2,display = "block") {
    var elm = document.querySelector(animation1);
    elm.addEventListener('animationend', function (e) {
        console.log("aniemtion End")
    document.querySelector(animation2).style.display = display
    });
}



window.onload = function() {
animationContinue("#hello","#name")
animationContinue("#name",".container_btn")
} 

