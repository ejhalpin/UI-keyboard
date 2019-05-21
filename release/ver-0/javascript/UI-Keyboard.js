let qwerty = "qwertyuiopasdfghjklzxcvbnm";
let alpha = "abcdefghijklmnopqrstuvwxyz";
let keys = "";
var keyboard = document.getElementById("keyboard");
var notepad = document.getElementById("notepad");

function doLayout() {
  if (keyboard.classList.contains("qwerty")) {
    keys = qwerty;
  } else {
    keys = alpha;
  }
  if (document.getElementById("keyboard").children.length == 0) {
    for (var i = 0; i < keys.length; i++) {
      var key = document.createElement("div");
      key.id = keys[i];
      key.style.gridArea = keys[i];
      key.textContent = keys[i];
      key.className = "key";
      key.onclick = function() {
        var event_name = "keyup";
        var event = document.createEvent("HTMLEvents");
        event.initEvent(event_name, true, false);
        event.key = this.id;
        document.dispatchEvent(event);
      };
      keyboard.appendChild(key);
    }
    return;
  } else {
    for (var i = 0; i < keys.length; i++) {
      var key = document.getElementById([keys[i]]);
      keyboard.removeChild(key);
    }
  }
}
