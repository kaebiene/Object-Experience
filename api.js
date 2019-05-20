

let IBM
function setup() {
  createCanvas(windowWidth,windowHeight);


  var asteroidapi
  var hazard_color
  circleWidth = 50;
  stap = 20;
  stop = circlenum*(circleWidth+stap);
  frameRate(1);
  setInterval(hazardCheck, 300000);
}


function preload(){
  loadData();
  IBM = loadFont('assets/fonts/3270Medium.ttf');
}

function loadData(){
  loadJSON('https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-05-16&end_date=2019-05-23&api_key=XpUnPr3vngYMQ4UTRhQc5TyAkOVkMiaW1tocANSc', hazardCheck);
  console.log('loadData');
}

var hazardous = 0
var nonhazardous = 0
var hazardous2 = 5
var nonhazardous2 = 0
var circlenum

function hazardCheck(data) {
  var d = day()
  var y = year()
  var m = month()
  var today = y + '-' + '0'+ m + '-' + d;
  var tomorrow =  y + '-' + '0'+ m + '-' + 18;
  console.log(today);
  asteroidapi = data
  console.log(asteroidapi.near_earth_objects);
  console.log(tomorrow);

  for (var i = 0; i < asteroidapi.near_earth_objects[today].length; i++) {
    if (asteroidapi.near_earth_objects[today][i].is_potentially_hazardous_asteroid == true) {
      hazardous ++
    }
    else {
      nonhazardous ++
    }
  }

  // for (var i = 0; i < asteroidapi.near_earth_objects[tomorrow].length; i++) {
  //   if (asteroidapi.near_earth_objects[tomorrow][i].is_potentially_hazardous_asteroid == true) {
  //     hazardous2 ++
  //   }
  //   else {
  //     nonhazardous2 ++
  //   }
  // }

if (hazardous >= 1) {
  hazard_color = 'red'
}
else {
  hazard_color = 'blue'
}

// if (hazardous2 >= 1) {
//   hazard_color = 'red'
// }
// else {
//   hazard_color = 'blue'
// }

console.log(hazardous);
console.log(nonhazardous);
// console.log(hazardous2);

//console.log(asteroidapi.near_earth_objects['2015-09-07'][3].is_potentially_hazardous_asteroid);
console.log(today);


circlenum = asteroidapi.near_earth_objects[today].length;

console.log(circlenum);
float(circlenum);
}
var circleWidth;
var x
var stap
var stop




function draw(){

  var d = day()
  var y = year()
  var m = month()
  background('white');
  fill(hazard_color);
//  rect(100,100,100,hazardous*100);
noStroke();
  // ellipse(windowWidth/2,windowHeight/2,hazardous*50);
  textSize(30);
  textAlign(CENTER);
fill('red');
textStyle(ITALIC);
textFont(IBM);
text('potentially_hazardous_asteroids',windowWidth/2,windowHeight/1.3);
fill('blue');
text('non-hazardous_asteroids',windowWidth/2,windowHeight/1.2);
fill('black');
text('asteroid api view',windowWidth/2,windowHeight/5);
text(d+'-'+m+'-'+y,windowWidth/2,windowHeight/4);

// ellipse(windowWidth/1.5,windowHeight/1.5,hazardous2*50);
// textSize(20);
// textAlign(CENTER);
// text('potentially hazardous asteroids',windowWidth/2,windowHeight/1.3);

//  rect(300,300,100,nonhazardous*100);
  var i = 0
  while (i < circlenum) {
    if (i < hazardous) {
      fill('red')
    } else {
      fill('blue')
    }
    console.log("i", i);
    // line(x+, 60, x, 80);
    // ellipse(x,windowHeight/2, circleWidth)
    ellipse(i*(circleWidth+stap)+windowWidth/4.5, windowHeight/2, circleWidth)
    i++;
  }

}











// var x = d3.scale.linear()
//     .domain([0, d3.max(data)])
//     .range([0, 420]);
//
//
// d3.select(".chart")
//   .selectAll("div")
//     .data(hazardous)
//   .enter().append("div")
//     .style("width", function(d) { return x(d) + "px"; })
//     .text(function(d) { return d; });
