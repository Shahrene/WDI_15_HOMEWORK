console.log ('PTV Planner');

//create arrays for each line and assign one variable

var trainLines = {
  alamein : ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  glenWaverly : ['Flagstaff', 'Melbourne Central', 'Paliament', 'Richmond', 'Kooyong', 'Tooronga'],
  sandringham : ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
};
//set origin & destination data

var origin = 'Flagstaff';
var destination = 'Richmond';

function accessLine(origin) {
  var line = trainlines.object();
  return line;
}
accessLine();

function accessStationIndex(origin) {
  var indexOfStation = [];
  var line = '';
  return [indexOfStation, line];
}

accessStationIndex();

//var tripPlanner = function(origin, destination) {
//}

//create a function which accesses the starting station and on which line, using indexOf
//create a function which access the ending station and on which line, using indexOf


//create function to access stations between start and end point and put into inner array, using count
//use .length to obtain number of stops
//display inner array
//display number of stops
