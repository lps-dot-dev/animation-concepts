import { Colors } from "../scene/the-aviator";

const BladeSuffix = "_blade";
const CabinSuffix = "_cabin";
const EngineSuffix = "_engine";
const PropellerSuffix = "_propeller";
const TailSuffix = "_tail";
const WingSuffix = "_wing";

const PilotBodySuffix = "_pilot_body";
const PilotFaceSuffix = "_pilot_face";
const PilotGogglesSuffix = "_pilot_goggles";
const PilotHairBaseSuffix = "_pilot_hair_base";
const PilotHairStrandSuffix = "_pilot_hair_strand";

/**
 * @param {string} groupName
 * @param {DOMPoint} startingPoint
 * @returns {void}
 */
const createAirplane = (groupName, startingPoint = new DOMPoint()) => {
  // Create plane group
	W.group({n: groupName, x: startingPoint.x, y: startingPoint.y, z: startingPoint.z});

  // cabin
  const cabinHeight = 0.8;
  const cabinWidth = 1.25;
  W.cube({n: groupName + CabinSuffix, g: groupName, b: Colors.red, w: cabinWidth, h: cabinHeight});

  // engine
  const engineWidth = 0.25;
  W.cube({n: groupName + EngineSuffix, g: groupName, b: Colors.white, w: engineWidth, h: cabinHeight, x: cabinWidth});

  // tail
  const tailDepth = 0.2;
  W.cube({n: groupName + TailSuffix, g: groupName, b: Colors.red, w: tailDepth / 2, h: 0.3, d: tailDepth, x: -tailDepth, y: 0.75, z: tailDepth * 2.5, ry: 90});

  // wing
  W.cube({n: groupName + WingSuffix, g: groupName, b: Colors.red, w: 0.5, h: 0.1, d: 2.5, x: cabinWidth - 0.7, y: 0.25, z: -0.75});

  // propeller
  const propellerDepth = 0.25;
  const propellerHeight = 0.25;
  const propellerWidth = 0.15;
  W.cube({n: groupName + PropellerSuffix, g: groupName, b: Colors.brown, w: propellerWidth, h: propellerHeight, d: propellerDepth, x: cabinWidth + engineWidth, y: cabinHeight / 3, z: propellerDepth * 1.5});

  // blades
  const bladeDepth = 0.5;
  W.cube({n: groupName + BladeSuffix + "0", g: groupName, b: Colors.brownDark, w: 0.1, h: propellerHeight, d: bladeDepth, x: cabinWidth + engineWidth + propellerWidth, y: cabinHeight / 2, z: bladeDepth, rx: 180});
  W.cube({n: groupName + BladeSuffix + "1", g: groupName, b: Colors.brownDark, w: 0.1, h: propellerHeight, d: bladeDepth, x: cabinWidth + engineWidth + propellerWidth, y: cabinHeight / 2, z: bladeDepth});

  createPilot(groupName);
};

const createPilot = (groupName) => {
  const cabinHeight = 0.8;
  const cabinWidth = 1.25;

  // Body of the pilot
  const pilotBodyHeight = 0.1;
  const pilotBodyXPosition = cabinWidth / 4;
  W.cube({n: groupName + PilotBodySuffix, g: groupName, b: Colors.brown, w: cabinWidth / 4, h: pilotBodyHeight, d: 0.5, x: pilotBodyXPosition, y: cabinHeight, z: 0.25});

  // Face of the pilot
  const pilotFaceDepth = 0.25;
  const pilotFaceHeight = pilotBodyHeight * 2;
  const pilotFaceWidth = cabinWidth / 6;
  const pilotFaceZPosition = 0.35;
  W.cube({n: groupName + PilotFaceSuffix, g: groupName, b: Colors.pink, w: pilotFaceWidth, h: pilotFaceHeight, d: pilotFaceDepth, x: pilotBodyXPosition, y: cabinHeight + pilotBodyHeight, z: pilotFaceZPosition});

  // Glasses
  const pilotGogglesDepth = pilotFaceDepth / 2;
  const pilotGogglesWidth = cabinWidth / 10;
  W.cube({n: groupName + PilotGogglesSuffix + "L", g: groupName, b: Colors.brown, w: pilotGogglesWidth, h: pilotFaceHeight / 3, d: pilotGogglesDepth, x: pilotBodyXPosition + pilotFaceDepth - pilotGogglesWidth + 0.01, y: cabinHeight + pilotBodyHeight + (pilotFaceHeight / 2), z: 0.5});
  W.cube({n: groupName + PilotGogglesSuffix + "R", g: groupName, b: Colors.brown, w: pilotGogglesWidth, h: pilotFaceHeight / 3, d: pilotGogglesDepth, x: pilotBodyXPosition + pilotFaceDepth - pilotGogglesWidth + 0.01, y: cabinHeight + pilotBodyHeight + (pilotFaceHeight / 2), z: 0.35});

  // Base of hair
  W.cube({n: groupName + PilotHairBaseSuffix, g: groupName, b: Colors.brown, w: pilotGogglesWidth, h: pilotFaceHeight / 2, d: pilotFaceDepth + 0.025, x: pilotBodyXPosition - 0.05, y: cabinHeight + pilotBodyHeight + (pilotFaceHeight / 2), z: 0.345});

  // create the hair strands at the top of the head 
	// and position them on a 3 x 4 grid
  const pilotHairStrangDepth = pilotFaceDepth / 3;
  const pilotHairStrandWidth = pilotFaceWidth / 4;
	for (var i=0; i<12; i++) {
		var hair = {n: groupName + PilotHairStrandSuffix + i, g: groupName, b: Colors.brown, w: pilotHairStrandWidth, h: 0.05, d: pilotHairStrangDepth};
		var column = i % 3;
		var row = Math.floor(i/3);
    hair.x = pilotBodyXPosition + row * pilotHairStrandWidth;
    hair.y = cabinHeight + pilotBodyHeight + pilotFaceHeight;
    hair.z = pilotFaceZPosition + column * pilotHairStrangDepth;
    W.cube(hair);
	}
};

export { BladeSuffix, createAirplane };
