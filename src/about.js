import bobaImg from "./img/boba.png";

function loadAbout() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const main = document.createElement("main");
  //h1

  //ABOUT
  const h1 = document.createElement("h1");
  h1.textContent = "About us";

  const pIntro = document.createElement("p");
  pIntro.innerText = `Welcome to Milky Way 🧋 

    Cozy little corner bubble tea spot born in 2016 in the heart of Fake City, right on charming Fake Corner Street.

    What started as a small dream and a love for authentic bubble tea quickly became a local favorite. From day one, our goal has been simple: serve high-quality tea, perfectly chewy boba, and create a warm, welcoming space where people can slow down and enjoy the moment.

    We believe great bubble tea is about balance — rich flavors, fresh ingredients, and just the right sweetness in every cup. Whether you're stopping by for your daily classic milk tea or trying boba for the first time, we're here to make it special!`;

  //CONTACT
  const container = document.createElement("div");
  container.classList.add("contact");

  const imgIntro = document.createElement("img");
  imgIntro.src = bobaImg;

  const contactH2 = document.createElement("h2");
  contactH2.textContent = "Contact";
  const contactTitle = document.createElement("p");
  contactTitle.textContent = "Manager";
  const contactPhone = document.createElement("p");
  contactPhone.textContent = "222-333-444";
  const contactEmail = document.createElement("p");
  contactEmail.textContent = "bobatea@boba.com";

  const footer = document.createElement("footer");
  const aCredit = document.createElement("a");
  aCredit.textContent = `Background image`;
  aCredit.href =
    "https://images.pexels.com/photos/6412830/pexels-photo-6412830.jpeg";

  const aCredit2 = document.createElement("a");
  aCredit2.textContent = `Boba icon`;
  aCredit2.href =
    "https://pixabay.com/illustrations/bubble-tea-tea-milk-tea-drink-5756870/";

  footer.append(aCredit, aCredit2);
  content.append(main, footer);
  container.append(
    imgIntro,
    contactH2,
    contactTitle,
    contactPhone,
    contactEmail
  );
  main.append(h1, pIntro, container);
}

export { loadAbout };
