// This code is built specifically for Unit 6 Lesson 12 of AP Computer Science Principles using Code.org's curriculum
// The code can be altered in several ways, with the most important way being changing which date is being filtered for

// Hides the forecast button so that users cannot run code before the app is finished loading
hideElement("forecastButton");
console.log("The forecast button has been hidden until app load completion");

// Creates a variable to store the time of the app launch
var startTime = getTime();

// Pulls data from the Daily Weather dataset in Code.org
// Adds the previously pulled data to lists which are unfiltered and will later be filtered by date
var cityUnFiltered = getColumn("Daily Weather", "City");
var highUnFiltered = getColumn("Daily Weather", "High Temperature");
var lowUnFiltered = getColumn("Daily Weather", "Low Temperature");
var conditionUnFiltered = getColumn("Daily Weather", "Condition Description");
var iconUnFiltered = getColumn("Daily Weather", "Icon");

// Times how long it takes for unfiltered data to be pulled from the Daily Weather dataset
console.log("It took: " + (getTime()-startTime) + " milliseconds from start to fetch unfiltered data");

// Creates blank lists to store the filtered data
var cityFiltered = [];
var highFiltered = [];
var lowFiltered = [];
var conditionFiltered = [];
var iconFiltered = [];

// Creates a variable to later store a random number
var randNum = 0;

// Creates a function that generates a new random number based on the number of items in the filtered dataset
// Updates the UI elements with a random index in the filtered lists
function updateScreen(){
  randNum = randomNumber(0, cityFiltered.length);
  setProperty("cityOutput", "text", cityFiltered[randNum]);
  setProperty("highTempOutput", "text", highFiltered[randNum]);
  setProperty("lowTempOutput", "text", lowFiltered[randNum]);
  setProperty("conditionOutput", "text", conditionFiltered[randNum]);
  setProperty("iconOutput", "image", iconFiltered[randNum]);
}

// Calls the updateScreen function, subsequently refreshing UI elements
onEvent("forecastButton", "click", function() {
  updateScreen();
});

// Pulls unfiltered date data from the Daily Weather dataset
// Calls the filterData function, which fills the filtered lists with data from a specific date
var dateUnfiltered = getColumn("Daily Weather", "Date");
filterData();

// Creates the filterData function which filters the Daily Weather dataset for data from a specific date
function filterData(){
	// Outputs a message in the console stating that the filterData has been called
  console.log("filterData Activated");
	// Creates an index variable used to later break the infinite loop
  var index = 0;
	// Creates an infinite loop to sort through unfliltered data and fill the filtered lists
  while(true){
		// Utilizes a conditional statement to break the infinite loop once all data has been filtered
	  	// Adds some entries to the console for the purpose of diagnostic information
    if (index > dateUnfiltered.length){
			console.log("Finished Filtering Data");
			console.log("Filtered " + (index-1) + " entries of data");
			console.log("It took " + (getTime() - startTime) + " milliseconds from start to accquire and process the necessary data");
			console.log("The app is now loaded and ready for use");
			showElement("forecastButton");
      break;
    }
		// Utilizes a conditonal statement to filter data from the specified date into filtered datasets
    if (dateUnfiltered[index] == "Thu 1/15"){
      appendItem(cityFiltered, cityUnFiltered[index]);
      appendItem(highFiltered, highUnFiltered[index]);
      appendItem(lowFiltered, lowUnFiltered[index]);
      appendItem(conditionFiltered, conditionUnFiltered[index]);
      appendItem(iconFiltered, iconUnFiltered[index]);
      index = index + 1;
      continue;
    } 
		// Uses a catch-all conditional to add to the index
		else{
      index = index + 1;
			continue;
    }
  }
}
