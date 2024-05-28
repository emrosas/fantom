import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const loadingTl = gsap.timeline();

loadingTl.from("header", {
  opacity: 0,
  duration: 3,
})
