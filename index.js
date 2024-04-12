// Get the dodger element from the DOM
const dodger = document.getElementById("dodger"); 

// Define a function to move the dodger to the left when the left arrow key is pressed
function moveDodgerLeft() {
    // Get the current left position of the dodger and convert it to a number
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    // Check if moving left won't take me out of the game field
    if (left > 0) {
        // If it won't, move the dodger 1 pixel to the left
        dodger.style.left = `${left - 1}px`;    
    }  
} 

// Add an event listener for keydown events
document.addEventListener("keydown", function(e) {
    // Check if the pressed key is the left arrow key
    if (e.key === "ArrowLeft") {
        // If it is, call the moveDodgerLeft function
        moveDodgerLeft();    
    }  
}); 

// Define a function to move the dodger to the right when the right arrow key is pressed
function moveDodgerRight(){
    // Get the current left position of the dodger and convert it to a number
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    // Check if moving right won't take me out of the game field
    if (left < 360){
        // If it won't, move the dodger 1 pixel to the right
        dodger.style.left = `${left + 1}px`;    
    }  
}

// Add an event listener for keydown events
document.addEventListener("keydown", function(e){
    // Check if the pressed key is the right arrow key
    if (e.key === "ArrowRight"){
        // If it is, call the moveDodgerRight function
        moveDodgerRight();    
    }  
});
