
gsap.from("#page1-content h1 span",{
  y:300,
  opacity:0,
  stagger:0.3,
  duration:1.5,
  delay:0.8
})
var page1content=document.querySelector("#page1-content");
var cursor=document.querySelector("#cursor");
page1content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
      })
})

page1content.addEventListener("mouseenter",function(){
  gsap.to(cursor,{
    scale:1,
    opacity:1
  })
})

page1content.addEventListener("mouseleave",function(){
  gsap.to(cursor,{
    scale:0,
    opacity:0
  })
})




  let tl=gsap.timeline()

  tl.from("#loader h3",{
    x:50,
    opacity:0,
    duration:1.5,
    stagger:0.1
  })
  tl.to("#loader h3",{
    x:-40,
    opacity:0,
    duration:1,
    stagger:0.1
  })
  tl.to("#loader",{
    opacity:0,
  })
  tl.to("#loader",{
    opacity:0,
    display:"none"
  })

  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
