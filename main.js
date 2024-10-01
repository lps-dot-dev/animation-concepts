import { initMenuFunctionality } from "./lib/menu";
import { resizeElement } from "./lib/resize";
import { createScene as createLionScene, SceneName as LionSceneName } from "./scene/chill-the-lion";
import { addEventListeners, createScene as createAviatorScene, loopScene, SceneName as AviatorSceneName } from "./scene/the-aviator";

const canvas = document.getElementById("c");
var intervalId = 0;

function setScene(sceneName) {
  clearInterval(intervalId);
  W.reset(canvas);

  switch (sceneName) {
    case AviatorSceneName:
      addEventListeners();
      createAviatorScene();
      intervalId = loopScene();
      break;
    case LionSceneName:
      createLionScene();
      break;
  }
}

onload = () => {
  initMenuFunctionality(setScene);
  resizeElement(canvas);

  W.reset(canvas);
  createLionScene();
};

/** @todo Resizing leads to twitchy animation */
// onresize = () => {
//   clearInterval(intervalId);
//   resizeElement(canvas);

//   W.reset(canvas);
//   createScene();
//   intervalId = loopScene();
// };
