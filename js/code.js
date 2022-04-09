
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0);

const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 3.5, 100 );
camera.position.set(4, 4, 4);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(10, 20, 0);
scene.add(dirLight);



var objects = [];

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
const object = new THREE.Mesh( geometry, material );
scene.add( object );

objects.push(object);

var controls = new THREE.DragControls( objects, camera, renderer.domElement );
// add event listener to highlight dragged objects
controls.addEventListener( 'dragstart', function ( event ) {
	event.object.material.emissive.set( 0x303030 );
} );
controls.addEventListener( 'dragend', function ( event ) {
	event.object.material.emissive.set( 0x000000 );
} );

function animate() {
    requestAnimationFrame( animate );

    object.rotation.x += 0.01;
    object.rotation.y += 0.01;
    
    renderer.render( scene, camera );
};

animate();