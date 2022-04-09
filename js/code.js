//set the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x909090);
//set the camera
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 3.5, 1000 );
camera.position.set(4, 4, 4);
camera.lookAt(0, 0, 0);
//set the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
//set the light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(10, 30, 0);
scene.add(dirLight);



//create the polycube objects
var objects = [];

//uses function from polycubes.js
generateShapes();


var controls = new THREE.DragControls( objects, camera, renderer.domElement );
// add event listener to highlight dragged objects
controls.addEventListener( 'dragstart', function ( event ) {event.object.material.emissive.set( 0x101010 );});
controls.addEventListener( 'dragend', function ( event ) {event.object.material.emissive.set( 0x000000 );});

function animate() {
    requestAnimationFrame(animate);
    //group.rotation.x += 0.01;
    //group.rotation.y += 0.01;
    renderer.render(scene, camera);
};
animate();