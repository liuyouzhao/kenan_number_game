

function calibRegions() {
	for(var i = 0; i < maxlength; i ++) {
		regions[i] = { from: width - (width / maxlength) * (i + 1), to: width - (width / maxlength) * i};
	}
}

function drawRegions() {

	var familyArray = ["One Family", "Ten Family", "Hundred Family", "Thousand Family"];

	for(var i = 0; i < regions.length; i ++) {
		ctx.beginPath();
		ctx.moveTo(regions[i].from, 0);
		ctx.lineTo(regions[i].from, height);
		ctx.stroke(); 

		ctx.beginPath();
		ctx.moveTo(regions[i].to, 0);
		ctx.lineTo(regions[i].to, height);
		ctx.stroke(); 

		ctx.fillStyle = regionColors[regions.length - i - 1];
		ctx.fillRect(regions[i].from, 0, regions[i].to - regions[i].from, height);

		ctx.font = '48px serif'
		ctx.fillStyle = "#000000";
		ctx.fillText(familyArray[i % 4], regions[i].from, 50);
	}
}

function initFrame() {
	calibRegions();
	drawRegions();
}
