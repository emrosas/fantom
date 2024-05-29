import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navTl = gsap.timeline({
  scrollTrigger: {
    trigger: "header",
    start: "10% top",
    end: "10% top",
    scrub: 1,
  },
});

navTl.from("#navBg", {
  opacity: 0,
  duration: 1,
});
