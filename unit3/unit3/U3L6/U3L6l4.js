// Show the controls when the user clicks the up button
onEvent("upButton", "click", function( ) {
  console.log("Showing controls");
  setProperty("downButton", "hidden", false);
  setProperty("playButton", "hidden", false);
  setProperty("stopButton", "hidden", false);
  
  // Hide the controls
  onEvent("downButton", "click", function( ) {
    setProperty("downButton", "hidden", true);
    setProperty("playButton", "hidden", true);
    setProperty("stopButton", "hidden", true);
    console.log("Hiding controls");  
  });
  
  // Stop the music
  onEvent("stopButton", "click", function( ) {
    stopSound();
    console.log("Stopping song");
  });
});

onEvent("playButton", "click", function( ) {
    playSound("sound://category_loops/vibrant_game_musical_harping_movement_loop_1_accents.mp3");
    console.log("Playing song");
  });