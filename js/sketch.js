let positionX = [];
let positionY = [];


function setup(){
	// let width = document.getElementById("top").clientWidth;
	// let height = document.getElementById("top").clientHeight;
	let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("top");
    for (let i = 0; i < Math.round(windowWidth / 50); i++) {
    	positionX[i] = random(width)
    	positionY[i] = random(-height, -50)
    }
    noStroke();
}

function draw(){
	background("#090e1f")
	fill("#192f60")
	for (let i = 0; i < Math.round(windowWidth / 50); i++) {
		rect(positionX[i], positionY[i], 2, 50);
		positionY[i] += 40;
		if (positionY[i] > height) {
			positionX[i] = random(width)
			positionY[i] = random(-height, -50)
		}
	}
	
}
