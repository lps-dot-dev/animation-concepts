import { defineCylinder } from "../models/cylinder";

const Colors = {
	red:"0xf25346",
	white:"0xd8d0d1",
	brown:"0x59332e",
	pink:"0xF5986E",
	brownDark:"0x23190f",
	blue:"0x68c3c0",
};

const createScene = () => {
  defineCylinder();

  W.camera({z:0});
  W.light({y: -1,z:-.5});
  W.cylinder({n: "sea", b: Colors.blue, w: 8, d: 4, x: -4, y: -4.5, z: -2.35, rx:-80});
};

/** @todo Attach cylinder to camera, and attempt to rotate then */
const loopScene = () => {
  var t = 0;
  setInterval(() => {
    t += 0.005;
    W.move({n:"sea", y: -4.5 + (Math.sin(t) * 0.05)});
  }, 16);
};

export { createScene, loopScene };
