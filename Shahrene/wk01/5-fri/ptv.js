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

// var stationsTravelled = [];

// var lines = {
//   alamein: ['Flinders St', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
//   glenWaverly: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
//   sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'],
// }

// var origin = prompt('Where are you getting on?');
// while (lines.alamein.includes(origin) != true && lines.glenWaverly.includes(origin) != true && lines.sandringham.includes(origin) != true) {
//   origin = prompt("Sorry, that station doesn't exist. Where are you getting on?");
// }

// var destination = prompt('Where are you getting off?');
// while (lines.alamein.includes(destination) != true && lines.glenWaverly.includes(destination) != true && lines.sandringham.includes(destination) != true) {
//   destination = prompt("Sorry, that station doesn't exist. Where are you getting off?");
// }
    
// var whichLine = function(track) {
//   if (track.includes(origin) === true && track.includes(destination) === true) {
//     var start = track.indexOf(origin);
//     var end = track.indexOf(destination);
//     if (start < end) {
//       var journey = track.slice(start, end);
//       stationsTravelled = stationsTravelled.concat(journey);
//       stationsTravelled.push(destination);
//       console.log('origin: ' + origin);
//       console.log('destination: ' + destination);
//       console.log(stationsTravelled.join(' ----> '));
//       console.log(stationsTravelled.length - 1 + ' stops in total');
//     } else {
//       track.reverse();
//       var start = track.indexOf(origin);
//       var end = track.indexOf(destination);
//       journey = track.slice(start, end);
//       stationsTravelled = stationsTravelled.concat(journey);
//       stationsTravelled.push(destination);
//       console.log('origin: ' + origin);
//       console.log('destination: ' + destination);
//       console.log(stationsTravelled.join(' ----> '));
//       console.log(stationsTravelled.length - 1 + ' stops in total');
//     }
//   }
// }

// whichLine(lines.alamein);
// whichLine(lines.glenWaverly);
// whichLine(lines.sandringham);

