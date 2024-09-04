import { createCloud } from "./cloud";

const createSky = (clouds = 20) => {	
	// To distribute the clouds consistently,
	// we need to place them according to a uniform angle
	var stepAngle = Math.PI*2 / clouds;
	
	// create the clouds
	for(var i=0; i<clouds; i++){
    var cloudName = `c${i}`;
    var cloud = {g: cloudName};
	 
		// set the rotation and the position of each cloud;
		// for that we use a bit of trigonometry
		var a = stepAngle*i; // this is the final angle of the cloud
		var h = 4 + Math.random(); // this is the distance between the center of the axis and the cloud itself

		// Trigonometry!!! I hope you remember what you've learned in Math :)
		// in case you don't: 
		// we are simply converting polar coordinates (angle, distance) into Cartesian coordinates (x, y)
		cloud.y = Math.sin(a)*h - 3;
		cloud.x = Math.cos(a)*h;

		// for a better result, we position the clouds 
		// at random depths inside of the scene
		cloud.z = -2-(Math.random()*4);

		// rotate the cloud according to its position
		cloud.rz = a + Math.PI/2;

		// create and modify the cloud
		createCloud(cloudName, new DOMPoint(cloud.x, cloud.y, cloud.z));
		W.move({n: cloudName, rx: a + Math.PI/2});
	}  
}

export { createSky };
