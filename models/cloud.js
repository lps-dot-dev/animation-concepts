import { Colors } from "../scene/the-aviator";

/**
 * Create clouds using a random number of box geometry
 * @param {string} groupName
 * @param {DOMPoint} startingPoint
 */
const createCloud = (groupName, startingPoint = new DOMPoint()) => {
	// Create cloud group
	W.group({n: groupName, x: startingPoint.x, y: startingPoint.y, z: startingPoint.z});
  // duplicate the geometry a random number of times
	var cloudCubes = 3+Math.floor(Math.random()*3);
	for (var i=0; i<cloudCubes; i++) {
		// create the mesh by cloning the geometry
		var cube = {n: `${groupName}${i}`, g: groupName, b: Colors.white + "80"}; 
		
		// set the position and the rotation of each cube randomly
		cube.x = i*0.25;
		cube.y = Math.random()*0.25;
		cube.z = Math.random()*0.25;
		cube.rz = Math.random()*Math.PI*2;
		cube.ry = Math.random()*Math.PI*2;
		
		// set the size of the cube randomly
		cube.size = .1 + Math.random()*.3;
		
		// add the cube to the engine
		W.cube(cube);
	} 
};

export { createCloud };
