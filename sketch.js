const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Body=Matter.Body;

var helicopter,bgImg,ground,package;

function preload(){
	bgImg=loadImage("bg.jpg")
}

function setup(){

	var canvas=createCanvas(600,600);

	engine=Engine.create();
	world=engine.world;

    package= new Package(300,155,50,50);
	helicopter = new Helicopter(300,150,190,80);
	ground= new Ground(300,530,600,50);
	
}

function draw(){
background(bgImg);

Engine.update(engine);
package.display();
helicopter.display();
ground.display();

if(keyCode=== DOWN_ARROW){
	Matter.Body.setStatic(package.body,false);

}


}









































































































































