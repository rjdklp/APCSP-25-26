// Farm Sounds Choice Level

//Play a moo sound when the user clicks the cow
onEvent("cowImage", "click", function( ) {
  playSound("sound://category_animals/moo.mp3");
  setProperty("animalText", "text", "Cow");
});

//Play a rooster sound when the user clicks the rooster
onEvent("roosterImage", "click", function( ) {
  playSound("sound://category_animals/rooster.mp3");
  setProperty("appName", "text", "Rooster");
});

//Play a pig sound when the user clicks the pig
onEvent("pigImage", "click", function( ) {
  playSound("sound://category_animals/pig.mp3");
  setProperty("animalText", "text", "Pig");
});



// Club Fair Choice Level

playSound("sound://category_loops/vibrant_game_harping_down_forever_loop_1.mp3", true);
//Take the user to the details screen
onEvent("detailsButton", "click", function( ) {
  setScreen("detailsScreen");
});
onEvent("goBackButton", "click", function( ) {
  setScreen("homeScreen");  
});


// Mood Minder Choice Level

// Button to update screen to excited image, text, and song
onEvent("calmButton", "click", function( ) {
  setProperty("calmButton","border-width",2);
  setProperty("tiredButton","border-width",0);
  setProperty("excitedButton","border-width",0);

  setProperty("mainImage","image","https://images.code.org/923e161100cffead2509f270666e4398-image-1665602056199.jpg");
  setProperty("mainText","text","Your mind is clear. Breathe deeply and enjoy the calm.");
  stopSound();
  playSound("sound://category_loops/stabilizing_breath_loop1.mp3", true);
});

// Button to update screen to tired image, text, and song
onEvent("tiredButton", "click", function( ) {
  setProperty("tiredButton","border-width",2);
  setProperty("calmButton","border-width",0);
  setProperty("excitedButton","border-width",0);

  setProperty("mainImage","image","https://images.code.org/a7f90f4cb1a7024a1f3a05a077e16503-image-1665602033911.jpg");
  setProperty("mainText","text","Let yourself rest and save your energy.");
  stopSound();
  playSound("sound://category_loops/vibrant_game_harping_down_forever_loop_1.mp3", false);
});

onEvent("excitedButton", "click", function( ) {
  setProperty("tiredButton","border-width",0);
  setProperty("calmButton","border-width",0);
  setProperty("excitedButton","border-width",2);

  setProperty("mainImage","image","https://i1.sndcdn.com/artworks-IWCdvUbRJLroVlJn-9qazlQ-t500x500.jpg");
  setProperty("mainText","text","get rick rolled noob (cant find online api accessible copy of never gonna give you up)");
  stopSound();
  playSound("https://s-ricky-astley-never-gonna-give-you-up.mp3.pm", true);
});