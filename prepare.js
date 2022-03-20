var numbers = [];
var maxlength = 4;
var regions = [];
var canvas = document.getElementById("canvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight * 4;
var width = canvas.width;
var height = canvas.height;
var ctx = canvas.getContext("2d");

var numberpanel = document.getElementById("fname");
numberpanel.value = "";

var beadsize = 5;
var marginLeft = 8;
var marginTop = 12;
var marginBead = 2;


var regionColors = [
	"#767676",
	"#969696",
	"#767676",
	"#969696"
]

// var regionColors = [
// 	"#FFFF55",
// 	"#AFFFAF",
// 	"#A87838",
// 	"#FE68DF"
// ]