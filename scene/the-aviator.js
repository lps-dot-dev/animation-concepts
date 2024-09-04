import { defineCube } from "../models/cube";
import { defineCylinder } from "../models/cylinder";
import { createSky } from "../models/sky";

const Colors = {
	red:"0xf25346",
	white:"0xd8d0d1",
	brown:"0x59332e",
	pink:"0xF5986E",
	brownDark:"0x23190f",
	blue:"0x68c3c0",
};

const SeaName = "sea";

const createScene = () => {
  // Define models
  defineCube();
  defineCylinder();

  W.camera({z:1});
  W.light({y: -1,z:-.5});
  W.cylinder({n: SeaName, b: Colors.blue, w: 8, d: 4, x: -4, y: -4.5, z: -2.35, rx:-80});
  createSky(10);
};

const loopScene = () => {
  var degrees = 0;
  const loopSpeed = 0.05;
  setInterval(() => {
    // Convert degrees into radians
    degrees = degrees < 360 ? degrees + 1 : 0;
    var radians = degrees * (Math.PI / 180);

    // Bob "sea" cylinder up and down
    W.move({n:SeaName, y: -4.5 + (Math.sin(radians) * 0.05)});

    // Make clouds move from left to right
    Array(10).keys().forEach(cloudGroup => {
      var cloudGroupName = `c${cloudGroup}`;
      var { x: cloudGroupX, y: cloudGroupY, rx: cloudGroupRotationAngle } = W.current[cloudGroupName] || {x: 0, y: 0};
      if (cloudGroupX < -5) {
        cloudGroupX = 5;
      }
      W.move({n:cloudGroupName, x: cloudGroupX - loopSpeed, y: cloudGroupY + (Math.cos(radians) * 0.01), rx: degrees});
    })
  }, 16);
};

export { createScene, loopScene };
