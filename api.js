

function setup() {
  createCanvas(windowWidth,windowHeight);

  var asteroidapi
  var color
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
  console.log(today);
  asteroidapi = data
  console.log(asteroidapi.near_earth_objects);
  if (asteroidapi.near_earth_objects[today][0].is_potentially_hazardous_asteroid == true) {
    color = 'red'
  }
  else {
    color = 'blue'
  }

//console.log(asteroidapi.near_earth_objects['2015-09-07'][3].is_potentially_hazardous_asteroid);
console.log(today);
}


function draw(){
  fill(color);
  rect(100,100,100,500);
}
