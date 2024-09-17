import { createScene, loopScene } from "./scene/the-aviator";

onload = () => {
  // Setup 3D engine
  W.reset(c);

  createScene();
  loopScene();
};
