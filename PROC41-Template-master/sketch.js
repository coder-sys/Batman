const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
let engine,world
let i = 0
let water = []
var ground
let img
let man
let image1 
let image2
let image3
let image4 
let image5
let image6
let image7
let image8
var allimg = []
function preload(){
    img = loadImage('bg.gif')
    image1=loadImage('Walking Frame/walking_1.png')
    image2=loadImage('Walking Frame/walking_2.png')
    image3=loadImage('Walking Frame/walking_3.png')
    image4=loadImage('Walking Frame/walking_4.png')
    image5=loadImage('Walking Frame/walking_5.png')
    image6=loadImage('Walking Frame/walking_6.png')
    image7=loadImage('Walking Frame/walking_7.png')
    image8=loadImage('Walking Frame/walking_8.png')


}

function setup(){
    let cnvs = createCanvas(500,600)
    engine = Engine.create()
    world = engine.world
    allimg = [image1,image2,image3,image4,image5,image6,image7,image8]
    let index = 0
        man = new walkingMan(7,450-33,allimg[index])
        index++
    
    ground = Bodies.rectangle(500,525,7000,10,{isStatic:true})
    World.add(world,ground)
    Engine.run(engine)
  
}

function draw(){
    background(img)
    Engine.update(engine)
    i++
    if(i%1===0){
        water.push(new Rain(random(500),random(600)))
    }
    man.show()

    push()
    translate(ground.position.x,ground.position.y)
    rectMode(CENTER)
    fill('brown')
    rect(0,0,7000,10)
    pop()
    
    for(let ii = 0;ii<water.length-1;ii++){
        water[ii].show()
    }
    console.log(mouseX)
    man.man.position.x +=0.1
}   

