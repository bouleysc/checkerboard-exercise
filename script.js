
for (var i=1; i<82;i++) {
  var div = document.createElement('div');
  document.body.appendChild(div);
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  div.style.float = "left";
  if (i%2) {
    div.style.backgroundColor = "#00f";
    div.style.opacity = "0.3"
  } else {
    div.style.backgroundColor = "#3fe";
    div.style.opacity = "0.3"
  }
}
var body = document.getElementsByTagName('body')[0];
body.style.background = "linear-gradient(to bottom, #3fe, #00f)";
body.style.boxSizing = "border-box";
body.style.margin = "0";
