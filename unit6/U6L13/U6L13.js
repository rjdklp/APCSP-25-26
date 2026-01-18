var appStart = getTime();
console.log("App has begun initialization");

function timeSinceInit(){
    console.log(((getTime() - appStart)/1000) + " Seconds since app intialization");
}

console.log("Fetching dataset...");
var datasetFetchInit = getTime();
var passwordsRank = getColumn("Passwords", "rank");
var passwordsCategory = getColumn("Passwords", "category");
var passwordsValue = getColumn("Passwords", "value");
var passwordsTime_Unit = getColumn("Passwords", "time_unit");
var strength = getColumn("Passwords", "strength");
var indexLimit = (strength.length - 1);
for(var index; index < indexLimit; index++){
    passwordsRank[index] = (passwordsRank[index]) - 1;
}
console.log("Finished fetching dataset in " + ((getTime() - datasetFetchInit)/1000) + " seconds and received " + (indexLimit + 1) + " entries \n");
timeSinceInit();

function newLabel(desiredId, desiredMessage, desiredXPosition, desiredYPosition, elementWidth, elementHeight, fontSize){
    if(typeof desiredId !== "string"){
        throw new Error("desiredId must be a string");
    } if(typeof desiredMessage !== "string"){
        throw new Error("desiredMessage must be a string");
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
        throw new Error("desiredId must be a string");
    } if(typeof desiredMessage !== "string"){
        throw new Error("desiredMessage must be a string");
    }
    var trueXPosition = desiredXPosition - elementWidth/2;
    var trueYPosition = desiredYPosition - elementHeight/2;
    button(desiredId, desiredMessage);
    setPosition(desiredId, trueXPosition, trueYPosition, elementWidth, elementHeight);
    setProperty(desiredId, "text-align", "center");
}

function newScreenNavigationButtons(previousScreenId, nextScreenId, backButtonId, nextButtonId){
    if ((typeof previousScreenId !== "string") || (typeof backButtonId !== "string")){
        throw new Error("newScreenNavigationButtons requires string based parameters, nextScreenId and nextButtonId are optional");
    }
    newButton(backButtonId, "Back", 60, 420, 100, 50);
    onEvent(backButtonId, "click", function(){
        setScreen(previousScreenId);
    });
    if ((typeof nextButtonId === "string") && (typeof nextScreenId === "string")){
        newButton(nextButtonId, "Next", 260, 420, 100, 50);
        onEvent(nextButtonId, "click", function(){
        setScreen(nextScreenId);
            });
    } else{
        return;
    }
}

// Already on screen1 so no set screen required
newLabel("screen1Title", "Passwords Dataset Analyzer", 160, 100, 300, 100, 25);
newLabel("screen1Intro", "Made by rjdklp, please enjoy", 160, 225, 250, 150, 18);
newButton("screen1NextButton", "Next Screen", 260, 420, 100, 50);
onEvent("screen1NextButton", "click", function(){
    setScreen("screen2");
});

setScreen("screen2");
newScreenNavigationButtons("screen1", "screen3", "screen2BackButton", "screen2NextButton");

// Code for screen2 here

setScreen("screen3");
newScreenNavigationButtons("screen2", undefined, "screen3BackButton", undefined);

// Code for screen3 here

setScreen("screen1");