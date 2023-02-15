//Ex 3 - Write another function, similar to the previous one so that it accepts the parameters that affect the changes in the if-else condition. For example, if your current if-else statements change the color based on mouseX, then your function should have a parameter that changes the color based on that parameter

//A program where I create a tree and change it with if/else statements and a function and parameters

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("tan");
  
  //Change these parameters to change the position of the tree
  // drawTree(x position, y position, random number 0 - 20);
  drawTree(200, 80, 10)
}

function drawTree(x, y, z) {
  //Color of the object
  let leaves = color(40, 120, 40);
  let blueGreenLeaves = color(17, 87, 74);

  //Sets default format for tree
  noStroke();
  fill(leaves);
  translate(x, y);

  if (z <= 5) {
    //Resizes and moves the tree
    scale(0.5);
    translate(200, 200);
    //Logs that my mouse is in the top left
    console.log("5 or Less");
  } else if (z > 5 && z <= 10) {
    //Changes color of leaves
    fill(blueGreenLeaves);
    //Logs that my mouse is in the top right
    console.log("6 - 10");
  } else if (z > 10 && z <= 15) {
    //Covers the tree with snow
    fill("white");
    stroke("white");
    strokeWeight(50);
    //Logs that my mouse is in the bottom right
    console.log("11 - 15");
  } else if (z > 15 && z <= 20) {
    //Default settings for tree
    //Logs that my mouse is in the bottom left
    console.log("16 - 20");
  } else {
    //Does nothing
    console.log("Ignore");
  }

  //Trunk
  rect(-15, 70, 30, 190, 0, 0, 5, 5);
  //Top Leaves
  triangle(0, 0, -35, 80, 35, 80);
  //Middle Leaves
  triangle(0, 40, -45, 140, 45, 140);
  //Bottom Leaves
  triangle(0, 90, -55, 210, 55, 210);
}
