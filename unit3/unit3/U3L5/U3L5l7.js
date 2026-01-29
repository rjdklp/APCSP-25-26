// Play the background music. It should repeat forever.
playSound("sound://category_nature/forest_woodland_loop.mp3", true);
// When the user puts their mouse over the hawk move both
// birds but play a sad sound and put sad text
onEvent("hawk", "keypress", function( ) {
  playSound("sound://category_alerts/vibrant_wrong_action_hit_1.mp3", false);
  setProperty("hawk", "x", randomNumber(0, 320));
  setProperty("hawk", "y", randomNumber(0, 450));
  setProperty("sparrow", "x", randomNumber(0, 320));
  setProperty("sparrow", "y", randomNumber(0, 450));
  setProperty("message", "text", "Avoid the hawk!");
});

// When the user puts their mouse over the sparrow move both
// birds but play a happy sound and put happy text
onEvent("sparrow", "mouseover", function( ) {
  playSound("sound://category_collect/vibrant_game_positive_item_2.mp3");
  setProperty("hawk", "x", randomNumber(0, 320));
  setProperty("hawk", "y", randomNumber(0, 450));
  setProperty("sparrow", "x", randomNumber(0, 320));
  setProperty("sparrow", "y", randomNumber(0, 450));
  setProperty("message", "text", "You saved another sparrow!");
});