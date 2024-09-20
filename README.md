# Animation Concepts

Hello there! This repo was meant to see how viable using a 3D WebGL framework would be for the [JS 13KB Games coding competition](https://js13kgames.com/) by attempting to recreate some scenes. This will help me judge file sizes and overall complexity.

This soon to be collection of scenes is made with xem's micro WebGL2 framework aptly named [W](https://xem.github.io/W/). It has been selected because of the following:
- Its small file size of 5.8kb (2.0kb zipped)
- Simple coordinate system with the ability for rotations for easy animation
- Controllable camera and lighting out of the box
- Ability to apply coloring, texturing, transparency to models
- The framework's creator has provided a [OBJ to WebGL buffer converter](https://xem.github.io/W/obj2js/) should the need arise for more complicated models

# Scenes

For each scene, I will attempt to document creative liberties that were taken as a result of limitations (if applicable), any thoughts/opinions, and some ex-post evaluation. Scenes are in the order in which they were created.

## The Aviator

This was one of the first websites powered by WebGL that I encountered that had me in awe. It piqued my interest and was one of the reasons I am trying my hand at some basic animation and 3D work. [Check it out here!](https://tympanus.net/Tutorials/TheAviator/index.html)

This scene was created by translating the code meant for the Three.js framework found in this guide: [The Making of “The Aviator”: Animating a Basic 3D Scene with Three.js](https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/)

### Remarks

The tutorial makes use of manipulating the vertices of the cylinder representing the sea to emulate waves. I am not entirely sure how to attempt this using W, so the cylinder was left unchanged and instead I use a subtle sine wave function to bob the cylinder up and down. Because of this same limitation, the airplane's body remains rectangular as well.

I am using floats and introducing division in my coordinates, I think it will help if I pan the camera further back and just use an integer scale. This should help with performance and reduce complexity. I will take this into consideration for later scenes.
