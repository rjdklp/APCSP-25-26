// When the user clicks the cat button 
// play a meow sound and show cat image and text
onEvent("catButton", "click", function( ) {
  setProperty("messageLabel", "text", "Cats Rule!");
  playSound("sound://category_animals/cat.mp3");
  setProperty("petImage", "image","https://images.code.org/433c5e3a317bec98d7d5e1ba74b395f0-image-1666118469963.jpg");
});

// When the user clicks the dog button 
// play a woof sound and shows dog image and text
onEvent("dogButton", "click", function( ) {
  setProperty("messageLabel", "text", "Dogs #1!!");
  playSound("sound://category_animals/dog.mp3");
  setProperty("petImage", "image", "https://images.code.org/daddf6bc7178431319afe019049b2fd5-image-1624567529598.jpg");
});
