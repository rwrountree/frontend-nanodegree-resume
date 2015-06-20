//$("#main").append("Rusty Rountree");

var speed_of_light = 299792458;   // meters per second
var meter = 100;                  // one meter is 100 centimeters
var nanosecond = 1.0/1000000000;  // one billionth of a second

console.log(speed_of_light * (meter * nanosecond));

//var awesomeThoughts = "I am Rusty and I am AWESOME!";
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN!");
//$("#main").append(funThoughts);

var my_name = "Rusty Rountree";
var formattedName = HTMLheaderName.replace("%data%", my_name);
$("#header").append(formattedName);

var my_role = "Front End Ninja";
var formattedRole = HTMLheaderRole.replace("%data%", my_role);
$("#header").append(formattedRole);

