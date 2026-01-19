var appStart = getTime();
console.log("App has begun initialization");

function timeSinceInit(){
    console.log(((getTime() - appStart)/1000) + " Seconds since app intialization");
}

function newLabel(desiredId, desiredMessage, desiredXPosition, desiredYPosition, elementWidth, elementHeight, fontSize){
    if(typeof desiredId !== "string"){
        throw new Error("desiredId in newLabel must be a string");
    } if(typeof desiredMessage !== "string"){
        throw new Error("desiredMessage in newLabel must be a string");
    }
    var trueXPosition = desiredXPosition - elementWidth/2;
    var trueYPosition = desiredYPosition - elementHeight/2;
    textLabel(desiredId, desiredMessage);
    setPosition(desiredId, trueXPosition, trueYPosition, elementWidth, elementHeight);
    setProperty(desiredId, "text-align", "center");
    setProperty(desiredId, "font-size", fontSize);
}

function newButton(desiredId, desiredMessage, desiredXPosition, desiredYPosition, elementWidth, elementHeight){
    if(typeof desiredId !== "string"){
        throw new Error("desiredId in newButton must be a string");
    } if(typeof desiredMessage !== "string"){
        throw new Error("desiredMessage in newButton must be a string");
    }
    var trueXPosition = desiredXPosition - elementWidth/2;
    var trueYPosition = desiredYPosition - elementHeight/2;
    button(desiredId, desiredMessage);
    setPosition(desiredId, trueXPosition, trueYPosition, elementWidth, elementHeight);
    setProperty(desiredId, "text-align", "center");
}

function newInput(desiredId, desiredMessage, desiredXPosition, desiredYPosition, elementWidth, elementHeight, fontSize){
    if(typeof desiredId !== "string"){
        throw new Error("desiredId in newInput must be a string");
    } if(typeof desiredMessage !== "string"){
        throw new Error("desiredMessage in newInput must be a string");
    }
    var trueXPosition = desiredXPosition - elementWidth/2;
    var trueYPosition = desiredYPosition - elementHeight/2;
    textInput(desiredId, desiredMessage);
    setPosition(desiredId, trueXPosition, trueYPosition, elementWidth, elementHeight);
    setProperty(desiredId, "font-size", fontSize);
    setProperty(desiredId, "text-align", "center");
}

function newScreenNavigationButtons(previousScreenId, nextScreenId, backButtonId, nextButtonId){
    if ((typeof previousScreenId !== "string") || (typeof backButtonId !== "string")){
        throw new Error("newScreenNavigationButtons requires string based parameters, nextScreenId and nextButtonId are optional");
    }
    newButton(backButtonId, "Back", 60, 420, 75, 40);
    onEvent(backButtonId, "click", function(){
        setScreen(previousScreenId);
    });
    if ((typeof nextButtonId === "string") && (typeof nextScreenId === "string")){
        newButton(nextButtonId, "Next", 260, 420, 75, 40);
        onEvent(nextButtonId, "click", function(){
        setScreen(nextScreenId);
            });
    } else{
        return;
    }
}

function newDropdown(desiredId, option1, option2, option3, option4, option5, option6, option7, option8, option9, option10, desiredXPosition, desiredYPosition, elementWidth, elementHeight, fontSize){
    if(typeof desiredId !== "string"){
        throw new Error("desiredId in newDropdown must be a string");
    } if(typeof option1 !== "string"){
        throw new Error("option1 in newDropdown must be a string");
    }
    if(typeof option10 !== "undefined"){
        dropdown(desiredId, option1, option2, option3, option4, option5, option6, option7, option8, option9, option10);
    } else if(typeof option9 !== "undefined"){
        dropdown(desiredId, option1, option2, option3, option4, option5, option6, option7, option8, option9);
    } else if(typeof option8 !== "undefined"){
        dropdown(desiredId, option1, option2, option3, option4, option5, option6, option7, option8);
    } else if(typeof option7 !== "undefined"){
        dropdown(desiredId, option1, option2, option3, option4, option5, option6, option7);
    } else if(typeof option6 !== "undefined"){
        dropdown(desiredId, option1, option2, option3, option4, option5, option6);
    } else if(typeof option5 !== "undefined"){
        dropdown(desiredId, option1, option2, option3, option4, option5);
    } else if(typeof option4 !== "undefined"){
        dropdown(desiredId, option1, option2, option3, option4);
    } else if(typeof option3 !== "undefined"){
        dropdown(desiredId, option1, option2, option3);
    }  else if(typeof option2 !== "undefined"){
        dropdown(desiredId, option1, option2);
    }
    var trueXPosition = desiredXPosition - elementWidth/2;
    var trueYPosition = desiredYPosition - elementHeight/2;
    setPosition(desiredId, trueXPosition, trueYPosition, elementWidth, elementHeight);
    setProperty(desiredId, "font-size", fontSize);
}





console.log("Fetching dataset...");
var datasetFetchInit = getTime();
var passwordsPassword = getColumn("Passwords", "password");
var passwordsRank = getColumn("Passwords", "rank");
var passwordsCategory = getColumn("Passwords", "category");
var passwordsValue = getColumn("Passwords", "value");
var passwordsTime_Unit = getColumn("Passwords", "time_unit");
var passwordsStrength = getColumn("Passwords", "strength");
var indexLimit = (passwordsStrength.length - 1);
for(var index; index < indexLimit; index++){
    passwordsRank[index] = (passwordsRank[index]) - 1;
}
console.log("Finished fetching dataset in " + ((getTime() - datasetFetchInit)/1000) + " seconds and received " + (indexLimit + 1) + " entries \n");
timeSinceInit();

function fetchIndex(indexNumber){
    setProperty("screen2PasswordOut", "text", passwordsPassword[indexNumber]);
    setProperty("screen2RankOut", "text", passwordsRank[indexNumber]);
    setProperty("screen2CategoryOut", "text", passwordsCategory[indexNumber]);
    setProperty("screen2ValueOut", "text", passwordsValue[indexNumber]);
    setProperty("screen2TimeUnitOut", "text", passwordsTime_Unit[indexNumber]);
    setProperty("screen2StrengthOut", "text", passwordsStrength[indexNumber]);
}




// UI Element Creation Below

// Already on screen1 so no set screen required
newLabel("screen1Title", "Passwords Dataset Analyzer", 160, 60, 300, 100, 25);
newLabel("screen1Intro", "Made by rjdklp, please enjoy", 160, 165, 250, 150, 18);
newButton("screen1NextButton", "Next", 260, 420, 75, 40);
newButton("screen1Github", "Latest Source Code", 160, 270, 160, 160);
setProperty("screen1Github", "font-size", 35);
setProperty("screen1Github", "font-family", "Times");
setProperty("screen1Github", "text-color", rgb(0, 0, 0));
setProperty("screen1Github", "background-color", rgb(84, 234, 189));
onEvent("screen1Github", "click", function(){
    open("https://raw.githubusercontent.com/rjdklp/APCSP-25-26/refs/heads/development/U6L13.js", undefined, "Window");
});
onEvent("screen1NextButton", "click", function(){
    setScreen("screen2");
});

setScreen("screen2");
// Code for screen2 here
newScreenNavigationButtons("screen1", "screen3", "screen2BackButton", "screen2NextButton");
newLabel("screen2Title", "Passwords Visualizer", 160, 60, 400, 100, 25);
newLabel("screen2Intro", "Allows for visualization of user defined indexes in the passwords dataset", 160, 120, 250, 150, 14);
newLabel("screen2ListIndexInputUse", "Click here to send a query to the list", 160, 140, 250, 35, 10);
setProperty("screen2ListIndexInputUse", "text-color", rgb(255, 0, 0));
setProperty("screen2ListIndexInputUse", "font-family", "Times");
newLabel("screen2Password", "Password", 160, 235, 100, 35, 10);
newLabel("screen2Rank", "Rank", 32, 285, 100, 35, 10);
newLabel("screen2Category", "Category", 96, 285, 100, 35, 10);
newLabel("screen2Value", "Value", 160, 285, 100, 35, 10);
newLabel("screen2TimeUnit", "Time Unit", 224, 285, 100, 35, 10);
newLabel("screen2Strength", "Strength", 288, 285, 100, 35, 10);
newLabel("screen2PasswordOut", "", 160, 260, 100, 35, 12);
newLabel("screen2RankOut", "", 32, 300, 100, 35, 12);
newLabel("screen2CategoryOut", "", 96, 300, 100, 35, 12);
newLabel("screen2ValueOut", "", 160, 300, 100, 35, 12);
newLabel("screen2TimeUnitOut", "", 224, 300, 100, 35, 12);
newLabel("screen2StrengthOut", "", 288, 300, 100, 35, 12);
newInput("screen2ListIndexInput", "Insert a number between 1 and 494", 160, 160, 220, 35, 10);
onEvent("screen2ListIndexInputUse", "click", function(){
    fetchIndex((+getText("screen2ListIndexInput")) - 1);
});

setScreen("screen3");
// Code for screen3 here
newScreenNavigationButtons("screen2", "screen4", "screen3BackButton", "screen3NextButton");
newLabel("screen3Title", "Passwords Filter", 160, 60, 400, 100, 25);
newLabel("screen3Intro", "Allows user-directed filtering of the passwords dataset", 160, 120, 250, 150, 14);
newButton("screen3FilterInput", "Click to filter", 160, 150, 100, 50);
newDropdown("screen3CategoryInput", "rank", "value", "strength", undefined, undefined, undefined, undefined, undefined, undefined, undefined, 55, 150, 100, 30, 13);
newDropdown("screen3FilterStyleInput", "maximum", "minimum", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 265, 150, 100, 30, 13);
newLabel("screen3Rank1", "1:", 32, 220, 30, 20, 14);
newLabel("screen3Rank2", "2:", 32, 240, 30, 20, 14);
newLabel("screen3Rank3", "3:", 32, 260, 30, 20, 14);
newLabel("screen3Rank4", "4:", 32, 280, 30, 20, 14);
newLabel("screen3Rank5", "5:", 32, 300, 30, 20, 14);
newLabel("screen3Rank1Out", "", 64, 220, 200, 20, 10);
newLabel("screen3Rank2Out", "", 64, 240, 200, 20, 10);
newLabel("screen3Rank3Out", "", 64, 260, 200, 20, 10);
newLabel("screen3Rank4Out", "", 64, 280, 200, 20, 10);
newLabel("screen3Rank5Out", "", 64, 300, 200, 20, 10);

setScreen("screen4");
// Code for screen4 here
newScreenNavigationButtons("screen3", undefined, "screen4BackButton", undefined);

setScreen("screen1");