const backgroundColorPicker = document.getElementById("background-color");
const blockColorPicker = document.getElementById("block-color");
const blocks = document.getElementsByClassName("block");
const button = document.getElementById("generate");
var blockAmount;
generate();

button.addEventListener("click", function () {
  generate();
});

blockColorPicker.addEventListener("change", function () {
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor = blockColorPicker.value;
  }
});

backgroundColorPicker.addEventListener("change", function () {
  document.body.style.background =
    "linear-gradient(180deg, #f9f9f9, " + backgroundColorPicker.value + ")";
});

function generate() {
  var blockAmount = Math.floor(Math.random() * 10) + 1;
  document.getElementById("block-container").innerHTML = "";
  for (var i = 0; i < blockAmount; i++) {
    createBlocks();
  }
}

function createBlocks() {
  var block = document.createElement("div");
  block.classList.add("block");
  block.style.height = Math.floor(Math.random() * 20) + 10 + "%";
  block.style.width = Math.floor(Math.random() * 20) + 10 + "%";
  block.style.transform = "rotate(" + Math.floor(Math.random() * 180) + "deg)";
  block.style.left = Math.floor(Math.random() * 80) + "%";
  block.style.top = Math.floor(Math.random() * 80) + "%";
  block.style.opacity = Math.random();
  block.style.backgroundColor = blockColorPicker.value;
  document.getElementById("block-container").appendChild(block);
}
