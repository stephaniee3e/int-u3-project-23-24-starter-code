// Declare variables below to save the different divs of your story.
let storyOpening=document.querySelector(".story-opening");
let button1=document.querySelector(".option-one");
let button2=document.querySelector(".option-two");
let option1Screen=document.querySelector(".locker")
let option2screen=document.querySelector(".home")
let button3=document.querySelector(".option1-1")
let button4=document.querySelector(".option1-2")
let option3screen=document.querySelector(".first-class")
let lastscreen=document.querySelector("outside") 




// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.
button1.addEventListener("click", function() {
  option1Screen.style.display = "block"
  storyOpening.style.display="none"
});
button2.addEventListener("click",function(){
  option2screen.style.display = "block"
  storyOpening.style.display = "none"
})
// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });