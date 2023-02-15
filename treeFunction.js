//Ex 2 - Move your abstract shape into a function of your choice along with the if-else statements.

//A program where I create a tree and change it with if/else statements and a function

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("tan");
  
  //Change these perameters to change the position of the tree
  drawTree(200, 100);
}

function drawTree(x, y) {
  //Color of the object
  let leaves = color(40, 120, 40);
  let blueGreenLeaves = color(17, 87, 74);

  //Sets default format for tree
  noStroke();
  fill(leaves);

  if (mouseX < 200 && mouseY < 200) {
    //Resizes and moves the tree
    scale(0.5);
    translate(200, 200);
    //Logs that my mouse is in the top left
    console.log("Top Left");
  } else if (mouseX > 200 && mouseY < 200) {
    //Changes color of leaves
    fill(blueGreenLeaves);
    //Logs that my mouse is in the top right
    console.log("Top Right");
  } else if (mouseX > 200 && mouseY > 200) {
    //Covers the tree with snow
    fill("white");
    stroke("white");
    strokeWeight(50);
    //Logs that my mouse is in the bottom right
    console.log("Bottom Right");
  } else if (mouseX < 200 && mouseY > 200) {
    //Default settings for tree
    //Logs that my mouse is in the bottom left
    console.log("Bottom Left");
  } else {
    //Does nothing
    console.log("Ignore");
  }

  //Tree
  translate(x, y);
  //Trunk
  rect(-15, 70, 30, 190, 0, 0, 5, 5);
  //Top Leaves
  triangle(0, 0, -35, 80, 35, 80);
  //Middle Leaves
  triangle(0, 40, -45, 140, 45, 140);
  //Bottom Leaves
  triangle(0, 90, -55, 210, 55, 210);
}
