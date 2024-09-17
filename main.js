import { initMenuFunctionality } from "./lib/menu";
import { resizeElement } from "./lib/resize";
import { createScene, loopScene } from "./scene/the-aviator";

const canvas = document.getElementById("c");
const theAviatorSetup = () => {
  W.reset(canvas);
  createScene();
  loopScene();
};

onload = () => {
  initMenuFunctionality();
  resizeElement(canvas);
  theAviatorSetup();
};
