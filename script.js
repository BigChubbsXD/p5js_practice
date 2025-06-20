function setup() //called once when the program starts
{
    createCanvas(400,400);
    background(220);
    translate(width/2, height/2);
    draw();
    drawAxesWithTicks();
}

function draw() //this runs in a loop to update the display
{
    line(-400,-400,400,400); /*x1 and y1 is the first point of the line, 
    and then x2 and y2 is the ending point of the line 
    */
   if (mouseIsPressed)
   {
    ellipse(mouseX, mouseY, 5, 5);
   }
    /*
    rect(0,0, 100, 100);
    rect(100,100, 100, 100);
    rect(200,200, 100, 100);
    rect(300,300, 100, 100); */
    /*point2();*/
}

function point2()
{
    stroke(0);
    strokeWeight(5);
    point(50,50);
}

function drawAxesWithTicks()
{
    stroke(0);
    strokeWeight(2);

    line(-400, 0, 400,0);

    line(0, -400, 0, 400);

    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);

    for(let x = -400; x <= 400; x+= 10) {
        stroke(0);
        strokeWeight(x % 50 === 0 ? 2 : 1);
        line(x, -5, x, 5);
        if (x !== 0 && x % 50 === 0)
        {
            noStroke();
            text(x,x,15);
        }
    }

      for(let y = -400; y <= 400; y+= 10) {
        stroke(0);
        strokeWeight(y % 50 === 0 ? 2 : 1);
        line(-5, y, 5, y);
        if (y !== 0 && y % 50 === 0)
        {
            noStroke();
            text(-y, -15, y);
        }
    }
}

// UNRELATED STUFF BELOW

const fs = require('fs');
fs.writeFileSync('example.txt','Hello, World!');
const data = deepStrictEqual.readFileSync('example.txt', 'utf-8');
console.log(data);