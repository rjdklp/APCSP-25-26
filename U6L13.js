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

var runNumber;
var max;
var min;
var index;
var entryNum = 0;
var next5Calls = 0;

function initialMax(category){
    max = 0;
    index = 0;
    for (var index = 0; index<493; index++){
        if (category[index] > max){
            max = category[index];
            entryNum = index+1;
        } else {
            continue;
        }
    }
    return [entryNum, max];
}

function nextMax(category, lastMax){
    max = 0;
    index = 0;
    for (var index = 0; index<493; index++){
        if ((category[index] > max) && (category[index] < lastMax)){
            max = category[index];
            entryNum = index+1;
        } else {
            continue;
        }
    }
    return [entryNum, max]; 
}

function initialMin(category){
    min = 999999;
    index = 0;
    for (var index = 0; index<493; index++){
        if (category[index] < min){
            min = category[index];
            entryNum = index+1;
        } else {
            continue;
        }
    }
    return [entryNum, min];
}

function nextMin(category, lastMin){
    min = 999999;
    index = 0;
    for (var index = 0; index<493; index++){
        if ((category[index] < min) && (category[index] > lastMin)){
            min = category[index];
            entryNum = index+1;
        } else {
            continue;
        }
    }
    return [entryNum, min]; 
}

function dynamicFilter(category, bound, lastLowestMax, lastHighestMin){
    if (next5Calls == 0){
        if (bound == "Maximum"){
        runNumber = 1;
        lastEntryAndMax = initialMax(category);
        setProperty("screen3RankEntryOut1", "text", lastEntryAndMax[0]);
        setProperty("screen3RankOut1", "text", lastEntryAndMax[1]);
        runNumber++;
        for (var index = 0; index < 4; index++){
            lastEntryAndMax = nextMax(category, lastEntryAndMax[1]);
            setProperty("screen3RankEntryOut" + runNumber, "text", lastEntryAndMax[0]);
            setProperty("screen3RankOut" + runNumber, "text", lastEntryAndMax[1]);
            runNumber++;
        }
    }   if (bound == "Minimum"){
            runNumber = 1;
            lastEntryAndMin = initialMin(category);
            setProperty("screen3RankEntryOut1", "text", lastEntryAndMin[0]);
            setProperty("screen3RankOut1", "text", lastEntryAndMin[1]);
            runNumber++;
            for (var index = 0; index < 4; index++){
                lastEntryAndMin = nextMin(category, lastEntryAndMin[1]);
                setProperty("screen3RankEntryOut" + runNumber, "text", lastEntryAndMin[0]);
                setProperty("screen3RankOut" + runNumber, "text", lastEntryAndMin[1]);
                runNumber++;
            }
        }
    } else {
        if (bound == "Maximum"){
        runNumber = 1;
        lastEntryAndMax[1] = lastLowestMax;
        for (var index = 0; index < 5; index++){
            lastEntryAndMax = nextMax(category, lastEntryAndMax[1]);
            setProperty("screen3RankEntryOut" + runNumber, "text", lastEntryAndMax[0]);
            setProperty("screen3RankOut" + runNumber, "text", lastEntryAndMax[1]);
            runNumber++;
        }
    }   if (bound == "Minimum"){
            runNumber = 1;
            lastEntryAndMin[1] = lastHighestMin;
            for (var index = 0; index < 5; index++){
                lastEntryAndMin = nextMin(category, lastEntryAndMin[1]);
                setProperty("screen3RankEntryOut" + runNumber, "text", lastEntryAndMin[0]);
                setProperty("screen3RankOut" + runNumber, "text", lastEntryAndMin[1]);
                runNumber++;
            }
        }
    }
}

function timeUnitOutput(){
    var entryNum = -1;
    for (var timeUnitIndex = 1; timeUnitIndex < 6; timeUnitIndex++){
        entryNum = getNumber("screen3RankEntryOut" + timeUnitIndex);
        console.log(entryNum);
        setProperty("screen3TimeUnitOut" + timeUnitIndex, "text", passwordsTime_Unit[entryNum]);
    }
}

function resetTimeUnitOutputLabels(){
    for (var indexingThings = 1; indexingThings < 6; indexingThings++){
        setProperty("screen3TimeUnitOut" + indexingThings, "text", "");
    }
}

function makeRandomPassword(){
    var number = 0;
    var randomPasswordCompList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b",
        "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
        "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
        "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
        "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var password = "";
    for(var pIndex = 1; pIndex < 32; pIndex++){
        number = randomNumber(0, ((randomPasswordCompList.length) - 1));
        password = password + randomPasswordCompList[number]; 
    }
    setProperty("screen4PasswordOut", "text", password);
}

// UI Element Creation Below

console.log("Creating UI Elements...");
var UiElementsCreationInit = getTime();

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
newLabel("screen3Tip", "Check any entries you are curious about on the previous screen!", 160, 180, 300, 150, 9);
newLabel("screen3UseCase", "When set to minimum, the lowest value is highest on the ranking list", 160, 200, 300, 150, 10);
newButton("screen3FilterButton", "Click to filter", 160, 180, 100, 50);
newDropdown("screen3CategoryInput", "Rank", "Value", "Strength", undefined, undefined, undefined, undefined, undefined, undefined, undefined, 55, 180, 100, 30, 13);
newDropdown("screen3BoundInput", "Maximum", "Minimum", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 265, 180, 100, 30, 13);
newButton("screen3Next5FilterButton", "Click to see next 5", 160, 220, 200, 25);
hideElement("screen3Next5FilterButton");
newLabel("screen3RankEntry1", "Entry:", 16, 250, 30, 20, 18);
newLabel("screen3RankEntry2", "Entry:", 16, 270, 30, 20, 18);
newLabel("screen3RankEntry3", "Entry:", 16, 290, 30, 20, 18);
newLabel("screen3RankEntry4", "Entry:", 16, 310, 30, 20, 18);
newLabel("screen3RankEntry5", "Entry:", 16, 330, 30, 20, 18);
newLabel("screen3RankEntryOut1", "Entry:", 96, 250, 30, 20, 18);
newLabel("screen3RankEntryOut2", "Entry:", 96, 270, 30, 20, 18);
newLabel("screen3RankEntryOut3", "Entry:", 96, 290, 30, 20, 18);
newLabel("screen3RankEntryOut4", "Entry:", 96, 310, 30, 20, 18);
newLabel("screen3RankEntryOut5", "Entry:", 96, 330, 30, 20, 18);
newLabel("screen3Rank1", "1:", 152, 250, 30, 20, 18);
newLabel("screen3Rank2", "2:", 152, 270, 30, 20, 18);
newLabel("screen3Rank3", "3:", 152, 290, 30, 20, 18);
newLabel("screen3Rank4", "4:", 152, 310, 30, 20, 18);
newLabel("screen3Rank5", "5:", 152, 330, 30, 20, 18);
newLabel("screen3RankOut1", "", 220, 250, 200, 20, 18);
newLabel("screen3RankOut2", "", 220, 270, 200, 20, 18);
newLabel("screen3RankOut3", "", 220, 290, 200, 20, 18);
newLabel("screen3RankOut4", "", 220, 310, 200, 20, 18);
newLabel("screen3RankOut5", "", 220, 330, 200, 20, 18);
newLabel("screen3TimeUnitOut1", "", 280, 250, 200, 20, 12);
newLabel("screen3TimeUnitOut2", "", 280, 270, 200, 20, 12);
newLabel("screen3TimeUnitOut3", "", 280, 290, 200, 20, 12);
newLabel("screen3TimeUnitOut4", "", 280, 310, 200, 20, 12);
newLabel("screen3TimeUnitOut5", "", 280, 330, 200, 20, 12);
dynamicFilter(passwordsRank, "Maximum", 0, 999999);
dynamicFilter(passwordsRank, "Minimum", 0, 999999);
for (var i = 1; i<6; i++){
    setProperty("screen3RankEntryOut" + i, "text", "");
    setProperty("screen3RankOut" + i, "text", "");
}
onEvent("screen3CategoryInput", "change", function(){
    next5Calls = 0;
});
onEvent("screen3BoundInput", "change", function(){
    next5Calls = 0;
});
onEvent("screen3FilterButton", "click", function(){
    next5Calls = 0;
    showElement("screen3Next5FilterButton");
    if (getText("screen3CategoryInput") == "Rank"){
        dynamicFilter(passwordsRank, (getText("screen3BoundInput")));
        resetTimeUnitOutputLabels();
    } if (getText("screen3CategoryInput") == "Value"){
        dynamicFilter(passwordsValue, (getText("screen3BoundInput")));
        timeUnitOutput();
    } if (getText("screen3CategoryInput") == "Strength"){
        dynamicFilter(passwordsStrength, (getText("screen3BoundInput")));
        resetTimeUnitOutputLabels();
    }
});
onEvent("screen3Next5FilterButton", "click", function(){
    for (var i = 1; i<5; i++){
        setProperty("screen3RankEntryOut" + i, "text", "");
        setProperty("screen3RankOut" + i, "text", "");
    }
    next5Calls++;
    if (getText("screen3BoundInput") == "Maximum"){
        if (getText("screen3CategoryInput") == "Rank"){
            dynamicFilter(passwordsRank, (getText("screen3BoundInput")), (getNumber("screen3RankOut5")), 999999);
            resetTimeUnitOutputLabels();
        } if (getText("screen3CategoryInput") == "Value"){
            dynamicFilter(passwordsValue, (getText("screen3BoundInput")), (getNumber("screen3RankOut5")), 999999);
            timeUnitOutput();
        } if (getText("screen3CategoryInput") == "Strength"){
            dynamicFilter(passwordsStrength, (getText("screen3BoundInput")), (getNumber("screen3RankOut5")), 999999);
            resetTimeUnitOutputLabels();
        }
    }
    if (getText("screen3BoundInput") == "Minimum"){
        if (getText("screen3CategoryInput") == "Rank"){
            dynamicFilter(passwordsRank, (getText("screen3BoundInput")), 0, (getNumber("screen3RankOut5")));
            resetTimeUnitOutputLabels();
        } if (getText("screen3CategoryInput") == "Value"){
            dynamicFilter(passwordsValue, (getText("screen3BoundInput")), 0, (getNumber("screen3RankOut5")));
            timeUnitOutput();
        } if (getText("screen3CategoryInput") == "Strength"){
            dynamicFilter(passwordsStrength, (getText("screen3BoundInput")), 0, (getNumber("screen3RankOut5")));
            resetTimeUnitOutputLabels();
        }
    }
});

setScreen("screen4");
// Code for screen4 here
newScreenNavigationButtons("screen3", undefined, "screen4BackButton", undefined);
newLabel("screen4Title", "Password Generator", 160, 60, 400, 100, 25);
newLabel("screen4Intro", "Creates a random alpha-numeric 32 digit password", 160, 120, 250, 150, 14);
newButton("screen4RandomPasswordIn", "Click to make a random password!", 160, 210, 150, 150);
newInput("screen4PasswordOut", "", 160, 330, 320, 20, 14);
onEvent("screen4RandomPasswordIn", "click", function(){
    makeRandomPassword();
});

setScreen("screen1");

console.log("Finished creating UI elements in " + ((getTime() - UiElementsCreationInit)/1000) + " seconds \n");
console.log("Finished App Initialization");
timeSinceInit();