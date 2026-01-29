onEvent("smiley", "mouseover", function( ) {
  setProperty("smiley", "background-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
  setProperty("smiley", "x", randomNumber(0, 320));
  setProperty("smiley", "y", randomNumber(0, 450));
  playSound("sound://category_jump/arcade_game_jump_1.mp3");
});