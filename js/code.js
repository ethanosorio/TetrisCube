//set the scene
const scene = new THREE.Scene();
//set the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 3.5, 100);
camera.position.set(7.5, 7.5, 7.5);
camera.lookAt(0, 0, 0);
//set the renderer
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//set the light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(10, 30, 0);
scene.add(dirLight);



//create the polycube objects
var objects = [];
//uses function from polycubes.js to create each shape
generateShapes();

//set up the orbitcontrols to move the camera and the dragcontrols for the blocks
const camControls = new THREE.OrbitControls(camera, renderer.domElement);
const dragControls = new THREE.DragControls(objects, camera, renderer.domElement);
//when a block is being dragged, the camera does not move, and the block is highlighted
dragControls.addEventListener('dragstart', function(event){camControls.enabled = false; event.object.material.emissive.set(0x101010);});
dragControls.addEventListener('dragend', function(event){camControls.enabled = true; event.object.material.emissive.set(0x000000);});

//animate the scene
function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();