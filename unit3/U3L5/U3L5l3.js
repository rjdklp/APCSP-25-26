console.log("Starting my program!");
onEvent("bigButton", "click", function( ) {
  setProperty("bigButton", "background-color", "blue");
  setProperty("bigButton", "height", 200);
  setProperty("bigButton", "text", "Now it's a bigger button!");
  console.log("You clicked the button!");
});
onEvent("screen1", "click", function() {
  
  setProperty("screen1", "background-color", "white");
  setProperty("bigButton", "text", "Now the screen is white!");
  
  
});
console.log("Test.");
console.log("Ending my program!");
