import { gsap } from "gsap";

const proposalDialog = document.querySelector("dialog");

function toggleProposal() {
  proposalDialog?.showModal();
}

const proposalToggles = document.querySelectorAll('[proposal-toggle="true"]');
proposalToggles.forEach((proposalToggle) => {
  proposalToggle.addEventListener("click", () => toggleProposal());
});
