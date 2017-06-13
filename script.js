function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function checkboard () {
  for (var i=1; i<82;i++) {
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.style.width = "11.1%";
    div.style.paddingBottom = "11.1%";
    div.style.float = "left";
  }
}
console.log(div);
// function randomColorCheckboard() {
//   var div = checkboard();
//   for (var i = 0; i < div; i++) {
//     div.style.background = getRandomColor();
//   }
// }
// setInterval(randomColorCheckboard, 2000);
