function displayMenu() {
    const menu = document.getElementById("navbuttons")
    const navbar = document.getElementById("mobileNavBar")

    menu.style.display = "block"
    navbar.style.display = "none"
}

function hideMenu() {
    const menu = document.getElementById("navbuttons")
    const navbar = document.getElementById("mobileNavBar")

    navbar.style.display = "flex"
    menu.style.display = "none"
}