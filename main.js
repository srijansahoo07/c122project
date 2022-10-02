function preload() {

}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw() {
  image(video, 0, 0, 640, 480);
  tint(tint_color);
  circle(0, 0, 70)
  circle(640, 480, 70)
  circle(0, 480, 70);
  circle(640, 0, 70)
}

function take_snapshot(){
  save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}

function circle() {
    circle(0, 0, 70);
    describe('black circle with red outline in mid of white canvas');
}

function circle() {
    circle(640, 480, 70);
    describe('black circle with red outline in mid of white canvas');
}

function circle() {
    circle(0, 480, 70);
    describe('black circle with red outline in mid of white canvas');
}

function circle() {
    circle(640, 0, 70);
    describe('black circle with red outline in mid of white canvas');
}