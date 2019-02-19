function aniemtionEvent(selector) {
    var elm = document.querySelector(selector);
    elm.addEventListener('animationstart', function (e) {});
    elm.addEventListener('onanimate', function (e) {});
    elm.addEventListener('animationend', function (e) {});
}

function animetionContinue (animetion1,animetion2,display = "block") {
    var elm = document.querySelector(animetion1);
    elm.addEventListener('animationend', function (e) {
        console.log("aniemtion End")
    document.querySelector(animetion2).style.display = display
    });
}



window.onload = function() {
this.animetionContinue("#hello","#name")
this.animetionContinue("#name","#top_container","flex")

} 

