var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xDFDCDA );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.up.set(0, 0, 1);

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var orbitControls = new THREE.OrbitControls(camera, renderer.domElement);

var light = new THREE.AmbientLight( 0x404040 );
scene.add(light);

var lights = [];
lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );
lights[ 3 ] = new THREE.PointLight( 0xff0000, 1, 100 );

lights[ 0 ].position.set( 0, 200, 0 );
lights[ 1 ].position.set( 100, 200, 100 );
lights[ 2 ].position.set( - 100, - 200, - 100 );
lights[ 3 ].position.set( 50, 50, 50 );

scene.add( lights[ 0 ] );
scene.add( lights[ 1 ] );
scene.add( lights[ 2 ] );
scene.add( lights[ 3 ] );

var geometry = new THREE.ParametricBufferGeometry((u, v, dest) => {
  const x = u*v,
        y = u,
        z = v^2;
        dest.set(x, y, z);
}, 32, 32);
var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 , side: THREE.DoubleSide} );
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

camera.position.z = 5;

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}
animate();
