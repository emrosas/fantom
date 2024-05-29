import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const loadingTl = gsap.timeline();
  const headerComp = document.querySelector("#header-comp");
  const headerCompChildren = headerComp.children;

  loadingTl.from("header", { opacity: 0, duration: 1.5 });

  loadingTl.from(
    headerCompChildren,
    {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      ease: "power2.out",
      duration: 0.5,
    },
    "<0.2",
  );

  loadingTl.from(
    "#header-tablet",
    { opacity: 0, y: 35, ease: "power2.out" },
    ">-0.2",
  );

  const headerScrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: "header",
      start: "top top",
      end: "bottom top",
      scrub: 2,
    },
  });

  headerScrollTl.to(headerComp, { opacity: 0, y: 100, ease: "power2.out" });

  headerScrollTl.to(
    "#header-tablet",
    { y: 50, scale: 1.02, ease: "power2.out" },
    "<",
  );

  gsap.from(".section-header", {
    scrollTrigger: {
      trigger: ".section-header",
      start: "top 40%",
      end: "bottom 40%",
      markers: true, 
    },
    opacity: 0,
    y: 20,
    ease: "power2.out",
  });

  const serviceCardsChildren = document.querySelector("#service-cards").children;

  gsap.from(serviceCardsChildren, {
    scrollTrigger: {
      trigger: "#service-cards",
      start: "top 40%",
      end: "bottom 40%",
      markers: true, 
    },
    opacity: 0,
    y: 20,
    ease: "power2.out",
    stagger: 0.05,
  });
});
