function deg2rad(degrees)
{
	return degrees * ( Math.PI /180);
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function countNewPosition(xCoord, yCoord, angle, length) {
    //angle = angle * Math.PI / 180; // if you're using degrees instead of radians
    return {x: length * Math.cos(angle) + xCoord, y: length * Math.sin(angle) + yCoord};
}

function countAngle(p1x, p1y, p2x, p2y) {
	return Math.atan2(p2y - p1y, p2x - p1x);//this is in radians
}

function getDistance( x1, y1, x2, y2 ) {
	
	var xs = x2 - x1,
	ys = y2 - y1;		
	
	xs *= xs;
	ys *= ys;
	
	return Math.sqrt( xs + ys );
}

function compareAngles(angle1, angle2) {
	var a = angle1 - angle2;
	if (a > Math.PI) a -= Math.PI;
	if (a < -Math.PI) a += Math.PI;
	return a;
}