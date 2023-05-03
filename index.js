const menuIcon = document.getElementById("menu_icon");

const menu = document.getElementById("menu");
console.log(menu);
menuIcon?.addEventListener("click", () => {
  if (menu?.className == "hidden") {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});