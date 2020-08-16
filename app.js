const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const navi = document.querySelectorAll(".navi");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");
const demics = document.querySelector(".border");
const imgdemics = document.querySelector(".border");
const textdemics = document.querySelector(".border");
const culty = document.querySelector(".border");
const imgculty = document.querySelector(".border");
const textculty = document.querySelector(".border");
const ments = document.querySelector(".border");
const imgments = document.querySelector(".border");
const textments = document.querySelector(".border");
const shadow2 = document.querySelector(".shadow");
const foot = document.querySelector(".border");
const imgfoot = document.querySelector(".border");
const imgmob = document.querySelector(".border");
let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  let sectionY = section.getBoundingClientRect();

  translate.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });

  opacity.forEach((element) => {
    element.style.opacity = scroll / (sectionY.top + section_height);
  });

  big_title.style.opacity = -scroll / (header_height / 2) + 1;
  shadow.style.height = `${scroll * 0.5 + 300}px`;

  content.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * 50 - 50
  }px)`;
  image_container.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * -50 + 50
  }px)`;
  demics.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * -30 - 50
  }px)`;
  imgdemics.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * -50 + 50
  }px)`;
  culty.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * -30 - 50
  }px)`;
  imgculty.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * -50 + 50
  }px)`;
  ments.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * -30 - 50
  }px)`;
  imgments.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * -50 + 50
  }px)`;
  foot.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * -30 - 50
  }px)`;
  imgfoot.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * -50 + 50
  }px)`;
  imgmob.style.transform = `translateY(${
    (scroll / (section_height + sectionY.top)) * -50 + 50
  }px)`;

  border.style.width = `${(scroll / (sectionY.top + section_height)) * 30}%`;
});
