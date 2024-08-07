// function copyText() {
//   var text = document.getElementById("textInput").value;
//   var text = text.split("").reverse().join("");
//   document.getElementById("output").innerHTML = text;
// }

document.getElementById("textInput").addEventListener("keyup", function () {
  var text = document.getElementById("textInput").value;
  var reversedText = text.split("").reverse().join("");
  document.getElementById("output").innerHTML = reversedText;
});
