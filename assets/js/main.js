gsap.from('.navbar > div', {
  duration: 1.6,
  opacity: 0,
  ease: "power1.inOut",
  delay: 2.4,
  y: 60
});

gsap.from('.site-logo', {
  duration: 1.6,
  opacity: 0,
  ease: "power1.inOut",
  delay: 2.4,
  y: 40
});

gsap.from('.header > span', {
  duration: 1.5,
  delay: 1,
  stagger: 0.2,
  ease: "bounce.out",
  top: '-100vh'
});

gsap.to('.footer span', {
  duration: 0.4,
  delay: 2.4,
  stagger: 0.2,
  ease: "power1.inOut",
  y: -40
});
