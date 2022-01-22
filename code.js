var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var rabbit = createSprite(25,25,20,20)
rabbit.shapeColor="white"

var wall1 = createSprite(60,10,20,110 );
wall1.shapeColor="brown"
var wall2 = createSprite(10,130,130,20 );
wall2.shapeColor="brown"
var wall3 = createSprite(130,110,20,110 );
wall3.shapeColor="brown";
var wall4 = createSprite(60,10,20,110 );
wall4.shapeColor="brown";
var wall5 = createSprite(180, 40, 20, 200 );
wall5.shapeColor="brown";
var wall6 = createSprite(10, 230, 20, 110 );
wall6.shapeColor="brown";
var wall7 = createSprite(30, 230,110,20 );
wall7.shapeColor="brown"
var wall8 = createSprite(180,180,110,20 );
wall8.shapeColor="brown"
var wall9 = createSprite(380, 30, 120, 20);
wall9.shapeColor = "brown";
var wall10 = createSprite(280, 100, 110, 20);
wall10.shapeColor = "brown";
var wall11 = createSprite(350, 100, 20, 110);
wall11.shapeColor = "brown";
var wall12 = createSprite(220, 260, 20, 110);
wall12.shapeColor = "brown";
var wall13 = createSprite(400, 250, 230, 20);
wall13.shapeColor = "brown";
var wall14 = createSprite(100, 278, 100, 20);
wall14.shapeColor = "brown";
var wall15 = createSprite(255, 310, 20, 100);
wall15.shapeColor = "brown";
var wall16 = createSprite(25, 348, 100, 20);
wall16.shapeColor = "brown";
var wall17 = createSprite(100, 400, 200, 40);
wall17.shapeColor = "brown";
var wall18 = createSprite(300, 400, 20, 150);
wall18.shapeColor = "brown";
var laser1 = createSprite(100,100,10,200)
laser1.shapeColor = "red"
var laser2 = createSprite(300,300,10,200)
laser2.shapeColor = "red"
var laser3 = createSprite(200,200,200,10)
laser3.shapeColor = "red"
var laser5 = createSprite(100,350,200,10)
laser5.shapeColor = "red"


laser1.velocityY=3
laser2.velocityY=-3
laser3.velocityX=-3
laser5.velocityX=3


var carrot = createSprite(370,360,20,20)
carrot.shapeColor="orange"

createEdgeSprites()

function draw() {
 background("#7AEF27 ")
 drawSprites()
 
 rabbit.bounceOff(edges);
  rabbit.bounceOff(wall1);
  rabbit.bounceOff(wall2);
 rabbit.bounceOff(wall3);
  rabbit.bounceOff(wall4);
  rabbit.bounceOff(wall5);
  rabbit.bounceOff(wall6);
  rabbit.bounceOff(wall7);
  rabbit.bounceOff(wall8);
  rabbit.bounceOff(wall9);
  rabbit.bounceOff(wall10);
  rabbit.bounceOff(wall11);
  rabbit.bounceOff(wall12);
  rabbit.bounceOff(wall13);
 rabbit.bounceOff(wall14);
  rabbit.bounceOff(wall15);
  rabbit.bounceOff(wall16);
  rabbit.bounceOff(wall17);
  rabbit.bounceOff(wall18);
  laser1.bounceOff(edges)
  laser2.bounceOff(edges)
  laser3.bounceOff(edges)
  laser5.bounceOff(edges)
  
  if (keyDown("up")) {
    rabbit.y = rabbit.y-10
  }
  
  if (keyDown("down")) {
    rabbit.y = rabbit.y+10
  }
  
  if (keyDown("left")) {
    rabbit.x = rabbit.x-10
  }
  
  if (keyDown("right")) {
    rabbit.x = rabbit.x+10
  }
   
  if (rabbit.isTouching(carrot)) {

    textSize(30)
    text("You Won",150,250)
    text.setVelocity(0,0)
    playSound("assets/category_achievements/puzzle_game_achievement_02.mp3", false);
  rabbit.setVelocity(0,0)
  }
  rabbit.bounceOff(carrot)
  if (rabbit.isTouching(laser1) || rabbit.isTouching(laser2)) {
    textSize(30)
    text("Rabbit is caught",150,250)
    playSound("assets/category_alerts/playful_quirky_negative_game_cue_2.mp3", false);
    "Rabbit is caught".setVelocity(0,0);
  rabbit.setVelocity(0,0)
}
  if (rabbit.isTouching(laser3)) {
    textSize(30)
    text("Rabbit is caught",150,250)
    playSound("assets/category_alerts/playful_quirky_negative_game_cue_2.mp3", false);
    "Rabbit is caught".setVelocity(0,0)
  rabbit.setVelocity(0,0)
  }
    if (rabbit.isTouching(laser5)) {
    textSize(30)
    text("Rabbit is caught",150,250)
    playSound("assets/category_alerts/playful_quirky_negative_game_cue_2.mp3", false);
    "Rabbit is caught".setVelocity(0,0)
  rabbit.setVelocity(0,0)
  }
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
