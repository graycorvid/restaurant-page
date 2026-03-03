function loadMenu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const main = document.createElement("main");
  const h1 = document.createElement("h1");
  h1.textContent = "menu";
  const milk = document.createElement("h2");
  const fruit = document.createElement("h2");
  const toppings = document.createElement("h2");

  milk.textContent = "milk tea";
  fruit.textContent = "fruit tea";
  toppings.textContent = "toppings";

  const milkUl = document.createElement("ul");
  const fruitUl = document.createElement("ul");
  const toppingsUl = document.createElement("ul");

  const milkTea = [
    "Classic Milk Tea",
    "Brown Sugar Milk Tea",
    "Taro Milk Tea",
    "Matcha Milk Tea",
    "Chocolate Milk Tea",
    "Peach & Honey Milk Tea",
  ];

  const fruitTea = [
    "Strawberry Fruit Tea",
    "Kiwi Fruit Tea",
    "Mango Green Tea",
    "Lychee Fruit Tea",
    "Watermelon Fruit Tea",
  ];

  const topping = [
    "Boba",
    "Mango Jelly",
    "Blueberry Jelly",
    "Peach Popping",
    "Strawberry Popping",
    "Lychee Popping",
  ];

  createMenuItems(milkTea, milkUl);
  createMenuItems(fruitTea, fruitUl);
  createMenuItems(topping, toppingsUl);
  content.append(main);
  main.append(h1, milk, milkUl, fruit, fruitUl, toppings, toppingsUl);
}

function createMenuItems(array, menuUl) {
  array.forEach((menuItem) => {
    const li = document.createElement("li");
    li.textContent = `🧋 ${menuItem}`;
    menuUl.append(li);
  });
}
export { loadMenu };
