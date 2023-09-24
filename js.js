let links = document.getElementsByClassName("links")[0];
let span1 = document.getElementsByTagName("span")[1];
let span2 = document.getElementsByTagName("span")[2];
let span3 = document.getElementsByTagName("span")[3];
let social = document.getElementsByClassName("A");
let BTN = document.getElementsByClassName("BTN")[0];

document.addEventListener("click", function (e) {
  if (
    e.target.className === "menu" ||
    e.target.className === "icon" ||
    e.target === span1 ||
    e.target === span2 ||
    e.target === span3
  ) {
    if (window.getComputedStyle(links).display === "none") {
      links.style = "display: block;";
      span2.style = "width: 100%;";
    } else {
      links.style = "display: none;";
      span2.style = "width: 70%;";
    }
  } else {
    links.style = "display: none;";
    span2.style = "width: 70%;";
  }
});
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("A")) {
    e.target.classList.toggle("visited");
  }
});
document.addEventListener("scroll", function () {
  if (scrollY >= 60) {
    BTN.style = "bottom: 60px;";
  } else {
    BTN.style = "bottom: -100px;";
  }
});
