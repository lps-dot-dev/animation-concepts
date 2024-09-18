import { Colors } from "../scene/the-aviator";

const BladeSuffix = "_blade";
const CabinSuffix = "_cabin";
const EngineSuffix = "_engine";
const PropellerSuffix = "_propeller";
const TailSuffix = "_tail";
const WingSuffix = "_wing";

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
  W.cube({n: groupName + WingSuffix, g: groupName, b: Colors.red, w: 0.5, h: 0.1, d: 2.5, x: cabinWidth - 0.8, y: 0.25, z: -0.75});

  // propeller
  const propellerDepth = 0.25;
  const propellerHeight = 0.25;
  const propellerWidth = 0.15;
  W.cube({n: groupName + PropellerSuffix, g: groupName, b: Colors.brown, w: propellerWidth, h: propellerHeight, d: propellerDepth, x: cabinWidth + engineWidth, y: cabinHeight / 3, z: propellerDepth * 1.5});

  // blades
  const bladeDepth = 0.5;
  W.cube({n: groupName + BladeSuffix + "0", g: groupName, b: Colors.brownDark, w: 0.1, h: propellerHeight, d: bladeDepth, x: cabinWidth + engineWidth + propellerWidth, y: cabinHeight / 2, z: bladeDepth, rx: 180});
  W.cube({n: groupName + BladeSuffix + "1", g: groupName, b: Colors.brownDark, w: 0.1, h: propellerHeight, d: bladeDepth, x: cabinWidth + engineWidth + propellerWidth, y: cabinHeight / 2, z: bladeDepth});

};

export { BladeSuffix, createAirplane };
