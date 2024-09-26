import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // Loading animations
  const loadingTl = gsap.timeline();
  const headerComp = document.querySelector("#header-comp");

  loadingTl.from("header", { opacity: 0, duration: 1.5 });

  loadingTl.from(
    headerComp.children,
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

  // Header scroll animations
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

  // Services section animations
  const servicesTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#services",
      start: "top 40%",
      end: "top 40%",
      toggleActions: "restart none reverse none",
    },
  });

  servicesTl.from("#services", {
    opacity: 0,
    y: 20,
    ease: "power2.out",
  });

  const serviceCardsChildren =
    document.querySelector("#service-cards").children;

  servicesTl.from(
    serviceCardsChildren,
    {
      opacity: 0,
      y: 20,
      ease: "power2.out",
      stagger: 0.05,
    },
    "<0.1",
  );

  servicesTl.from(
    "#tech",
    {
      opacity: 0,
      y: 20,
      ease: "power2.out",
    },
    "<0.3",
  );

  // Services section animations
  const projectsTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#projects",
      start: "top 40%",
      end: "top 40%",
      toggleActions: "restart none reverse none",
    },
  });

  projectsTl.from("#projects", {
    opacity: 0,
    y: 20,
    ease: "power2.out",
  });

  const projectCardsChildren =
    document.querySelector("#project-cards").children;

  projectsTl.from(
    projectCardsChildren,
    {
      opacity: 0,
      y: 20,
      ease: "power2.out",
      stagger: 0.05,
    },
    "<0.1",
  );
});
