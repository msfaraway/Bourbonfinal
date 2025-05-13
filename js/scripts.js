gsap.registerPlugin(ScrollTrigger);

gsap.to(".section", {
  y: "-100vh",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true
  }
});
