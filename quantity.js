function drawUnit(x, y, value) {
	var beginX = x;
	var beginY = y + 50;
	var endX = beginX + beadsize * 2;
	var endY = beginY + ((beadsize << 1) + marginBead) * (value);

	for(var i = 0; i < value; i ++) {
		ctx.fillStyle = "#FFEF00";
		ctx.beginPath();
		ctx.arc(beginX + beadsize, beginY + ((beadsize << 1) + marginBead) * (i), beadsize, 0, 2 * Math.PI);
		ctx.fill(); 
	}
	return {bx:beginX, by:beginY - beadsize, ex:endX, ey:endY - beadsize};
}

function drawDecade(x, y, value, margin, hasRect) {
	var beginX = x;
	var beginY = y;
	var endX = beginX + ((beadsize << 1) + marginBead) * 10;
	var endY = beginY + ((beadsize << 1) + marginBead) * 10;

	for(var i = 0; i < value; i ++) {
		var rect = drawUnit(beginX + i * ((beadsize << 1) + marginBead + margin), beginY, 10);
		if(hasRect) {
			ctx.strokeStyle = "#000000";
			ctx.strokeRect(rect.bx, rect.by, rect.ex - rect.bx, rect.ey - rect.by);
		}
	}
	return {bx:beginX, by:beginY - beadsize, ex:endX, ey:endY - beadsize};
}


function drawHundred(x, y, value, margin, hasRect) {
	var beginX = x;
	var beginY = y;
	for(var i = 0; i < value; i ++) {
		var rect = drawDecade(beginX + ((beadsize << 1) + marginBead + margin) * 10 * (i % 2), beginY + (i >> 1) * (((beadsize << 1) + marginBead + margin) * 10), 10, false);
		if(hasRect) {
			ctx.strokeStyle = "#000000";
			ctx.strokeRect(rect.bx, rect.by + 50, rect.ex - rect.bx, rect.ey - rect.by);
		}
	}
}

function drawTrousand(x, y, margin, value) {
	var img = document.getElementById("img1");
	var beginX = x;
	var beginY = y + 50;

	for(var i = 0; i < value; i ++) {
		for(var j = 0; j < 10; j ++) {
			ctx.drawImage(img, beginX + (i % 2) * margin, beginY + (i / 2) * margin + (10 - j) * (beadsize << 1), 155, 85);
		}
	}
	
}