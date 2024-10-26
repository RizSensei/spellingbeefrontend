
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".left-item").forEach((leftItem) => {
  gsap.fromTo(
    leftItem,
    { x: -100 },
    {
      x: 0,
      duration: 1.5,
      // ease: "power2.out",
      scrollTrigger: {
        trigger: leftItem,
        start: "top 80%", 
        end: "top 30%",
        scrub: 2.5,
      },
    }
  );
});

gsap.utils.toArray(".right-item").forEach((rightItem) => {
  gsap.fromTo(
    rightItem,
    { x: 100 }, 
    {
      x: 0, 
      duration: 1.5, 
      // ease: "power2.out",
      scrollTrigger: {
        trigger: rightItem,
        start: "top 80%", 
        end: "top 30%",
        scrub: 2.5,
      },
    }
  );
});
