// This program uses two lists because it needs to get information for the pants and the shirts
// It cannot use one list because then issues could arise such as pants being placed in the shirts position

var topsList = [];
var bottomsList = [];

// This program includes topsIndex and bottomsIndex to be able to parse through the list
// If they didn't exists, the first issue which would arise is an unknown variable
// The second issue that would arise is the inability to traverse through a list effectively

var topsIndex = 0;
var bottomsIndex = 0;

fillLists();
updateScreen();

// The event handler below waits for a button press and then changes the shirt
// More specifically, by going through the list of shirts in reverse

onEvent("leftTopButton","click",function(){
  if(topsIndex > 0){
    topsIndex = topsIndex - 1;
  }
  updateScreen();
});

onEvent("rightTopButton","click",function(){

    // The if condition is checking to ensure that the index is within the range of the list
    // This process is done to avoid errors, requesting data from a list that does not exist

  if(topsIndex < topsList.length-1){
    topsIndex = topsIndex + 1;
  }
  updateScreen();
});

onEvent("leftBottomButton","click",function(){
  if(bottomsIndex > 0){
    bottomsIndex = bottomsIndex - 1;
  }
  updateScreen();
});

onEvent("rightBottomButton","click",function(){
  if(bottomsIndex < bottomsList.length - 1){
    bottomsIndex = bottomsIndex + 1;
  }
  updateScreen();
});

function updateScreen(){
  var currentTop = topsList[topsIndex];
  var currentBottom = bottomsList[bottomsIndex];
  setProperty("topImage","image",currentTop);
  setProperty("bottomImage","image",currentBottom);
}

function fillLists(){
  //yellow hoodie 
  appendItem(topsList, "https://images.code.org/fd0498f8d15d48aa44a926358b97777b-image-1556912083723.png");
  //blue cardigan
  appendItem(topsList,"https://images.code.org/92f2173c47a94b4b885d5d30c837366b-image-1556912112195.png");
  //red striped shirt 
  appendItem(topsList, "https://images.code.org/5a4504157c2c7d9a66f7635ad553dd44-image-1556912126014.png");
  //rainbow tank 
  appendItem(topsList, "https://images.code.org/2d93d9658d6a23917ec1b52a3a0f14e4-image-1556912140284.png");
  //green tshirt 
  appendItem(topsList, "https://images.code.org/03aa3d865d00ace6473cddf2a1c5ea7c-image-1556912153154.png");
  //orange plaid 
  appendItem(topsList, "https://images.code.org/296325bb0277fb216c406cd510511f70-image-1556912164204.png");
  //jean shorts 
  appendItem(bottomsList, "https://images.code.org/6da93516aaf30f42b745c2298a40f3a3-image-1556912188444.png");
  //black pants 
  appendItem(bottomsList, "https://images.code.org/a73a47d696f77d1a60f649028b5a62bf-image-1556912203874.png");
  //plaid skirt 
  appendItem(bottomsList, "https://images.code.org/88416bd1246945c1bb6c693b96674e0c-image-1556912215087.png");
  //purple skirt 
  appendItem(bottomsList, "https://images.code.org/32bbad5ded44f2408b750432dc9ecb16-image-1556912227597.png");
  //rolled jeans 
  appendItem(bottomsList, "https://images.code.org/9f5d4b0dec1fee45e0f5988a9f68fba1-image-1556912242636.png");
  //pink skirt 
  appendItem(bottomsList, "https://images.code.org/a7cb47492ea796c7bcd47e06088ffda9-image-1556912258313.png");
}