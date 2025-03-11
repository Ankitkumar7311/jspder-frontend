var tl = gsap.timeline();

tl.from("#box2",{
x:"-100%",
duration:1,
delay:1,
rotate:360,
 scrollTrigger:{
      trigger:"#page2",
      scroller:"body",
      markers:true,
      start:"top 50%",
      end:"top 30%",
      scrub:2,
      pin:true
}
 })

 tl.from("#box3",{
    x:"-100%",
    duration:1,
    delay:1,
    rotate:360,
     scrollTrigger:{
          trigger:"#box2",
          scroller:"body",
          start:"top 60%",
          end:"top 30%",
          scrub:2,
          pin:true
    }
     })
    
     tl.from("#box4",{
        x:"-100%",
        duration:1,
        delay:1,
        rotate:360,
         scrollTrigger:{
              trigger:"#box2",
              scroller:"body",
              start:"top 60%",
              end:"top 30%",
              scrub:2,
              pin:true
        }
         })

