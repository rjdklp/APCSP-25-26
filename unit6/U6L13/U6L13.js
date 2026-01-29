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

console.log("Creating UI Elements...");
var elementsInit = getTime();
dropdown("filterNumCategoryInput", "Rank", "Strength", "Value");
dropdown("filterNumBoundInput", "Max", "Min");
textLabel("filterNumOutput", "");
setProperty("filterNumCategoryInput", "x", (160-((getProperty("filterNumCategoryInput", "width"))/2)));
setProperty("filterNumCategoryInput", "y", (400-((getProperty("filterNumCategoryInput", "height"))/2)));
setProperty("filterNumBoundInput", "x", (160-((getProperty("filterNumBoundInput", "width"))/2)));
setProperty("filterNumBoundInput", "y", (350-((getProperty("filterNumBoundInput", "height"))/2)));
setProperty("filterNumOutput", "x", (160-((getProperty("filterNumOutput", "width"))/2)));
setProperty("filterNumOutput", "y", (150-((getProperty("filterNumOutput", "height"))/2)));
console.log("Finished creating UI elements in " + ((getTime() - elementsInit)/1000) + " seconds \n");
timeSinceInit();

onEvent("filterNumCategoryInput", "change", function( ){
filterForMax(getText("filterNumCategoryInput"), getText("filterNumBoundInput"));
});

function filterForMax(category, bound){
    hideElement("filterNumBoundInput");
    if (bound == "Max"){
        var intIndex = 0;
        var index;
        var max;
        var latestMax;
        var latestLatter;
        while(intIndex < 4){
            index = 0;
            max = 0;
            while(index<indexLimit){
                if ((category[index] > max) && (category[index] < latestMax)){
                    max = category[index];
                    index++
                }   else {
                    index++
                    continue;
                }
            } 
            latestMax = max;
            latestLatter = (category + "\n" + (intIndex + 1) + " ." + latestMax + "\n");
            setProperty("filterNumOutput", "text", "Ranking of the biggest values in " + getText("filterNumOutput") + latestLatter);
            intIndex++;
        }
    } 
    
    if (bound == "Min"){
        var intIndex = 0;
        var index;
        var min;
        var latestMin;
        var latestLatter;
        while(intIndex < 4){
            index = 0;
            min = (10^10);
            while(index<indexLimit){
                if ((category[index] < min) && (category[index] > latestMin)){
                    min = category[index];
                    index++
                }   else {
                    index++
                    continue;
                }
            } 
            latestMin = min;
            latestLatter = (category + "\n" + (intIndex + 1) + " ." + latestMin + "\n");
            setProperty("filterNumOutput", "text", "Ranking of the smallest values in " + getText("filterNumOutput") + latestLatter);
            intIndex++;
        }
    }

    showElement("filterNumBoundInput");
}