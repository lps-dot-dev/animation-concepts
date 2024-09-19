import { defineCube } from "../models/cube";
import { defineCylinder } from "../models/cylinder";

import { BladeSuffix, createAirplane } from "../models/airplane";
import { createSky } from "../models/sky";

const Colors = {
	red:"#F25346",
	white:"#d8d0d1",
	brown:"#59332e",
	pink:"#F5986E",
	brownDark:"#23190f",
	blue:"#68c3c0",
};

const AirplaneName = "a1";
const SeaName = "sea";

var mouseNormalValues = new DOMPoint();

const addEventListeners = () => {
  document.addEventListener('mousemove', handleMouseMovement);
};

const createScene = () => {
  // Define models
  defineCube();
  defineCylinder();

  // Set backround
  W.clearColor(Colors.pink);

  // Set camera position and angle
  W.camera({z: 1});
  // W.camera({z:-5, y: 5, rx: -90});

  // Set light position
  W.light({x: -2, y: -1, z:-1});

  // Add models to scene
  W.cylinder({n: SeaName, b: Colors.blue, w: 8, d: 4, x: -4, y: -4.5, z: -2.35, rx:-80});
  createSky(10);
  createAirplane(AirplaneName, new DOMPoint(-3, -0.25, -5));
};

/**
 * @param {MouseEvent} event 
 * @returns {void}
 */
const handleMouseMovement = (event) => {
  // Do nothing if the event target is not the canvas
  if (event.target instanceof HTMLCanvasElement === false) {
    return;
  }

  // here we are converting the mouse position value received 
	// to a normalized value varying between -1 and 1;
	// this is the formula for the horizontal axis:
	var tx = -1 + ((event.clientX - event.target.offsetLeft) / event.target.clientWidth) * 2;

	// for the vertical axis, we need to inverse the formula 
	// because the 2D y-axis goes the opposite direction of the 3D y-axis
	var ty = 1 - ((event.clientY - event.target.offsetTop) / event.target.clientHeight) * 2;

	mouseNormalValues.x = tx;
  mouseNormalValues.y = ty;
};

/** @return {int} An interval ID that can be used with `clearInterval` */
const loopScene = () => {
  var degrees = 0;
  const loopSpeed = 0.05;
  return setInterval(() => {
    // Convert degrees into radians
    degrees = degrees < 360 ? degrees + 1 : 0;
    var radians = degrees * (Math.PI / 180);

    // Bob "sea" cylinder up and down
    W.move({n:SeaName, y: -4.5 + (Math.sin(radians) * 0.05)});

    // Make clouds move from left to right
    Array(10).keys().forEach(cloudGroup => {
      var cloudGroupName = `c${cloudGroup}`;
      var { x: cloudGroupX, y: cloudGroupY } = W.current[cloudGroupName] || {x: 0, y: 0};
      if (cloudGroupX < -5) {
        cloudGroupX = 5;
      }
      W.move({n:cloudGroupName, x: cloudGroupX - loopSpeed, y: cloudGroupY + (Math.cos(radians) * 0.01), rx: -degrees});
    });

    // Rotate the propeller blades
    W.move({n: AirplaneName + BladeSuffix + "0", rx: (degrees + 180) * 25});
    W.move({n: AirplaneName + BladeSuffix + "1", rx: degrees * 25});

    // Update plane's position and angle based on mouse's position
    updatePlane();
  }, 16);
};

const updatePlane = () => {
  // let's move the airplane between -4 and 4 on the horizontal axis, 
	// and between 1 and 4 on the vertical axis,
	// depending on the mouse position which ranges between -1 and 1 on both axes;
	// to achieve that we use a normalize function (see below)
	var targetY = normalize(mouseNormalValues.y, -1, 1, -0.5, 2);
  var planeAngle = (targetY - W.current[AirplaneName].y) * 180 / Math.PI;

  W.move({
    n: AirplaneName,
    // Move the plane at each frame by adding a fraction of the remaining distance
    y: W.current[AirplaneName].y + ((targetY - W.current[AirplaneName].y) * 0.1),
    // Rotate the plane proportionally to the remaining distance
    rz: planeAngle / 3,
    rz: planeAngle / 2
  });
}

function normalize(v, vmin, vmax, tmin, tmax){
	var nv = Math.max(Math.min(v,vmax), vmin);
	var dv = vmax-vmin;
	var pc = (nv-vmin)/dv;
	var dt = tmax-tmin;
	var tv = tmin + (pc*dt);
	return tv;
}

export { addEventListeners, createScene, loopScene, Colors };
