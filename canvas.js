

// var canvas = document.getElementById("canvas");
// if (canvas.getContext) 
// {
//   var ctx = canvas.getContext('2d');
//   ctx.fillStyle='#fa4b2a';  
//   ctx.fillRect(10, 40, 140, 160); 
//   // ctx.lineWidth = "3";
//   ctx.strokeRect(10, 40, 140, 160)
//   ctx.strokeStyle = "red";
// }


// const canvas = document.querySelector("#canvas");
// console.log("hai",canvas)
// const context = canvas.getContext('2d');
// console.log("hello world")

// context.fillStyle = 'black';
// context.fillRect(0,0,500,500)

// context.fillStyle = 'pink';
// context.fillRect(0,500-100,40,100)

// context.fillStyle = 'skyblue';
// context.fillRect(50,500-150,40,150)

// context.fillStyle = 'pink';
// context.fillRect(100,500-200,40,200)

// context.fillStyle = 'skyblue';
// context.fillRect(150,500-250,40,250)

// context.fillStyle = 'pink';
// context.fillRect(200,500-200,40,200)

// context.fillStyle = 'skyblue';
// context.fillRect(250,500-300,40,300)

"use strict"

const canvas = document.querySelector("#canvas");
const context = canvas.getContext('2d');
let barHeightArray = [100,150,200,250,200,300];
const canvasHeight = 457;

context.fillStyle = 'grey';
context.fillRect(0,0,500,500)
context.fillStyle = 'black';
context.lineWidth = 2.0; 
context.beginPath(); 
context.moveTo(30,10); 
context.lineTo(30,460); 
context.lineTo(490,460);  
context.stroke();

for (let i =0; i < barHeightArray.length
  ; i++) {
  context.fillStyle = 'pink';
  context.fillRect (i * 50 + 36, canvasHeight - barHeightArray[i], 40, barHeightArray[i])
  context.lineWidth ="3"
  context.strokeStyle = "skyblue";
  context.strokeRect (i * 50 + 36, canvasHeight - barHeightArray[i], 40, barHeightArray[i])
}
// x-axis
var labels = ["JAN","FEB","MAR","APR","MAY","June"]; 
for(var i=0; i<barHeightArray.length; i++) { 
    context.fillText(labels[i], 50 + i * 50, 475); 
} 
// y-axis
for(var i=0; i<6; i++) { 
    context.fillText((5-i) * 20, 4, (i * 80) + 60); // loop 1: (100, 4, 60) loop 2: (80, 4, 140) loop 3: (60, 4, 220)
    context.moveTo(25,i*80+60); // loop 1: (25, 60) loop 2: (25, 140) loop 3: ()
    context.lineTo(30,i*80+60); // loop 1: (30, 60) loop 2: (30, 140)
    context.stroke(); 
} 


