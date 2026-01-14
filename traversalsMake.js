var cityUnFiltered = getColumn("Daily Weather", "City");
var highUnFiltered = getColumn("Daily Weather", "High Temperature");
var lowUnFiltered = getColumn("Daily Weather", "Low Temperature");
var conditionUnFiltered = getColumn("Daily Weather", "Condition Description");
var iconUnFiltered = getColumn("Daily Weather", "Icon");

var cityFiltered = [];
var highFiltered = [];
var lowFiltered = [];
var conditionFiltered = [];
var iconFiltered = [];

var randNum = 0;

function updateScreen(){
  randNum = randomNumber(0, cityFiltered.length);
  while(true){
    setProperty("cityOutput", "text", cityFiltered[randNum]);
    setProperty("highTempOutput", "text", highFiltered[randNum]);
    setProperty("lowTempOutput", "text", lowFiltered[randNum]);
    setProperty("conditionOutput", "text", conditionFiltered[randNum]);
    setProperty("iconOutput", "image", iconFiltered[randNum]);
    break;
  }
}

onEvent("forecastButton", "click", function() {
  updateScreen();
});

var dateUnfiltered = getColumn("Daily Weather", "Date");
filterData();

function filterData(){
  console.log("filterData Activated");
  var index = 0;
  while(true){
    if (index > dateUnfiltered.length){
      break;
    }
    if (dateUnfiltered[index] == "Thu 1/15"){
      appendItem(cityFiltered, cityUnFiltered[index]);
      appendItem(highFiltered, highUnFiltered[index]);
      appendItem(lowFiltered, lowUnFiltered[index]);
      appendItem(conditionFiltered, conditionUnFiltered[index]);
      appendItem(iconFiltered, iconUnFiltered[index]);
      index = index + 1;
      continue;
    } else{
      index = index + 1;
      continue;
    }
  }
}
