import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navTl = gsap.timeline({
  scrollTrigger: {
    trigger: "header",
    start: "5% top",
    end: "5% top",
    scrub: 1,
  },
});

navTl.from("#navBg", {
  opacity: 0,
  duration: 1,
});
