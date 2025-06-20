function setup() //called once when the program starts
{
    createCanvas(400,400);
    background(220);
}

function draw() //this runs in a loop to update the display
{
    point(150,250);
    line(0,0,400,400); /*x1 and y1 is the first point of the line, 
    and then x2 and y2 is the ending point of the line */
    rect(0,0, 100, 100);
    rect(100,100, 100, 100);
    rect(0,0, 100, 100);
    rect(0,0, 100, 100);
}