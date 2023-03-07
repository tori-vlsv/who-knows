import ScrollReveal from "scrollreveal";

function scrollInit() {
  const options = {
    distance: "20%",
    duration: 1000,
    origin: "bottom",
    opacity: 0,
    mobile: false,
  };
  ScrollReveal().reveal(".reveal", options);
}
scrollInit();
