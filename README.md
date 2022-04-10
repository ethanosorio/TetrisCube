# TetrisCube
This is my HackKU2022 project.
I used this project as an introduction to [THREE JS](https://threejs.org)

### How to Run
The game can be run [here](https://ethanosorio.github.io/TetrisCube) or
the repository can be downloaded and the index.html file can be opened in a brower to run the game.

### Game
I recreated a physical puzzle that I had when I was younger: The [Tetris Cube](https://g.co/kgs/iaGDdg).
The puzzle is played with only the mouse. You can drag the viewpoint around, and also zoom in.
The pieces can be dragged and arranged in 3D space.

### Libraries
[THREE.js](https://github.com/mrdoob/three.js) from [Mr Doob](https://mrdoob.com).
I tried to implement physics with [Ammo.js](https://github.com/kripken/ammo.js) but opted not to, given the time restraint.

### Program
Using THREE.js I created a blank scene with a camera, lights, and a renderer.
After setting the scene I created the polycube shapes by merging box geometries and translating them.
I colored each polycube uniquely, and placed them scattered on the scene.
Finally I added controls to move the camera and drag the blocks.
