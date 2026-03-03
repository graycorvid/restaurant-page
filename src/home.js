function loadPage() {
  const content = document.querySelector("#content");
  const main = document.createElement("main");
  //h1
  const h1 = document.createElement("h1");
  h1.textContent = "milky way 🧋";

  const p1 = createParagraph(
    `At our bubble tea house, every boba is made with care, high-quality
    ingredients, and just the right balance of tea, milk, sweetness, and
    chewiness. Whether you love classic milk tea, fruity refreshers, or
    something creamy and indulgent, we’re here to make your perfect cup!`
  );
  //h3
  const h3 = document.createElement("h3");
  h3.textContent = "But what exactly is bubble tea?";

  const p2 = createParagraph(
    `Bubble tea (also known as boba tea) is a Taiwanese drink that combines
    freshly brewed tea with milk or fruit flavors and chewy tapioca
    pearls. Those little “bubbles” at the bottom are soft, slightly sweet
    tapioca balls that make every sip fun and satisfying.`
  );

  main.append(h1, p1, h3, p2);
  content.append(main);
}

function createParagraph(text) {
  const para = document.createElement("p");
  para.textContent = text;
  return para;
}

export { loadPage };
