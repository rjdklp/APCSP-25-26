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

function centerX(desiredXPosition, elementWidth){
    var truePosition = desiredXPosition - elementWidth/2;
    return truePosition;
}

function centerY(desiredYPosition, elementHeight){
    var truePosition = desiredYPosition - elementHeight/2;
    return truePosition;
}

textLabel("s1Title", "Passwords Dataset Analysis");
setPosition("s1Title", centerX(160, 300), centerY(50, 100), 300, 100);
setProperty("s1Title", "font-size", 18);
setProperty("s1Title", "text-align", "center");