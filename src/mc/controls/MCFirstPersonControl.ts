import {PointerLockControls} from './expControl/PointerLockControls'
import CubeFactory from "../objects/cube/CubeFactory";
import * as THREE from 'three';
import DefaultCube from '../objects/cube/DefaultCube'
import GeometryType from "../objects/cube/GeometryType";
import {Vector3} from "three";

interface PreviewCube extends THREE.Mesh {
    geometryMap?: Record<string, THREE.BufferGeometry>
}

export default class MCFirstPersonControl {
    camera: THREE.Camera;
    private previewCube: PreviewCube | undefined;
    private readonly domElement: HTMLCanvasElement;
    private readonly objects: THREE.Mesh[];
    objectsImpenetrable: THREE.Mesh[];
    scene: THREE.Scene;
    private currentCubeTypeIndex: number;
    private sightRay: THREE.Raycaster;
    private checkRay: { Z0: any[]; Z1: any[]; Y0: any[]; X0: any[]; Y1: any[]; X1: any[] };
    private moveForward: boolean;
    private moveBackward: boolean;
    private moveLeft: boolean;
    private moveRight: boolean;
    private moveUp: boolean;
    private moveDown: boolean;
    private preRunning: number | undefined;
    private isRunning: boolean;
    private canJump: boolean;
    private switchFly: number | undefined;
    private readonly canFly: boolean;
    private switchFlyKeyUpped: boolean;
    private isFlying: boolean;
    private velocity: Vector3;
    private direction: Vector3;
    private worldOption: { g: number };
    private personOption: { jumpHeight: number; thickness: number; accelerateRateStart: number; sightHeight: number; speedWalk: number; accelerateRateStop: number; speedRun: number; height: number };
    private controls: PointerLockControls;
    private previewCubeType: string;
    private previewCubeRotation: { x?: number, y?: number, z?: number };


    constructor(camera: THREE.Camera, domElement: HTMLCanvasElement, objects: THREE.Mesh[], scene: THREE.Scene) {
        // this.controls;
        // this.removeBlockTimer;//移除方块计时
        this.previewCube = undefined;//预览方块
        this.camera = camera;
        this.domElement = domElement;
        this.objects = objects;
        this.objectsImpenetrable = [];
        this.scene = scene;
        this.currentCubeTypeIndex = 0;

        this.checkRay = {//0为负，1为正
            X0: [],
            X1: [],
            Z0: [],
            Z1: [],
            Y0: [],
            Y1: [],
        };
        this.sightRay = new THREE.Raycaster();
        this.moveForward = false;
        this.moveBackward = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;
        this.moveDown = false;
        this.preRunning = undefined;
        this.isRunning = false;
        this.canJump = false;
        this.switchFly = undefined;
        this.canFly = true;
        this.switchFlyKeyUpped = false;
        this.isFlying = false;
        // this.prevTime = performance.now();
        this.velocity = new THREE.Vector3();
        this.direction = new THREE.Vector3();
        this.worldOption = {
            g: 7.5
        };
        this.personOption = {
            height: 1.8,//人物总高度。现有配置不能让人物高于2
            sightHeight: 1.5,//眼部高度。现有配置不能让人物高于2
            jumpHeight: 1.33,    //最大跳跃高度(并非砖块高度)
            speedWalk: 5.7,     //最大行走速度
            speedRun: 10,       //最大奔跑速度，连按w两次
            accelerateRateStart: 0.3,//加速时加速比率。正数向前；负数反向；0不会加速；绝对值大于等于1可立即到最大速度
            accelerateRateStop: 0.8,//停止时减速比率。范围[0-1]。0时立即停止，1时不会减速
            thickness: 0.6,//人物的边长
        };
        //初始化threejs预设的control
        this.initControl()
        //增加鼠标点击开始控制视角遮罩层
        this.initMaskerForSightControl();
        //添加准星
        this.initAim();
        //加按键事件
        this.initKeyboardFunction();
        //初始化点击功能
        this.initMouseFunction();
        this.selectObjectsImpenetrable()
    }

    update(delta: number | undefined) {
        delta = delta || 0.016;
        if (!this.controls.isLocked) {
            this.moveForward = false;
            this.moveBackward = false;
            this.moveLeft = false;
            this.moveRight = false;
            this.moveUp = false;
            this.moveDown = false;
        }
        this.updateCameraPosition(delta);
        this.checkAndResetPosition()
        this.updatePreviewCube(delta);
    }

    initControl() {
        this.controls = new PointerLockControls(this.camera, this.domElement);
    }

    initMaskerForSightControl() {
        let blocker = document.createElement("div");
        blocker.style.position = "absolute";
        blocker.style.zIndex = "100";
        blocker.style.width = "100%";
        blocker.style.height = "100%";
        blocker.style.top = "0";
        blocker.style.left = "0";
        blocker.id = "blocker";
        blocker.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        document.body.append(blocker);
        blocker.addEventListener('click', () => {
            this.controls.lock();
        }, false);
        this.controls.addEventListener('lock', function () {
            blocker.style.display = 'none';
        });
        this.controls.addEventListener('unlock', function () {
            blocker.style.display = 'block';
        });
    }

    initAim() {
        let setAimStyle = (aimEl: HTMLElement) => {
            aimEl.style.position = "fixed";
            aimEl.style.left = "50%";
            aimEl.style.top = "50%";
            aimEl.style.transform = "translate(-50%,-50%)";
            aimEl.style.zIndex = "1";
            aimEl.style.fontSize = "100%";
            aimEl.style.fontWeight = "bold";
            aimEl.style.textAlign = "center";
            aimEl.style.verticalAlign = "middle";
            aimEl.style.lineHeight = "10px";
            aimEl.style.fontFamily = "\"Times New Roman\",serif";
            aimEl.style.backgroundColor = "#E0E0E0";
        }
        let aimX = document.createElement("div");
        aimX.style.height = "2px";
        aimX.style.width = "20px";
        setAimStyle(aimX);
        document.body.append(aimX);
        let aimY = document.createElement("div");
        aimY.style.height = "20px";
        aimY.style.width = "2px";
        setAimStyle(aimY);
        document.body.append(aimY);
    }

    initKeyboardFunction() {
        let onKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowUp':
                case 'w':
                case 'W':
                    if (this.moveForward) {
                        break;
                    }
                    if (!this.preRunning) {
                        this.preRunning = performance.now();
                    } else {
                        this.isRunning = performance.now() - this.preRunning <= 200;
                        this.preRunning = performance.now();
                    }
                    this.moveForward = true;
                    break;

                case 'ArrowLeft':
                case 'a':
                case 'A':
                    if (this.moveLeft) {
                        break;
                    }
                    this.moveLeft = true;
                    break;

                case 'ArrowDown':
                case 's':
                case 'S':
                    if (this.moveBackward) {
                        break;
                    }
                    this.moveBackward = true;
                    break;

                case 'ArrowRight':
                case 'd':
                case 'D':
                    if (this.moveRight) {
                        break;
                    }
                    this.moveRight = true;
                    break;

                case ' ':
                case 'Spacebar':
                    //7.74是60开平方
                    if (!this.canJump && this.switchFlyKeyUpped) {
                        this.isFlying = this.canFly;
                    }
                    if (this.canJump) this.velocity.y += Math.sqrt(2 * this.worldOption.g * 7.74 * this.personOption.jumpHeight);
                    this.canJump = false;
                    if (this.isFlying) {
                        {//取消飞行
                            if (!this.switchFly) {
                                this.switchFly = performance.now();
                            } else {
                                if (performance.now() - this.switchFly <= 200) {
                                    this.isFlying = !this.switchFlyKeyUpped;
                                }
                            }
                        }
                        if (this.moveUp) {
                            break;
                        }
                        this.moveUp = true;
                        this.switchFlyKeyUpped = false;
                    }
                    this.switchFly = performance.now();
                    break;
                case 'Shift':
                    if (this.moveDown) {
                        break;
                    }
                    this.moveDown = true;
                    break;
            }


        };
        let onKeyUp = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowUp':
                case 'w':
                case 'W':
                    this.isRunning = false;
                    this.moveForward = false;
                    break;

                case 'ArrowLeft':
                case 'a':
                case 'A':
                    this.moveLeft = false;
                    break;

                case 'ArrowDown':
                case 's':
                case 'S':
                    this.moveBackward = false;
                    break;

                case 'ArrowRight':
                case 'd':
                case 'D':
                    this.moveRight = false;
                    break;

                case 'Shift':
                    this.moveDown = false;
                    break;

                case ' ':
                case 'Spacebar':
                    this.moveUp = false;
                    this.switchFlyKeyUpped = true;
                    break;
            }

        };
        document.addEventListener('keydown', onKeyDown, false);
        document.addEventListener('keyup', onKeyUp, false);
    }

    initMouseFunction() {
        let changeCurrentCubeTypeIndex = (isNext: boolean) => {
            if (isNext) {
                this.currentCubeTypeIndex++;
                if (this.currentCubeTypeIndex === Object.keys(DefaultCube).length) {
                    this.currentCubeTypeIndex = 0;
                }
            } else {
                if (this.currentCubeTypeIndex === 0) {
                    this.currentCubeTypeIndex = Object.keys(DefaultCube).length;
                }
                this.currentCubeTypeIndex--;
            }
        };
        //点击功能
        window.addEventListener('mousedown', (event) => {
            //通过鼠标点击的位置与相机矩阵，计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
            this.sightRay.setFromCamera(new THREE.Vector2(0, 0), this.camera);
            // 获取raycaster直线和所有模型相交的数组集合
            let clickedObjects = this.sightRay.intersectObjects(this.objects);
            if (clickedObjects.length > 0) {
                // console.log("点击对象【" + clickedObjects[0].object.name + "】", clickedObjects[0]);
                if (
                    clickedObjects[0]
                    && clickedObjects[0].distance <= 10//只能操作距离小于10个单位的方块
                    && clickedObjects[0].face && clickedObjects[0].face.normal
                    && clickedObjects[0].object && clickedObjects[0].object.position
                ) {
                    if (event.button === 0 && this.controls.isLocked) {//删除方块 左键
                        //TODO 改为长按同一方块时才删除
                        // console.log(clickedObjects[0].object, this.scene.getObjectByName(clickedObjects[0].object.name));
                        this.removeCube(clickedObjects[0].object);
                        return;
                    }
                    if (event.button === 2 && this.controls.isLocked) {//添加方块 右键
                        this.addCube(clickedObjects[0]);
                        return;
                    }
                }
            }
        }, false);
        //滑轮功能
        {
            window.addEventListener('wheel', (e) => {
                // console.log('滑轮', e, this.currentCubeTypeIndex);
                if (e instanceof WheelEvent) { //Firefox滑轮事件
                    changeCurrentCubeTypeIndex(e.deltaY < 0);
                }
            })
        }
    }

    updatePreviewCube(delta: number) {
        if (!this.previewCube) {
            this.previewCube = new CubeFactory(DefaultCube[Object.keys(DefaultCube)[this.currentCubeTypeIndex]]).buildCube();
            this.scene.add(this.previewCube);
        } else {
            //形状刷新
            {
                if (!this.previewCube.geometryMap) {
                    this.previewCube.geometryMap = {};
                }

                if (this.previewCubeType !== Object.keys(DefaultCube)[this.currentCubeTypeIndex]) {
                    this.previewCubeType = Object.keys(DefaultCube)[this.currentCubeTypeIndex];
                    if (this.previewCube.geometryMap[Object.keys(DefaultCube)[this.currentCubeTypeIndex]]) {
                        this.previewCube.geometry = this.previewCube.geometryMap[Object.keys(DefaultCube)[this.currentCubeTypeIndex]]
                    } else {
                        let previewGeometry = new CubeFactory(DefaultCube[Object.keys(DefaultCube)[this.currentCubeTypeIndex]])?._geometry?.clone();
                        if (previewGeometry) {
                            previewGeometry.scale(0.01, 0.01, 0.01);
                            this.previewCube.geometry = previewGeometry;
                            this.previewCube.geometryMap[Object.keys(DefaultCube)[this.currentCubeTypeIndex]] = previewGeometry;
                        }
                    }
                }
            }
            //材质刷新
            this.previewCube.material = new CubeFactory(DefaultCube[Object.keys(DefaultCube)[this.currentCubeTypeIndex]])._materials;
            //位置刷新
            this.previewCube.position.copy(this.camera.position);
            //旋转刷新
            {
                {
                    if (!this.previewCubeRotation) {
                        this.previewCubeRotation = {
                            y: 0,
                        }
                    } else {
                        if (this.previewCubeRotation.y !== undefined) {
                            this.previewCubeRotation.y += (Math.PI / 180 * 60 * delta) % Math.PI;
                        }
                    }
                }
                this.previewCube.rotation.copy(this.camera.rotation);
                this.previewCube.position.add(
                    new Vector3(0, -0.065, -0.2)
                        .applyAxisAngle(new Vector3(0, 0, 1), this.camera.rotation.z)
                        .applyAxisAngle(new Vector3(0, 1, 0), this.camera.rotation.y)
                        .applyAxisAngle(new Vector3(1, 0, 0), this.camera.rotation.x)
                );
                this.previewCube.rotateY(Math.PI / 4 + (this.previewCubeRotation.y || 0))
            }
        }
    }

    updateCameraPosition(delta: number) {
        const controlPrePosition = new Vector3()
        controlPrePosition.copy(this.controls.getObject().position)
        //水平方向移动+碰撞检测
        {
            this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
            this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
            this.direction.normalize(); // this ensures consistent movements in all directions
            let velocityMax = this.isRunning ? this.personOption.speedRun : this.personOption.speedWalk;

            if (this.moveForward || this.moveBackward) {
                let velocityZTmp = this.velocity.z + this.direction.z * velocityMax * this.personOption.accelerateRateStart;
                this.velocity.z = Math.abs(velocityZTmp) < velocityMax ? velocityZTmp : this.direction.z * velocityMax;
            } else {
                this.velocity.z = Math.abs(this.velocity.z) > 1 ? this.velocity.z * (this.personOption.accelerateRateStop) : 0;
            }
            let positionBeforeX = this.controls.getObject().position.x;
            this.controls.moveRight(this.velocity.x * delta);

            if (this.moveLeft || this.moveRight) {
                let velocityXTmp = this.velocity.x + this.direction.x * velocityMax * this.personOption.accelerateRateStart;
                this.velocity.x = Math.abs(velocityXTmp) < velocityMax ? velocityXTmp : this.direction.x * velocityMax;
            } else {
                this.velocity.x = Math.abs(this.velocity.x) > 1 ? this.velocity.x * (this.personOption.accelerateRateStop) : 0;
            }
            let positionBeforeZ = this.controls.getObject().position.z;
            this.controls.moveForward(this.velocity.z * delta);

            //横向碰撞检测辅助参数
            const checkPositionOptions = [
                -(this.personOption.sightHeight - 0.05),
                -(this.personOption.sightHeight - this.personOption.height / 2),
                (this.personOption.height - this.personOption.sightHeight - 0.05),
                -(this.personOption.sightHeight - 0.5),
                (this.personOption.height - this.personOption.sightHeight - 0.5)
            ];
            let rayMove = this.personOption.thickness / 2;

            {//z轴碰撞检测

                let Z0Flat = undefined;//z负轴碰撞检测
                let Z0NearFlatTmp;
                {
                    for (let i = 0; i < 10; i++) {
                        if (this.checkRay.Z0[i] === undefined) {
                            this.checkRay.Z0.push(new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, 0, -1), 0));
                        }
                        this.checkRay.Z0[i].ray.origin.copy(controlPrePosition);//设置射线原点在摄像机位置，即人物眼睛位置
                        this.checkRay.Z0[i].ray.origin.x = positionBeforeX;//修正为移动前的x轴位置，防止使用位移后的位置检测墙壁
                        this.checkRay.Z0[i].ray.origin.x += (i % 2 === 0 ? 1 : -1) * rayMove;
                        this.checkRay.Z0[i].ray.origin.y += checkPositionOptions[Math.floor(i / 2)];
                        let intersections = this.checkRay.Z0[i].intersectObjects(this.objectsImpenetrable);
                        if (intersections.length > 0) {
                            Z0NearFlatTmp = intersections[0].point.z;
                            Z0Flat = Math.max(Z0Flat === undefined ? Z0NearFlatTmp : Z0Flat, Z0NearFlatTmp);
                        }
                    }
                }
                let Z1Flat = undefined;//z正轴碰撞检测
                let Z1NearFlatTmp;
                {
                    for (let i = 0; i < 10; i++) {
                        if (this.checkRay.Z1[i] === undefined) {
                            this.checkRay.Z1.push(new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, 0, 1), 0));
                        }
                        this.checkRay.Z1[i].ray.origin.copy(controlPrePosition);//设置射线原点在摄像机位置，即人物眼睛位置
                        this.checkRay.Z1[i].ray.origin.x = positionBeforeX;
                        this.checkRay.Z1[i].ray.origin.x += (i % 2 === 0 ? 1 : -1) * rayMove;
                        this.checkRay.Z1[i].ray.origin.y += checkPositionOptions[Math.floor(i / 2)];
                        let intersections = this.checkRay.Z1[i].intersectObjects(this.objectsImpenetrable);
                        if (intersections.length > 0) {
                            Z1NearFlatTmp = intersections[0].point.z;
                            Z1Flat = Math.min(Z1Flat === undefined ? Z1NearFlatTmp : Z1Flat, Z1NearFlatTmp);
                        }
                    }
                }
                let nextZ = this.controls.getObject().position.z;
                nextZ = Math.min(Z1Flat === undefined ? nextZ : (Z1Flat - this.personOption.thickness / 2 - 0.01), nextZ);
                nextZ = Math.max(Z0Flat === undefined ? nextZ : (Z0Flat + this.personOption.thickness / 2 + 0.01), nextZ);
                this.controls.getObject().position.z = nextZ
            }

            {//x轴碰撞检测
                let X0Flat = undefined;//x负轴碰撞检测
                let X0NearFlatTmp;
                {
                    for (let i = 0; i < 10; i++) {
                        if (this.checkRay.X0[i] === undefined) {
                            this.checkRay.X0.push(new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(-1, 0, 0), 0));
                        }
                        this.checkRay.X0[i].ray.origin.copy(controlPrePosition);//设置射线原点在摄像机位置，即人物眼睛位置
                        this.checkRay.X0[i].ray.origin.z = positionBeforeZ;
                        this.checkRay.X0[i].ray.origin.z += (i % 2 === 0 ? 1 : -1) * rayMove;
                        this.checkRay.X0[i].ray.origin.y += checkPositionOptions[Math.floor(i / 2)];
                        let intersections = this.checkRay.X0[i].intersectObjects(this.objectsImpenetrable);
                        if (intersections.length > 0) {
                            X0NearFlatTmp = intersections[0].point.x;
                            X0Flat = Math.max(X0Flat === undefined ? X0NearFlatTmp : X0Flat, X0NearFlatTmp);
                        }
                    }
                }
                let X1Flat = undefined;//x正轴碰撞检测
                let X1NearFlatTmp;
                {
                    for (let i = 0; i < 10; i++) {
                        if (this.checkRay.X1[i] === undefined) {
                            this.checkRay.X1.push(new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(1, 0, 0), 0));
                        }
                        this.checkRay.X1[i].ray.origin.copy(controlPrePosition);//设置射线原点在摄像机位置，即人物眼睛位置
                        this.checkRay.X1[i].ray.origin.z = positionBeforeZ;
                        this.checkRay.X1[i].ray.origin.z += (i % 2 === 0 ? 1 : -1) * rayMove;
                        this.checkRay.X1[i].ray.origin.y += checkPositionOptions[Math.floor(i / 2)];
                        let intersections = this.checkRay.X1[i].intersectObjects(this.objectsImpenetrable);
                        if (intersections.length > 0) {
                            X1NearFlatTmp = intersections[0].point.x;
                            X1Flat = Math.min(X1Flat === undefined ? X1NearFlatTmp : X1Flat, X1NearFlatTmp);
                        }
                    }
                }
                let nextX = this.controls.getObject().position.x;
                nextX = Math.max(X0Flat === undefined ? nextX : (X0Flat + this.personOption.thickness / 2 + 0.01), nextX);
                nextX = Math.min(X1Flat === undefined ? nextX : (X1Flat - this.personOption.thickness / 2 - 0.01), nextX);
                this.controls.getObject().position.x = nextX
                // console.log(Z0Flat,Z1Flat,X0Flat,X1Flat)
            }
            // console.log(this.controls.getObject().position.x,this.controls.getObject().position.y,this.controls.getObject().position.z)
        }
        //垂直方向移动+碰撞检测
        {
            let flyNextY = undefined;
            if (this.isFlying) {
                this.velocity.y = 0;
                this.direction.y = Number(this.moveUp) - Number(this.moveDown);
                this.direction.normalize();
                let velocityMax = this.isRunning ? this.personOption.speedRun : this.personOption.speedWalk;
                if (this.moveUp || this.moveDown) {
                    let velocityYTmp = this.velocity.y + this.direction.y * velocityMax * this.personOption.accelerateRateStart;
                    if (Math.abs(velocityYTmp) < velocityMax) {
                        this.velocity.y = velocityYTmp;
                    } else {
                        this.velocity.y = this.direction.y * velocityMax;
                    }
                } else {
                    this.velocity.y = Math.abs(this.velocity.y) > 1 ? this.velocity.y * (this.personOption.accelerateRateStop) : 0;
                }
                let positionBeforeY = this.controls.getObject().position.y;
                flyNextY = positionBeforeY + this.velocity.y * delta * 2;
            }

            let bottomFlatY = undefined;
            //坠落四角+中间 检测
            {
                for (let i = 0; i < 5; i++) {
                    if (this.checkRay.Y0[i] === undefined) {
                        this.checkRay.Y0.push(new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, -1, 0), 0));
                    }
                    this.checkRay.Y0[i].ray.origin.copy(controlPrePosition);//设置射线原点在摄像机位置，即人物眼睛位置
                }
                let rayMove = this.personOption.thickness / 2;
                this.checkRay.Y0[0].ray.origin.x += rayMove;
                this.checkRay.Y0[0].ray.origin.z -= rayMove;
                this.checkRay.Y0[1].ray.origin.x += rayMove;
                this.checkRay.Y0[1].ray.origin.z += rayMove;
                this.checkRay.Y0[2].ray.origin.x -= rayMove;
                this.checkRay.Y0[2].ray.origin.z += rayMove;
                this.checkRay.Y0[3].ray.origin.x -= rayMove;
                this.checkRay.Y0[3].ray.origin.z -= rayMove;
                for (let i = 0; i < 5; i++) {
                    let intersections = this.checkRay.Y0[i].intersectObjects(this.objectsImpenetrable);
                    if (intersections.length > 0) {
                        let bottomFlatYTmp = intersections[0].point.y;
                        bottomFlatY = Math.max(bottomFlatY === undefined ? bottomFlatYTmp : bottomFlatY, bottomFlatYTmp);
                    }
                }
            }
            //头顶四角+中间 检测
            let topFlatY = undefined;
            {
                for (let i = 0; i < 5; i++) {
                    if (this.checkRay.Y1[i] === undefined) {
                        this.checkRay.Y1.push(new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, 1, 0), 0));
                    }
                    this.checkRay.Y1[i].ray.origin.copy(controlPrePosition);//设置射线原点在摄像机位置，即人物眼睛位置
                }
                let rayMove = this.personOption.thickness / 2 - 0.001;
                this.checkRay.Y1[0].ray.origin.x += rayMove;
                this.checkRay.Y1[0].ray.origin.z -= rayMove;
                this.checkRay.Y1[1].ray.origin.x += rayMove;
                this.checkRay.Y1[1].ray.origin.z += rayMove;
                this.checkRay.Y1[2].ray.origin.x -= rayMove;
                this.checkRay.Y1[2].ray.origin.z += rayMove;
                this.checkRay.Y1[3].ray.origin.x -= rayMove;
                this.checkRay.Y1[3].ray.origin.z -= rayMove;
                for (let i = 0; i < 5; i++) {
                    let intersections = this.checkRay.Y1[i].intersectObjects(this.objectsImpenetrable);
                    if (intersections.length > 0) {
                        let topFlatYTmp = intersections[0].point.y;
                        topFlatY = Math.min(topFlatY === undefined ? topFlatYTmp : topFlatY, topFlatYTmp);
                    }
                }
            }
            //无碰撞时下次垂直位置(相机位置)
            let nextY = this.isFlying ? flyNextY : this.controls.getObject().position.y + (this.velocity.y * delta);
            if (nextY === undefined) {
                return
            }
            if (topFlatY !== undefined) {
                if (nextY > topFlatY - (this.personOption.height - this.personOption.sightHeight)) {
                    nextY = topFlatY - (this.personOption.height - this.personOption.sightHeight);
                    this.velocity.y = 0;
                }
            }
            if (bottomFlatY !== undefined) {
                //下方检测到平台时，脚部不能低于最低平台
                nextY = Math.max(bottomFlatY + this.personOption.sightHeight, nextY);
                if (nextY === bottomFlatY + this.personOption.sightHeight) {
                    this.velocity.y = 0;
                    this.canJump = true;
                    this.isFlying = false;
                } else {
                    this.velocity.y -= this.worldOption.g * Math.sqrt(delta);
                }
            } else {
                //下方未检测到平台时
                this.velocity.y -= this.worldOption.g * Math.sqrt(delta);
            }
            this.controls.getObject().position.y = nextY;
        }
    }

    checkAndResetPosition() {
        //掉落位置重置
        if (this.controls.getObject().position.y < -300) {
            showWastedCover(this.domElement)
            this.velocity.y = 0;
            this.controls.getObject().position.y = 50;
            this.controls.getObject().position.x = 10;
            this.controls.getObject().position.z = 11;
        }
    }

    removeCube(clickedObject: THREE.Object3D) {
        let index = this.objects.findIndex(e => e.id === clickedObject.id);
        if (index >= 0) {
            this.objects.splice(index, 1);
        }
        const objTmp = this.scene.getObjectById(clickedObject.id)
        if (objTmp) {
            this.scene.remove(objTmp);
            this.selectObjectsImpenetrable();
        }
    }

    addCube(clickedObj: THREE.Intersection) {
        let normal = clickedObj.face?.normal;
        let rotate = clickedObj.object.rotation;
        let position = clickedObj.object.position;
        let point = clickedObj.point;

        let targetIsHalfCube = DefaultCube[clickedObj.object.userData.cubeTypeKey].cubeAttributes && DefaultCube[clickedObj.object.userData.cubeTypeKey].cubeAttributes.geometryType === GeometryType.HalfCube;
        let targetIsFlower1Cube = DefaultCube[clickedObj.object.userData.cubeTypeKey].cubeAttributes && DefaultCube[clickedObj.object.userData.cubeTypeKey].cubeAttributes.geometryType === GeometryType.Flower1Cube;
        let newIsFlower1Cube = DefaultCube[Object.keys(DefaultCube)[this.currentCubeTypeIndex]].cubeAttributes && DefaultCube[Object.keys(DefaultCube)[this.currentCubeTypeIndex]].cubeAttributes.geometryType === GeometryType.Flower1Cube;
        let newIsHalfCube = DefaultCube[Object.keys(DefaultCube)[this.currentCubeTypeIndex]].cubeAttributes && DefaultCube[Object.keys(DefaultCube)[this.currentCubeTypeIndex]].cubeAttributes.geometryType === GeometryType.HalfCube;
        let newIsStairsCube = DefaultCube[Object.keys(DefaultCube)[this.currentCubeTypeIndex]].cubeAttributes && DefaultCube[Object.keys(DefaultCube)[this.currentCubeTypeIndex]].cubeAttributes.geometryType === GeometryType.StairsCube;

        let newPositionVector = new THREE.Vector3(normal?.x, normal?.y, normal?.z);
        newPositionVector = newPositionVector.applyAxisAngle(new THREE.Vector3(0, 0, 1), rotate.z);
        newPositionVector = newPositionVector.applyAxisAngle(new THREE.Vector3(0, 1, 0), rotate.y);
        newPositionVector = newPositionVector.applyAxisAngle(new THREE.Vector3(1, 0, 0), rotate.x);
        newPositionVector.round();

        let newPosition;
        if (!targetIsFlower1Cube && newIsFlower1Cube && newPositionVector.y !== 1) {//限制花只能放在顶面
            return;
        }
        if (targetIsFlower1Cube) {
            newPosition = position;//如果位置是花则花被顶替
        } else {
            let yMove = newPositionVector.y;
            if (targetIsHalfCube) {
                if (newIsHalfCube) {
                    if (newPositionVector.y !== 0) {
                        yMove = newPositionVector.y / 2
                    }
                } else {
                    if (newPositionVector.y !== 0) {
                        if (position.y > 0 ? position.y % 1 === 0.25 : position.y % 1 === -0.75) {
                            yMove = newPositionVector.y * (newPositionVector.y > 0 ? 3 : 5) / 4  //上半砖
                        } else {
                            yMove = newPositionVector.y * (newPositionVector.y > 0 ? 5 : 3) / 4  //下半砖
                        }
                    } else {
                        if (position.y > 0 ? position.y % 1 === 0.25 : position.y % 1 === -0.75) {
                            yMove = -1 / 4  //上半砖
                        } else {
                            yMove = 1 / 4  //下半砖
                        }
                    }
                }
            } else {
                if (newIsHalfCube) {
                    if (newPositionVector.y !== 0) {
                        yMove = newPositionVector.y * 3 / 4;
                    } else {
                        yMove = (point.y > position.y ? 1 : -1) / 4;
                    }
                }
            }
            newPosition = {
                x: position.x + newPositionVector.x,
                y: position.y + yMove,
                z: position.z + newPositionVector.z,
            };
            {//检查同位置重复方块.检测新方块要放的位置是否已经有方块了
                let existObject = undefined;
                for (let object of this.objects) {
                    if (Math.round(object.position.x) === Math.round(newPosition.x)
                        &&
                        Math.round(object.position.y) === Math.round(newPosition.y)
                        &&
                        Math.round(object.position.z) === Math.round(newPosition.z)) {
                        existObject = object;
                    }
                }
                if (existObject) {
                    if (existObject.userData.cubeAttributes.geometryType === GeometryType.Flower1Cube) {
                        this.removeCube(existObject);
                    } else if (!newIsHalfCube) {
                        return;
                    }
                }
            }

        }
        let newDirectionRotate = {
            x: 0,
            y: 0,
            z: 0,
        };
        if (!newIsHalfCube) {//放置 转向
            let newDirection;
            let worldDirection = this.camera.getWorldDirection(new Vector3(1, 0, 0));
            if (Math.abs(worldDirection.x) >= Math.abs(worldDirection.z)) {
                newDirection = new Vector3(-worldDirection.x, 0, 0)
            } else {
                newDirection = new Vector3(0, 0, -worldDirection.z)
            }
            newDirection.normalize().round();
            if (Math.abs(worldDirection.y) >= 0.5) {
                newDirection.y = worldDirection.y > 0 ? 1 : -1
            }
            //x，z轴旋转
            if (newDirection.x === 1) {
                newDirectionRotate.y = 0;
            } else if (newDirection.x === -1) {
                newDirectionRotate.y = 180;
            } else if (newDirection.z === 1) {
                newDirectionRotate.y = -90;
            } else if (newDirection.z === -1) {
                newDirectionRotate.y = 90;
            }
            //y轴旋转
            if (newDirection.y !== 0) {
                newDirectionRotate.z = newDirection.y > 0 ? -90 : 90;
            }
            newDirectionRotate.z += 90;//放置时方块顶部面冲玩家
        }
        if (newIsStairsCube) {
            newDirectionRotate.z -= 90;
        }
        let cubeFactory = new CubeFactory(DefaultCube[Object.keys(DefaultCube)[this.currentCubeTypeIndex]]);
        let cube = cubeFactory.buildCube(newPosition.x, newPosition.y, newPosition.z, DefaultCube[Object.keys(DefaultCube)[this.currentCubeTypeIndex]], 0, newDirectionRotate.y, newDirectionRotate.z);
        if (targetIsFlower1Cube) {
            this.removeCube(clickedObj.object);
        }
        this.scene.add(cube);
        this.objects.push(cube);
        this.selectObjectsImpenetrable();
    }

    selectObjectsImpenetrable() {
        //过滤出有体积碰撞的对象
        this.objectsImpenetrable = this.objects.filter(e => !(e.userData && e.userData.cubeAttributes && e.userData.cubeAttributes.isPenetrable));
    }
}

const showWastedCover = (domElement: HTMLCanvasElement) => {
    let wastedCoverEl = document.getElementById('wastedCover')
    if (!wastedCoverEl) {
        const div = window.document.createElement('div')
        div.style.position = 'fixed'
        div.style.left = '0'
        div.style.right = '0'
        div.style.top = '0'
        div.style.bottom = '0'
        div.style.position = 'fixed'
        div.style.pointerEvents = 'none'
        div.style.display = 'flex'
        div.style.alignItems = 'center'
        div.style.justifyContent = 'space-around'
        div.style.fontWeight = '900'
        div.style.stroke = '2vw solid white'
        div.style.zIndex = '10000'
        div.style.backgroundImage = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXAAAABlCAMAAAEUrHgHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTM5MUM4RUUxNDlFMTFFREEwNDdFMTZBMUJCN0Q3NTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTM5MUM4RUQxNDlFMTFFREEwNDdFMTZBMUJCN0Q3NTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDRBOUM1RTAxNDk1MTFFRDk2ODdFRjE5MjkwRjA5RDUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDRBOUM1RTExNDk1MTFFRDk2ODdFRjE5MjkwRjA5RDUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz75e75MAAADAFBMVEUjGBWDJyEpHRrSCRbOy8riARIrGRbVFx1kXFqvHCLkABH29fVKQT7NChZtJR2KGR38/PyWJCVQJCCbl5WqpqaUHiHdBRRVGxmCIx/6+vpUS0ny8fG0GRpcU1GmIyW7NjVrZGLJISRLHRwlFhU1HBjFwsLi4OHVBhTq6emCe3l3MyS7DBasExw6HBnaCBWLhoTU0tImGxh2JyMsIB1kGxrMIx8xGhdxamgkGBVGPDraBRQ9MzFDHBm6Gxt4Ghx8dXPu7e1IKSVMQ0HhBRTY1tVAMStCGRY6LirPzczIFRz5+PguIyDe3NxoYV+XMyrc2tnECxaZODXcARK7LyhpLiu+urrLBBM6JR/Bvr0kGBbf3d3mABGlFB3m5eXa2dizExvkAhNnNCqqODU1Kym2srE7MS5YKSCQi4pZUE7IxcQzKCYwJiNJGRdSSUfSDBjhBBNCOTbj4uJTMymEOTKlCBNkLiDW1dSfnJq8ERno5uawrKvdBBPd3NquGRzW1NJsLCayKSW5trXBDRg6GRfT0dAnGBXp6OaiGh8kGhdANjPv7u7hAhPDHSHHAxLfAxQnGRZhWVdQRkTZ2NZsIyLp5+h4DhTh3t9IPzyxIiOysK8nGheWkZDl5OO5ICjMDRnYARLLyMjr6urYBBO4KyfRz8/6+PlXTkv08/PmABLt6+zi4eBPEhSloZ9hJR/Rz87EMC/DwL8sFxU/LSaEMiqnKyzfBxS3SkK0LC7t7OzbDRg6FhVmXlzZ19fW09Tm4+V3cG7jARTd2txfV1U0FhXaAxRvHh7lABG8uLdDFRXmAhMkGRUmHBjkAhG1HycmGhT////+/v7lARLkARLkABLmARLkARPlARPlABPmARPkABPmABP8+/v//v7///76+vn6+fn39/f9/f309PT4+Pf8/Pt3OjH+/v/+/////v/OJyT+/f7mAhFoX2CGf377+/v+//78+/z49/hbHx308/Tn6OdXOjG0Dxj9/v63Hyf5+fn5+vrw8PA6Ly6rEBi2IR7///+SdOFpAAABAHRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AU/cHJQAANwtJREFUeNqMkLFKA0EQhocgEUEbJVdtFa6NEE6WJXCC1RXXWGebwIkgAe1sQio5Uqb1CWQam1SmshshFhFEsLHIC1jYiqwzc2ds87M7s7Pz7c7sQthYDxdbfdgczweDQwgvy2VY/k+27P42Q1jvfSRIPTiYjE13xxiYmBRu09S0GtakadpO2DwXxW7bsG6Slhmjj+D6lBCI0L0hXiKRx31kEd7zZO/YeMSOBBjB5zERcGbB0ZVgNEPVeYVLjvGSJDeCYAmHDB0xDSzCjClZ1Y70Xue5B8EbiHPdwXyuF2ZaAxXXgetVD0IhJSVPfFwWGYnVCPRd1WEOKILwKF0lUrIGZs65bcUZ8kCenANpxvNHhv5IazGaR8gfgydeznrQitK0uFJSgq9+BOc7Xs/2tM0v0tfBu0au6j2uPzKEprV2KGbVtXFs4ynErPJ7IW765MS5u2ZH9CsA5WSo00AQhOHtNqwgIEhat6kgTWo4QUouG3KXkCAQGERNs+aSJjhypooEkARRKjAEhVzDa4woopfjBbA8A6L8M7cFJJzYnd2bnZn959t/MHP5fP35d/dqWhZOMU3L34gJVFUV7R/EqqkPTpk923LW3jqbt3ZBle3rLhB7VC7Pk8nkZNwDYTuvqb0acJc1+RJivUGbpKEpY8lCLR0O1OYeh4dmpdQWZnBAhlvkeW9IIn8QqOhYjJu1e6cm+oDdozVXeAZsKR80xkJ6OML+jN2PBk2gCBWm4TdUyBoKWUT3saq60Zkp4U/QIYFKYyrk1wjDjJVZZtzyGgcKxLvnJI5rIi7Gw70pkmIxK9wxbJ4jwQv447AJ7umpVHxhHw75NXmOzgCp1SlybRvYZhGkmEz0bDvRYuNM1DpoNEb0C8A1V0DMvQtb/SeDId3vzHmx0MAuSe+cEOa+BKCtakKbCKLwdGu3K0UEfyooAfsDFbWVsJJsa1E8BaxBhMW6jof1ohLRiPRg9ZBDW1gJ6UaEUoIH6SGdW0ERCjkIBfewOey2iueK15KD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)`
        div.style.backgroundPosition = 'center'
        div.style.backgroundRepeat = 'no-repeat'
        div.style.backgroundSize = '20%'
        div.style.backgroundColor = 'white'
        div.id = 'wastedCover'
        document.body.append(div)
        wastedCoverEl = div
    }
    setTimeout(() => {
        if (wastedCoverEl) {
            wastedCoverEl.style.transition = 'background 0.8s linear'
            wastedCoverEl.style.backgroundColor = 'rgba(0,0,0,0.3)'
            wastedCoverEl.style.opacity = '1'
        }
        domElement.style.filter = 'grayscale(100%) blur(3px)'
    }, 1)
    let timer: number | null = setTimeout(() => {
        if (wastedCoverEl) {
            wastedCoverEl.style.transition = 'none'
            wastedCoverEl.style.backgroundColor = 'white'
            wastedCoverEl.style.opacity = '0'
        }
        domElement.style.filter = ''
        domElement.style.transition = 'filter 0.8s linear'
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
    }, 3000)

}