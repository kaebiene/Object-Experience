

function setup() {
  createCanvas(windowWidth,windowHeight);

  var asteroidapi
  var hazard_color
}


function preload(){
  loadData();
}

function loadData(){
  loadJSON('https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-05-16&end_date=2019-05-23&api_key=XpUnPr3vngYMQ4UTRhQc5TyAkOVkMiaW1tocANSc', hazardCheck);
  console.log('loadData');
}

function hazardCheck(data) {
  var d = day()
  var y = year()
  var m = month()
  var today = y + '-' + '0'+ m + '-' + d;
  var hazardous = 0
  var nonhazardous = 0
  console.log(today);
  asteroidapi = data
  console.log(asteroidapi.near_earth_objects);

  for (var i = 0; i < asteroidapi.near_earth_objects[today].length; i++) {
    if (asteroidapi.near_earth_objects[today][i].is_potentially_hazardous_asteroid == true) {
      hazardous ++
    }
    else {
      nonhazardous ++
    }
  }

if (hazardous >= 1) {
  hazard_color = 'red'
}
else {
  hazard_color = 'blue'
}

console.log(hazardous);
console.log(nonhazardous);

//console.log(asteroidapi.near_earth_objects['2015-09-07'][3].is_potentially_hazardous_asteroid);
console.log(today);
}


function draw(){
  fill(hazard_color);
  rect(100,100,100,500);
}
