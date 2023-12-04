function validation() {
  let form = document.getElementById("form");
  let emailAdd = document.getElementById("email");
  let email = emailAdd.value;
  let text = document.getElementById("text");
  let pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Valid Email Required";
    text.style.color = "#FF624F;";
  }

  if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
  }
}
