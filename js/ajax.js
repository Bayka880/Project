// Step 1
const xhr = new XMLHttpRequest();

//  Step 2
xhr.onreadystatechange = function () {
  const navbar = document.querySelector("#navbar");

  navbar.innerHTML = this.responseText;
};
// Step 3
xhr.open("GET", "/pages/navbar.html", true);
// Step 4
xhr.send();
