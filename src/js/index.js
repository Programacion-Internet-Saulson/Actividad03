'use strict';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,
    window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("#222222");
document.body.appendChild(renderer.domElement);
camera.position.z = 5;

// Resize canvas on resize window
window.addEventListener( 'resize', () => {
    let width = window.innerWidth
    let height = window.innerHeight
    renderer.setSize( width, height )
    camera.aspect = width / height
    camera.updateProjectionMatrix()
})

// Yellow Sphere
var geometry = new THREE.SphereGeometry(1, 15, 15);
// var material = new THREE.MeshBasicMaterial({ color: 0xff0051, });
var material = new THREE.MeshPhysicalMaterial({ color: 0xfed700, });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
renderer.render(scene, camera);

// Wireframe Cube
var geometry = new THREE.BoxGeometry( 3, 3, 3)
var material = new THREE.MeshBasicMaterial({
 color: "#dadada", 
 wireframe: true, 
 transparent: true,
});
var wireframeCube = new THREE.Mesh(geometry, material);
scene.add(wireframeCube);

// Ambient Light
var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Point Light
var pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(25, 50, 25);
scene.add(pointLight);

// Animation Rotation Cubes
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.04;
    cube.rotation.y += 0.04;
    wireframeCube.rotation.x -= 0.01;
    wireframeCube.rotation.y -= 0.01;

    renderer.render(scene, camera);
}

animate();
