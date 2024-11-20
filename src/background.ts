const button = document.getElementById("test");
console.log(button);

if (button) {
  button.addEventListener("click", () => {
    button.style.backgroundColor = "red";
  });
}
