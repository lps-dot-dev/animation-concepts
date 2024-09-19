import { initMenuFunctionality } from "./lib/menu";
import { resizeElement } from "./lib/resize";
import { addEventListeners, createScene, loopScene } from "./scene/the-aviator";

const canvas = document.getElementById("c");
var intervalId = 0;

onload = () => {
  initMenuFunctionality();
  resizeElement(canvas);

  W.reset(canvas);
  addEventListeners();
  createScene();
  intervalId = loopScene();
};

/** @todo Resizing leads to twitchy animation */
// onresize = () => {
//   clearInterval(intervalId);
//   resizeElement(canvas);

//   W.reset(canvas);
//   createScene();
//   intervalId = loopScene();
// };
