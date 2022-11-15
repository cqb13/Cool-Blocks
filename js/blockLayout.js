const button = document.getElementById("generate");
const blockColorPicker = document.getElementById("block-color");
const blocks = document.getElementsByClassName("block");
var blockAmount;
blockAmount = generate();

button.addEventListener("click", function () {
  blockAmount = generate();
  for (var i = 0; i < blockAmount; i++) {
    createBlocks();
  }
});

function generate() {
  var blockAmount = Math.floor(Math.random() * 10) + 1;
  document.getElementById("block-container").innerHTML = "";
  return blockAmount;
}

blockColorPicker.addEventListener("change", function () {
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor = blockColorPicker.value;
  }
});

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
