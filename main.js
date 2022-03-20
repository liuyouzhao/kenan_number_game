
function onInput() {
	onDraw();
}

function doIncrement() {
	var numstr = numberpanel.value;
	if(!numstr) {
		numstr = "0";
	}
	var iNum = parseInt(numstr);
	iNum += 1;
	numberpanel.value = iNum + "";
	onDraw();
}

function onDraw() {
	var numstr = numberpanel.value;

	for(var i = 0; i < 4; i ++) {
		numbers[i] = 0;
	}
	for(var i = numstr.length - 1, j = 0; i >= 0; i --, j ++) {
		numbers[j] = parseInt(numstr[i]);
	}

	var unit = numbers[0];
	var decade = numbers[1];
	var hundred = numbers[2];
	var trousand = numbers[3];

	ctx.clearRect(0, 0, width, height);
	drawRegions();
	drawUnit(regions[0].from + marginLeft, marginTop, unit);
	drawDecade(regions[1].from + marginLeft, marginTop, decade, 14, true);
	drawHundred(regions[2].from + marginLeft, marginTop, hundred, 5, true);
	drawTrousand(regions[3].from + marginLeft * 3, 0, 170, trousand);
}

function init() {
	initFrame();
}