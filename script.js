function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
  const copyrightElement = document.getElementById("copyright");
  const currentYear = new Date().getFullYear();
  copyrightElement.innerHTML = `Copyright &#169; ${currentYear} Oluwole Afolabi. All Rights Reserved.`;
});
