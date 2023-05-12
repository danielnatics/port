var navStatus = false;
let getMenuBar = document.querySelector(".menu-bar");

let openMenuBar = function () {
  if (navStatus === false) {
    getMenuBar.style.cssText = "top: 60px; visibility: visible;";
    navStatus = true;
    console.log(navStatus);
  } else if (navStatus === true) {
    getMenuBar.style.cssText = "top: -193px; visibility: hidden;";
    navStatus = false;
  } else {
    alert("error");
  }
};

let menuItem = document.querySelectorAll(".menu-item");
(function () {
  let arrayLength = menuItem.length;
  for (let i = 0; i < arrayLength; i++) {
    menuItem[i].addEventListener("click", () => {
      getMenuBar.style.cssText = "top: -193px; visibility: hidden;";
      navStatus = false;
    });
  }
})();
