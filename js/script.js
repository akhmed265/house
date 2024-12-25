var header = document.getElementById("myNav");
var btns = header.getElementsByClassName("reproductions_item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("reproductions_item-active");
  current[0].className = current[0].className.replace(" reproductions_item-active", "");
  this.className += " reproductions_item-active";
  });
}