function openMenu() {
  document.getElementById("menu-mobile").classList.add("menu-mobile-open");
  document.getElementById("menu-mobile").classList.remove("menu-mobile-close");
}

function closeMenu() {
  document.getElementById("menu-mobile").classList.add("menu-mobile-close");
  document.getElementById("menu-mobile").classList.remove("menu-mobile-open");
}