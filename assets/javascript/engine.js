let keys = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p", //row 1
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l", //row 2
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m" //row 3
];
var keyboard = document.getElementById("keyboard");
function doLayout() {
  for (var i = 0; i < keys.length; i++) {
    var key = document.createElement("div");
    key.style.gridArea = keys[i];
    key.textContent = keys[i];
    keyboard.appendChild(key);
  }
}

doLayout();
