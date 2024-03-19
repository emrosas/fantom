import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let loadAnimation = gsap.timeline();

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
  "#titles",
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

function animationCreator(trigger, title1, title2, context1, context2) {
  let animation = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top center",
      end: "top center",
      toggleActions: "play none reverse none",
      // markers: true,
    },
  });

  animation.to(title1, {
    translateY: -50,
    rotateX: 90,
    opacity: 0,
    duration: 0.3,
    ease: "sine.inOut",
  });
  animation.fromTo(
    title2,
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
  animation.to(
    context1,
    { opacity: 0, translateX: "-100%", duration: 0.3, ease: "sine.inOut" },
    "<"
  );
  animation.fromTo(
    context2,
    { opacity: 0, translateX: "-100%" },
    {
      opacity: 1,
      duration: 0.3,
      translateX: "0%",
      ease: "sine.inOut",
    },
    "<"
  );
}

animationCreator(
  "#projects",
  "#fantom",
  "#projects-title",
  "#context-fantom",
  "#context-projects"
);
animationCreator(
  "#contact",
  "#projects-title",
  "#contact-title",
  "#context-projects",
  "#context-contact"
);

const titlesDiv = document.querySelector("#titles");
const children = titlesDiv.querySelectorAll("*");

const sections = document.querySelectorAll(".gsap-section");

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("menu li");
  let activeLink = "about";

  function updateActiveLink(id) {
    activeLink = id;
    navLinks.forEach((link) => {
      if (link.attributes.gsap.value === activeLink) {
        link.classList.add("text-brand-2", "opacity-100", "before:opacity-100");
        link.classList.remove("text-brand-1", "opacity-90");
      } else {
        link.classList.remove(
          "text-brand-2",
          "opacity-100",
          "before:opacity-100"
        );
        link.classList.add("text-brand-1", "opacity-90");
      }
    });
  }
  updateActiveLink();
  sections.forEach((section) => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top center", // when the top of the section hits the center of the viewport
        end: "bottom center", // when the bottom of the section hits the center of the viewport
        onEnter: () => updateActiveLink(section.id),
        onEnterBack: () => updateActiveLink(section.id),
      },
    });
  });
});

function projectContextAnimation(projectCard) {
  const projectContext = document
    .querySelector("#context-projects")
    .querySelector(`[id="${projectCard.id}"]`);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: projectCard,
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
      // markers: true,
    },
  });

  tl.fromTo(
    projectContext,
    { opacity: 0, translateY: 50 },
    { opacity: 1, translateY: 0, duration: 0.3, ease: "sine.inOut" }
  );
}

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((projectCard) => {
  projectContextAnimation(projectCard);
});

projectCards.forEach((projectCard) => {
  gsap.to(projectCard, {
    scrollTrigger: {
      trigger: projectCard,
      start: "top center", // when the top of the section hits the center of the viewport
      end: "bottom center", // when the bottom of the section hits the center of the viewport
      onEnter: () => console.log(`entering ${projectCard.id}`),
      onLeave: () => console.log(`exiting ${projectCard.id}`),
    },
  });
});
