var inputs = document.querySelectorAll("input");

for (var index = 0; index < inputs.length; index++) {
  inputs[index].addEventListener("focusin", function () {
    this.style.backgroundColor = "yellow";
  });

  inputs[index].addEventListener("focusout", function () {
    this.style.backgroundColor = "";
  });
}
