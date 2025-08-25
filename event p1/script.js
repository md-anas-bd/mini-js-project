const level1 = document.querySelector(".level1");
level1.addEventListener("click", function (event) {
    let currentEvent = event.target;

    // Walk up the bubble chain
    while (currentEvent && currentEvent.classList.contains("box")) {
        currentEvent.classList.add("colored");  // Add the "colored" class
        currentEvent = currentEvent.parentElement;
    }
});

   
    
    