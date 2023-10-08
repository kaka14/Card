let isOpen = false
function openHamburger() {
    let hamburgerNav = document.getElementById("hamburger-nav-container")
    if (!isOpen) {
        hamburgerNav.style.display= "block";
        isOpen = true
    }else {
        hamburgerNav.style.display= "none";
        isOpen = false
    }
}