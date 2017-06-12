
for (var i=1; i<82;i++) {
  var div = document.createElement('div');
  document.body.appendChild(div);
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  div.style.float = "left";
  if(i%2){
    div.style.backgroundColor = "black";
  } else {
    div.style.backgroundColor = "red";
  }
}
