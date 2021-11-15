var pos = 0;
const catArray = [
  ["cat1.png", "cat2.png"],
  ["cat3.png", "cat4.png"],
];
var direction = 0;
const catAdd = [];

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}
// Factory to produce cat icons
function makeCat() {
  // Returns an object with values scaled {x: 33, y: 21}
  let velocity = setToRandom(10);
  let position = setToRandom(200);
  // Adds new cat icon to div id = dance
  let dance = document.getElementById("dance");
  let newimg = document.createElement("img");
  newimg.style.position = "absolute";
  newimg.src = "cat1.png";
  newimg.width = 100;
  newimg.style.left = position.x;
  newimg.style.top = position.y;
  dance.appendChild(newimg);
  // New style of creating an object learned in latest class module
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  //loop over catAdd array, move each one and move icons in DOM
  catAdd.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  if (
    item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
    item.position.x + item.velocity.x < 0
  )
    item.velocity.x = -item.velocity.x;
  if (
    item.position.y + item.velocity.y + item.newimg.height >
      window.innerHeight ||
    item.position.y + item.velocity.y < 0
  )
    item.velocity.y = -item.velocity.y;
}

function makeOne() {
  catAdd.push(makeCat()); // +1 Cat
}
