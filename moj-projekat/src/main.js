// import './style.css'
import '../src/scss/style.scss';

import { setupAllHoverAnimations } from './JS/HoverSVG/initAllAnimations'; 
import { initBarba } from '../src/JS/barba';
import { MenuAnimations } from './JS/menu';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; 
import Lenis from "@studio-freight/lenis"; 
import * as THREE from 'three';
import { animationScrool } from './JS/galleryScrool';
import emailjs from 'emailjs-com';
import  {buttonsActive} from  './JS/Work-Page/buttonsActive';

// Registrujte ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

buttonsActive()




// class Smoke {

//     constructor(options) {
//         const defaults = {
//             width: window.innerWidth,
//             height: window.innerHeight
//         };

//         Object.assign(this, options, defaults);
//         this.onResize = this.onResize.bind(this);

//         this.addEventListeners();
//         this.init();
//     }

//     init() {
//         const container = document.getElementById('smoke-container');
//         const { width, height } = this;

//         this.clock = new THREE.Clock();
//         this.renderer = new THREE.WebGLRenderer({ alpha: true });

//         // Prvo setujemo canvas da se uklopi sa roditeljskim elementom
//         this.renderer.setSize(container.offsetWidth, container.offsetHeight);

//         this.scene = new THREE.Scene();

// 		this.scene.background = new THREE.Color(0x000000);

//         const meshGeometry = new THREE.BoxGeometry(200, 200, 200);
//         const meshMaterial = new THREE.MeshLambertMaterial({
//             color: 0xaa6666,
//             wireframe: false
//         });
//         this.mesh = new THREE.Mesh(meshGeometry, meshMaterial);

//         this.cubeSineDriver = 0;

//         this.addCamera();
//         this.addLights();
//         this.addParticles();
//         // this.addBackground();

//         container.appendChild(this.renderer.domElement);
//     }

//     evolveSmoke(delta) {
//         const { smokeParticles } = this;

//         let smokeParticlesLength = smokeParticles.length;

//         while (smokeParticlesLength--) {
//             smokeParticles[smokeParticlesLength].rotation.z += delta * 0.2;
//         }
//     }

//     addLights() {
//         const { scene } = this;
//         const light = new THREE.DirectionalLight(0xffffff, 0.75);
//         light.position.set(-1, 0, 1);
//         scene.add(light);
//     }

//     addCamera() {
//         const { scene } = this;
//         const camera = this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 10000);
//         camera.position.z = 1000;
//         scene.add(camera);
//     }

//     addParticles() {
//         const { scene } = this;
//         const textureLoader = new THREE.TextureLoader();
//         const smokeParticles = this.smokeParticles = [];

//         textureLoader.load('https://rawgit.com/marcobiedermann/playground/master/three.js/smoke-particles/dist/assets/images/clouds.png', texture => {
//             const smokeMaterial = new THREE.MeshLambertMaterial({
//                 color: 0xffffff,
// 				// color: 0x777777, 
//                 map: texture,
//                 transparent: true,
// 				//  opacity: 0.4
//             });
//             smokeMaterial.map.minFilter = THREE.LinearFilter;
//             const smokeGeometry = new THREE.PlaneGeometry(300, 300);

//             const smokeMeshes = [];
//             let limit = 150;

//             while (limit--) {
//                 smokeMeshes[limit] = new THREE.Mesh(smokeGeometry, smokeMaterial);
//                 smokeMeshes[limit].position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
//                 smokeMeshes[limit].rotation.z = Math.random() * 360;
//                 smokeParticles.push(smokeMeshes[limit]);
//                 scene.add(smokeMeshes[limit]);
//             }
//         });
//     }

  



//     render() {
//         const { mesh } = this;
//         let { cubeSineDriver } = this;

//         cubeSineDriver += 0.01;

//         mesh.rotation.x += 0.005;
//         mesh.rotation.y += 0.01;
//         mesh.position.z = 100 + Math.sin(cubeSineDriver) * 500;

//         this.renderer.render(this.scene, this.camera);
//     }

//     update() {
//         this.evolveSmoke(this.clock.getDelta());
//         this.render();

//         requestAnimationFrame(this.update.bind(this));
//     }

//     onResize() {
//         // Ove dimenzije preuzimamo iz roditeljskog elementa
//         const container = document.getElementById("smoke-container");
//         this.renderer.setSize(container.offsetWidth, container.offsetHeight); // Set canvas size to match container size

//         const { camera } = this;
//         const windowWidth = container.offsetWidth;
//         const windowHeight = container.offsetHeight;

//         camera.aspect = windowWidth / windowHeight;
//         camera.updateProjectionMatrix();
//     }

//     addEventListeners() {
//         window.addEventListener('resize', this.onResize);
		
//     }
// }

// // Inicijalizacija
// const smoke = new Smoke();
// smoke.update();








let lenis;

// Function to initialize Lenis for smooth scrolling
const initSmoothScrolling = () => {
	// Instantiate the Lenis object with specified properties
	lenis = new Lenis({
		lerp: 0.1, // Lower values create a smoother scroll effect
		smoothWheel: true // Enables smooth scrolling for mouse wheel events
	});

	// Update ScrollTrigger each time the user scrolls
	lenis.on('scroll', () => ScrollTrigger.update());

	// Define a function to run at each animation frame
	const scrollFn = (time) => {
		lenis.raf(time); // Run Lenis' requestAnimationFrame method
		requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
	};
	// Start the animation frame loop
	requestAnimationFrame(scrollFn);
};

MenuAnimations()
initSmoothScrolling()
// setupAllHoverAnimations()
document.addEventListener('DOMContentLoaded', function() {
	// 1. Skrivaće ceo sadržaj stranice dok se sve ne učita
	
	
	// 2. Dodajemo čekanje da se CSS učita (tako što čekamo da se svi resursi učitaju)
	window.onload = function() {
	  
	  initBarba(); // Ovde ide tvoj Barba kod, sada možeš da ga pozoveš
	};
  });
  
 
  
  





