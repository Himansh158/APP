var button;
var Rec1  
function setup() {
  noCanvas();
  var lang = navigator.language || 'en-US';
  Rec1 = new p5.SpeechRec(lang, gotSpeech);
  let continuous = false;
  let interim = false;
  Rec1.start(continuous, interim) 
  //Rec1.continuous = false; // turn continuous off!
  Rec1.onError = restart;
  Rec1.onEnd = restart;

//Save Button
//button = createButton('Save')
//button.position(1000,80)
//button.mousePressed(saveAsText)

//Save Function
//function saveAsText(){
  
}
  
  // once the record ends or an error happens, start() again. this should keep it going
  function restart(){
    Rec1.start();
  }

function gotSpeech(){
  if(Rec1.resultValue){
    createP(Rec1.resultString);
  
  }
  console.log(Rec1);
}
