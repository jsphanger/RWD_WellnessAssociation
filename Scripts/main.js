var images = [];
const icon = document.getElementById("mobileNavHamburger");
const tray = document.getElementById("menuItems")

//Preload images for a smoother responsive experience
function preload(){
    if(window.innerWidth > 1295)
    {
        for(var i = 0; i < arguments.length; i++){
            images[i] = new Image();
            images[i].src = preload.arguments[i];
        }
    }
}

preload("Images/Background.jpg", "Images/BackgroundTablet.jpg", "Images/BackgroundPhone.jpg");

//Handle menu clicks
icon.onclick = function(){
    tray.classList.contains("navTrayVisible") ? tray.classList.remove("navTrayVisible") : tray.classList.add("navTrayVisible");
};

