import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitTextJS from "split-text-js";

gsap.registerPlugin(ScrollTrigger);

let loadAnimation = gsap.timeline({
  // scrollTrigger: {
  //   trigger: ".fantom",
  //   start: "top center",
  //   end: "bottom center",
  //   scrub: 1,
  //   markers: true,
  // },
});

loadAnimation.from("#nav", {
  opacity: 0,
  translateY: -50,
  duration: 0.6,
  delay: 0.5,
  ease: "power2",
});
loadAnimation.from(
  "#context",
  {
    opacity: 0,
    translateY: -50,
    duration: 0.6,
    ease: "power2",
  },
  "-=0.40"
);
loadAnimation.from(
  "#fantom",
  {
    opacity: 0,
    translateY: 50,
    duration: 0.6,
    ease: "power2",
  },
  "-=0.20"
);
loadAnimation.from(
  "#main",
  {
    opacity: 0,
    translateX: "100%",
    duration: 1.5,
    ease: "power2",
  },
  "-=0.35"
);

function animationCreator(el1, el2, trigger) {
  let animation = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top center",
      end: "top center",
      toggleActions: "play none reverse none",
      markers: true,
    },
  });

  animation.to(el1, {
    translateY: -50,
    rotateX: 90,
    opacity: 0,
    duration: 0.3,
    ease: "sine.inOut",
  });
  animation.fromTo(
    el2,
    { opacity: 0, translateY: 50, rotateX: -90 },
    {
      display: "block",
      opacity: 1,
      translateY: 0,
      rotateX: 0,
      duration: 0.3,
      ease: "sine.inOut",
    },
    "<"
  );
}

animationCreator("#fantom", "#projects-title", "#projects");
animationCreator("#projects-title", "#contact-title", "#contact");

// let projectsTitle = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#projects",
//     start: "top center",
//     end: "top center",
//     toggleActions: "play none reverse none",
//     markers: true,
//   },
// });

// projectsTitle.to("#fantom", {
//   translateY: -50,
//   rotateX: 90,
//   opacity: 0,
//   duration: 0.3,
//   ease: "sine.inOut",
// });
// projectsTitle.fromTo(
//   "#projects-title",
//   { opacity: 0, translateY: 50, rotateX: -90 },
//   {
//     display: "block",
//     opacity: 1,
//     translateY: 0,
//     rotateX: 0,
//     duration: 0.3,
//     ease: "sine.inOut",
//   },
//   "<"
// );
