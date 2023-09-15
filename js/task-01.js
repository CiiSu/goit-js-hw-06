
const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);
const headers = document.querySelectorAll("h2");
headers.forEach(function (header, index) {
  console.log("Category:", header.innerHTML);
  console.log("Elements:", header.nextElementSibling.children.length);
});