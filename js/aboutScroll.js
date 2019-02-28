var tl0 = new TimelineMax();
var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

// tl0.from('#base_information_box', .5, {y:200, opacity: 0});

tl.from('#skill_box', .5, { x : -200 ,opacity: 0});

tl2.from('#experience_box', .5, {x:200, opacity: 0});


// tl2.from('#experience_box', .5, {x:200, opacity: 0});
// tl.from('span', 1, { width: 0}, "=-.5");
// tl.from('#office', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
// tl.from('#building', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");

// tl2.from("#box", 1, {opacity: 0, scale: 0});
// tl2.to("#box", .5, {left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'})


// const scene0 = new ScrollMagic.Scene ({

//     triggerElement: "#base_information_box",
//     triggerHook: "onLeave",
//     // duration: "100%"

// })
// .setPin("#base_information_box")
//   .setTween(tl0)
// 		.addTo(controller);

const scene = new ScrollMagic.Scene({
  triggerElement: "#skill_box",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin("#skill_box")
  .setTween(tl)
		.addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#experience_box"
})
  .setTween(tl2)
		.addTo(controller);


function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  console.log(tl.progress());
}