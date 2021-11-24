import {PointerLockControls} from 'three/examples/jsm/controls/PointerLockControls'
import CubeFactory from "../objects/cube/CubeFactory";
import * as THREE from 'three';
import DefaultCube from '../objects/cube/DefaultCube'
import GeometryType from "../objects/cube/GeometryType";
import {Vector3} from "three";

interface PreviewCube extends THREE.Mesh {
    geometryMap?: Record<string, THREE.Geometry>
}

export default class MCFirstPersonControl {
    camera: THREE.Camera;
    private previewCube: PreviewCube | undefined;
    private domElement: HTMLCanvasElement;
    private objects: THREE.Mesh[];
    objectsImpenetrable: THREE.Mesh[] | undefined;
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
    private canFly: boolean;
    private switchFlyKeyUped: boolean;
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
        this.objectsImpenetrable = undefined;
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
        this.switchFlyKeyUped = false;
        this.isFlying = false;
        // this.prevTime = performance.now();
        this.velocity = new THREE.Vector3();
        this.direction = new THREE.Vector3();
        this.worldOption = {
            g: 8.0
        };
        this.personOption = {
            height: 1.8,//人物总高度。现有配置不能让人物高于2
            sightHeight: 1.5,//眼部高度。现有配置不能让人物高于2
            jumpHeight: 1.3,    //最大跳跃高度(并非砖块高度)
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
            switch (event.keyCode) {
                case 38: // up
                case 87: // w
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
                    if (!this.canJump && this.switchFlyKeyUped) {
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
                                    this.isFlying = !this.switchFlyKeyUped;
                                }
                            }
                        }
                        if (this.moveUp) {
                            break;
                        }
                        this.moveUp = true;
                        this.switchFlyKeyUped = false;
                    }
                    this.switchFly = performance.now();
                    break;
                case 16: // shift left
                    if (this.moveDown) {
                        break;
                    }
                    this.moveDown = true;
                    break;
            }


        };
        let onKeyUp = (event: KeyboardEvent) => {
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

                case 16: // shift left
                    this.moveDown = false;
                    break;

                case 32: // space
                    this.moveUp = false;
                    this.switchFlyKeyUped = true;
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
                console.log("点击对象【" + clickedObjects[0].object.name + "】", clickedObjects[0]);
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
            window.addEventListener('wheel',(e) => {
                console.log('滑轮',e, this.currentCubeTypeIndex);
                e = e || window.event;
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
                            this.checkRay.Z0.push(new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, 0, -1), 0, 0));
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
                            this.checkRay.Z1.push(new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, 0, 1), 0, 0));
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
                            this.checkRay.X0.push(new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(-1, 0, 0), 0, 0));
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
                            this.checkRay.X1.push(new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(1, 0, 0), 0, 0));
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
                        this.checkRay.Y0.push(new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, -1, 0), 0, 0));
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
                        this.checkRay.Y1.push(new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, 1, 0), 0, 0));
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
        //掉落位置重置
        if (this.controls.getObject().position.y < -200) {
            this.velocity.y = 0;
            this.controls.getObject().position.y = 100;
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
        this.objectsImpenetrable = this.objects.filter(e =>
            !(e.userData
                && e.userData.cubeAttributes
                && e.userData.cubeAttributes.isPenetrable
            )
        );
    }
}



