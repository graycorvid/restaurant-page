import "./styles.css";
import { loadPage } from "./home.js";
import { loadMenu } from "./menu.js";

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

loadPage();
homeBtn.addEventListener("click", loadPage);
menuBtn.addEventListener("click", loadMenu);
aboutBtn.addEventListener("click", loadAbout);
