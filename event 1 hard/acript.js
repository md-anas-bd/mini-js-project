document.addEventListener("DOMContentLoaded", function () {
    const navigation = document.querySelector(".navigation");
    
    // Capturing phase: Style parent menu items
    navigation.addEventListener("mouseover", function (event) {
        let currentElement = event.target;
        
        // Traverse up to the parent menu item
        while (currentElement && currentElement.classList && !currentElement.classList.contains("menu-item")) {
            currentElement = currentElement.parentElement;
        }

        // If a parent menu item is found, apply capturing style
        if (currentElement && currentElement.classList.contains("menu-item")) {
            currentElement.classList.add("capturing-style");
        }
    }, true);

    navigation.addEventListener("mouseout", function (event) {
        let currentElement = event.target;
        
        // Traverse up to the parent menu item
        while (currentElement && currentElement.classList && !currentElement.classList.contains("menu-item")) {
            currentElement = currentElement.parentElement;
        }

        // If a parent menu item is found, remove the capturing style
        if (currentElement && currentElement.classList.contains("menu-item")) {
            currentElement.classList.remove("capturing-style");
        }
    }, true); // Using capturing phase

    // Bubbling phase: Trigger global logging on item click
    navigation.addEventListener("click", function (event) {
        // Log the clicked menu item
        console.log(`Navigating to: ${event.target.textContent}`);
    }, false); // Using bubbling phase by setting false as the third argument
});