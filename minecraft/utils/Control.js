import {PointerLockControls} from '../jsm/controls/PointerLockControls.js'
import * as THREE from '../base/three.module.js';

export default class Control {
    constructor(camera, scene, objects) {
        this.checkRay = {//0为负，1为正
            lowX0Z0: undefined,
            lowX0Z1: undefined,
            lowX1Z0: undefined,
            lowX1Z1: undefined,
            highX0Z0: undefined,
            highX0Z1: undefined,
            highX1Z0: undefined,
            highX1Z1: undefined,

            Y0: [],
            Y1: [],
        };
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
            height: 1.8,//人物总高度
            sightHeight: 1.5,//眼部高度
            jumpHeight: 1.4,
            speedWalk: 6,
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
                    if (this.moveForward) {
                        break;
                    }
                    if (!this.preRuning) {
                        this.preRuning = performance.now();
                    } else {
                        this.isRunning = performance.now() - this.preRuning <= 200;
                        this.preRuning = performance.now();
                    }
                    this.moveForward = true;
                    break;

                case 37: // left
                case 65: // a
                    if (this.moveLeft) {
                        break;
                    }
                    this.moveLeft = true;
                    break;

                case 40: // down
                case 83: // s
                    if (this.moveBackward) {
                        break;
                    }
                    this.moveBackward = true;
                    break;

                case 39: // right
                case 68: // d
                    if (this.moveRight) {
                        break;
                    }
                    this.moveRight = true;
                    break;

                case 32: // space
                    //7.74是60开平方
                    if (this.canJump) this.velocity.y += Math.sqrt(2 * this.worldOption.g * 7.74 * this.personOption.jumpHeight);
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

        for (let i = 0; i < 4; i++) {
            this.checkRay.Y0.push(new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, -1, 0), 0, 5));
        }
        for (let i = 0; i < 4; i++) {
            this.checkRay.Y1.push(new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, 1, 0), 0, 5));
        }
        return this;
    }


    update() {
        if (!this.controls.isLocked) {
            this.moveForward = false;
            this.moveBackward = false;
            this.moveLeft = false;
            this.moveRight = false;
        }
        let time = performance.now();
        let delta = (time - this.prevTime) / 1000;


        this.velocity.x = this.velocity.x / 2.0 * delta;
        this.velocity.z = this.velocity.z / 2.0 * delta;


        this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
        this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
        this.direction.normalize(); // this ensures consistent movements in all directions

        if (this.moveForward || this.moveBackward) this.velocity.z -= this.direction.z * (this.isRunning ? this.personOption.speedRun : this.personOption.speedWalk);
        if (this.moveLeft || this.moveRight) this.velocity.x -= this.direction.x * (this.isRunning ? this.personOption.speedRun : this.personOption.speedWalk);
        this.controls.moveRight(-this.velocity.x * delta);
        this.controls.moveForward(-this.velocity.z * delta);
        {//垂直方向
            let bottomFlatY = undefined;
            //坠落四角检测
            {
                for (let i = 0; i < 4; i++) {
                    this.checkRay.Y0[i].ray.origin.copy(this.controls.getObject().position);//设置射线原点在摄像机位置，即人物眼睛位置
                }
                this.checkRay.Y0[0].ray.origin.x += 0.4;
                this.checkRay.Y0[0].ray.origin.z -= 0.4;
                this.checkRay.Y0[1].ray.origin.x += 0.4;
                this.checkRay.Y0[1].ray.origin.z += 0.4;
                this.checkRay.Y0[2].ray.origin.x -= 0.4;
                this.checkRay.Y0[2].ray.origin.z += 0.4;
                this.checkRay.Y0[3].ray.origin.x -= 0.4;
                this.checkRay.Y0[3].ray.origin.z -= 0.4;
                for (let i = 0; i < 4; i++) {
                    let intersections = this.checkRay.Y0[i].intersectObjects(this.objects);
                    if (intersections.length > 0) {
                        let bottomFlatYTmp = intersections[0].point.y;
                        bottomFlatY = Math.max(bottomFlatY === undefined ? bottomFlatYTmp : bottomFlatY, bottomFlatYTmp);
                    }
                }
            }
            //头顶四角检测
            let topFlatY = undefined;
            {
                for (let i = 0; i < 4; i++) {
                    this.checkRay.Y1[i].ray.origin.copy(this.controls.getObject().position);//设置射线原点在摄像机位置，即人物眼睛位置
                }
                this.checkRay.Y1[0].ray.origin.x += 0.4;
                this.checkRay.Y1[0].ray.origin.z -= 0.4;
                this.checkRay.Y1[1].ray.origin.x += 0.4;
                this.checkRay.Y1[1].ray.origin.z += 0.4;
                this.checkRay.Y1[2].ray.origin.x -= 0.4;
                this.checkRay.Y1[2].ray.origin.z += 0.4;
                this.checkRay.Y1[3].ray.origin.x -= 0.4;
                this.checkRay.Y1[3].ray.origin.z -= 0.4;
                for (let i = 0; i < 4; i++) {
                    let intersections = this.checkRay.Y1[i].intersectObjects(this.objects);
                    if (intersections.length > 0) {
                        let topFlatYTmp = intersections[0].point.y;
                        topFlatY = Math.min(topFlatY === undefined ? topFlatYTmp : topFlatY, topFlatYTmp);
                    }
                }
            }


            let nextY = this.controls.getObject().position.y + (this.velocity.y * delta);
            if (topFlatY !== undefined) {
                if (topFlatY - (this.personOption.height - this.personOption.sightHeight)< nextY) {
                    nextY=topFlatY - (this.personOption.height - this.personOption.sightHeight)
                    this.velocity.y = 0;
                }
            }
            if (bottomFlatY !== undefined) {
                this.controls.getObject().position.y = Math.max(bottomFlatY + this.personOption.sightHeight, nextY);
                if (nextY > bottomFlatY + this.personOption.sightHeight) {
                    this.velocity.y -= this.worldOption.g * Math.sqrt(delta);
                } else {
                    this.velocity.y = 0;
                    this.canJump = true;
                }
            } else {
                this.controls.getObject().position.y = nextY; // new behavior
                this.velocity.y -= this.worldOption.g * Math.sqrt(delta);
            }
        }
        this.prevTime = time;
    }

}