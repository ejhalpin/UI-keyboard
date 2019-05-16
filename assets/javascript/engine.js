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
var target = document.createElement("div");
document.body.appendChild(target);

for (var i = 0; i < keys.length; i++) {
  var key = document.createElement("div");
  key.id = keys[i];
  key.style.gridArea = keys[i];
  key.textContent = keys[i];
  key.className = "key";
  // key.addEventListener("click", printKey(keys[i]));
  keyboard.appendChild(key);
}

for (var j = 0; j < keys.length; j++) {
  document.getElementById(keys[j]).onclick = function() {
    printKey(this.textContent);
  };
}

function printKey(letter) {
  var text = letter;
  if (uppercase) {
    text = letter.toUpperCase();
  }
  console.log(text);
}

var uppercase = false;

function swapCase() {
  for (var i = 0; i < keys.length; i++) {
    var key = document.getElementById([keys[i]]);
    if (uppercase) {
      key.classList.add("lower");
      key.classList.remove("upper");
    } else {
      key.classList.remove("lower");
      key.classList.add("upper");
    }
  }
  uppercase = !uppercase;
}
