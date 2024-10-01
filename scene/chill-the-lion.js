import { createLion } from "../models/lion";
import { defineCube } from "../models/cube";

const SceneName = "Chill the Lion";

function createScene() {
  // Define models
  defineCube();

  // Set camera position and angle
  W.camera({z: 10});

  // Set light position
  W.light({x: -2, y: -1, z:-1});

  // Populate models
  createLion();
}

export { createScene, SceneName };
