const icon = document.getElementById("mobileNavHamburger");
const tray = document.getElementById("menuItems")

icon.onclick = function(){
    tray.classList.contains("navTrayVisible") ? tray.classList.remove("navTrayVisible") : tray.classList.add("navTrayVisible");
};

