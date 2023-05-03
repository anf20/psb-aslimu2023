// event scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    const navbar = document.querySelector("nav");
    navbar.classList.add("bg-white");
    navbar.classList.add("shadow");
  } else {
    const navbar = document.querySelector("nav");
    navbar.classList.remove("bg-white");
    navbar.classList.remove("shadow");
  }
});

// menu for mobile screen
function Menu(e) {
  let list = document.querySelector("ul");
  list.addEventListener("click", () => {
    list.classList.remove("top-[80px]");
    list.classList.remove("opacity-100");
    list.classList.remove("z-100");
    list.classList.remove("min-h-screen");
    e.name = "menu";
  });
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"),
      list.classList.add("z-100"),
      list.classList.add("min-h-screen"))
    : ((e.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"),
      list.classList.remove("z-100"),
      list.classList.remove("min-h-screen"));
}

// profil event
const card1 = document.querySelector(".card-selayangPandang");
const isiCard1 = document.querySelector(".text-selayangPandang");
card1.addEventListener("click", () => {
  isiCard1.classList.toggle("hidden");
});

const card2 = document.querySelector(".card-visi");
const isiCard2 = document.querySelector(".text-visi");
card2.addEventListener("click", () => {
  isiCard2.classList.toggle("hidden");
});

const card3 = document.querySelector(".card-misi");
const isiCard3 = document.querySelector(".text-misi");
card3.addEventListener("click", () => {
  isiCard3.classList.toggle("hidden");
});

const card4 = document.querySelector(".card-prodik");
const isiCard4 = document.querySelector(".text-prodik");
card4.addEventListener("click", () => {
  isiCard4.classList.toggle("hidden");
});
