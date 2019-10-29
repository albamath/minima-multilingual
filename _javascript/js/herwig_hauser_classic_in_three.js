/*
This code started the getting started code sent to me by Yuri Sulyma.
I started writing it in the setting of the javascript working group during the Illustrating Mathematics program in ICERM.
My goal is to eventually have here the whole gallery of Herwig Hauser gallery rendered and explorable.
*/
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

var geometryKolibri = new THREE.ParametricBufferGeometry((u, v, dest) => {
  const s = 2*u-1,
        t = 2*v-1;
  const x = s*(s*s-t*t),
        y = t,
        z = s*s-t*t;
        dest.set(x, y, z);
}, 32, 32);
var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 , side: THREE.DoubleSide} );
var meshKolibri = new THREE.Mesh( geometryKolibri, material );
//scene.add( meshKolibri );

var geometryNepali = new THREE.ParametricBufferGeometry((s, t, dest) => {
  const u = 2*Math.PI*s,
        v =   Math.PI*(0.000001+t**2);
  const x = Math.sin(v)*Math.cos(u),
        y = Math.sin(v)*Math.sin(u),
        z = Math.cbrt(Math.sin(v)**2*Math.sin(2*u)/2-1+Math.cos(v)**3);
        dest.set(x, y, z);
}, 48, 96);
var materialNepali = new THREE.MeshStandardMaterial( { color: 0x00ff00, side:THREE.DoubleSide } );
var meshNepali = new THREE.Mesh( geometryNepali, materialNepali );
scene.add( meshNepali );

camera.position.z = 5;

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}
animate();
