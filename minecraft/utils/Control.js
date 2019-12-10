import {PointerLockControls} from '../jsm/controls/PointerLockControls.js'
import * as THREE from '../base/three.module.js';

export default class Control {
    constructor(camera, scene, objects) {
        this.raycaster;
        this.moveForward = false;
        this.moveBackward = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.preRuning = undefined;
        this.isRunning = false;
        this.canJump = false;
        this.objects = [];
        this.prevTime = performance.now();
        this.velocity = new THREE.Vector3();
        this.direction = new THREE.Vector3();
        this.worldOption = {
            g: 9.0
        };
        this.personOption = {
            height: 1.5,
            jumpHeight: 1.4,
            speedWalk: 8,
            speedRun: 16
        };

        return this.init(camera, scene, objects);
    }

    init(camera, scene, objects) {
        this.objects = objects;
        this.controls = new PointerLockControls(camera, document.body);

        let blocker = document.getElementById('blocker');
        let instructions = document.getElementById('instructions');

        instructions.addEventListener('click', () => {
            this.controls.lock();
        }, false);

        this.controls.addEventListener('lock', function () {
            instructions.style.display = 'none';
            blocker.style.display = 'none';
        });

        this.controls.addEventListener('unlock', function () {
            blocker.style.display = 'block';
            instructions.style.display = '';
        });

        scene.add(this.controls.getObject());

        let onKeyDown = (event) => {
            switch (event.keyCode) {
                case 38: // up
                case 87: // w
                    if(this.moveForward){
                        break;
                    }
                    if (!this.preRuning) {
                        this.preRuning = performance.now();
                    } else {
                        console.log(performance.now() , this.preRuning,this.isRunning  );
                        this.isRunning = performance.now() - this.preRuning <= 500;
                        this.preRuning = performance.now();
                    }
                    this.moveForward = true;
                    break;

                case 37: // left
                case 65: // a
                    if(this.moveLeft){
                        break;
                    }
                    this.moveLeft = true;
                    break;

                case 40: // down
                case 83: // s
                    if(this.moveBackward){
                        break;
                    }
                    this.moveBackward = true;
                    break;

                case 39: // right
                case 68: // d
                    if(this.moveRight){
                        break;
                    }
                    this.moveRight = true;
                    break;

                case 32: // space
                    //7.74是60开平方
                    if (this.canJump === true) this.velocity.y += Math.sqrt(2 * this.worldOption.g * 7.74 * this.personOption.jumpHeight);
                    this.canJump = false;
                    break;

            }

        };
        let onKeyUp = (event) => {
            switch (event.keyCode) {
                case 38: // up
                case 87: // w
                    this.isRunning = false;
                    this.moveForward = false;
                    break;

                case 37: // left
                case 65: // a
                    this.moveLeft = false;
                    break;

                case 40: // down
                case 83: // s
                    this.moveBackward = false;
                    break;

                case 39: // right
                case 68: // d
                    this.moveRight = false;
                    break;

            }

        };
        document.addEventListener('keydown', onKeyDown, false);
        document.addEventListener('keyup', onKeyUp, false);

        this.raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, -1, 0), 0, 10);

        return this;
    }


    update() {
        if (!this.controls.isLocked) {
            this.moveForward = false;
            this.moveBackward = false;
            this.moveLeft = false;
            this.moveRight = false;
        }

        this.raycaster.ray.origin.copy(this.controls.getObject().position);
        this.raycaster.ray.origin.y -= 10;
        let intersections = this.raycaster.intersectObjects(this.objects);
        let onObject = intersections.length > 0;

        let time = performance.now();
        let delta = (time - this.prevTime) / 1000;

        this.velocity.x = this.velocity.x / 2.0 * delta;
        this.velocity.z = this.velocity.z / 2.0 * delta;

        this.velocity.y -= this.worldOption.g * Math.sqrt(delta);

        this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
        this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
        this.direction.normalize(); // this ensures consistent movements in all directions

        if (this.moveForward || this.moveBackward) this.velocity.z -= this.direction.z *( this.isRunning ? this.personOption.speedRun :this.personOption.speedWalk);
        if (this.moveLeft || this.moveRight) this.velocity.x -= this.direction.x *( this.isRunning ? this.personOption.speedRun :this.personOption.speedWalk);

        if (onObject === true) {
            this.velocity.y = Math.max(0, this.velocity.y);
            this.canJump = true;
        }

        this.controls.moveRight(-this.velocity.x * delta);
        this.controls.moveForward(-this.velocity.z * delta);

        this.controls.getObject().position.y += (this.velocity.y * delta); // new behavior

        if (this.controls.getObject().position.y < this.personOption.height) {
            this.velocity.y = 0;
            this.controls.getObject().position.y = this.personOption.height;
            this.canJump = true;
        }
        this.prevTime = time;
    }

}