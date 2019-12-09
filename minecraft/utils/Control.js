class Control {
    static getInstance() {
        if (!Control.instance) {
            Control.instance = new Control();
        }
        return Control.instance;
    }

    constructor() {
        this.controlsEnabled = false;

        this.moveForward = false;
        this.moveBackward = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.canJump = false;

        this.prevTime = performance.now();
        this.velocity = new THREE.Vector3();
        this.direction = new THREE.Vector3();
        this.directionY = new THREE.Vector3(0, -1, 0);
        this.trendZ = 0;
        this.trendX = 0;

        this.height = 0;
        this.cameradir = new THREE.Vector3();

        this.downSpeed = 20.0;
        this.upSpeed = 105.0;
        this.moveSpeed = 960.0;
    }

    registControlEvent() {
        let blocker = document.getElementById('blocker');
        let instructions = document.getElementById('instructions');
        let havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;
        if (havePointerLock) {
            let element = document.body;
            //输入锁定改变事件
            let pointerlockchange = () => {
                if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
                    this.controlsEnabled = true;
                    this.controls.enabled = true;
                    blocker.style.display = 'none';
                } else {
                    this.controls.enabled = false;
                    blocker.style.display = 'block';
                    instructions.style.display = '';
                }
            };
            //输入锁定改变错误
            let pointerlockerror = () => {
                instructions.style.display = '';

            };
            document.addEventListener('mousemove', (e) => {
                let movementX = e.movementX ||
                    e.mozMovementX ||
                    e.webkitMovementX ||
                    0,
                    movementY = e.movementY ||
                        e.mozMovementY ||
                        e.webkitMovementY ||
                        0;
                this.movementX = movementX;
                this.movementY = movementY;
            }, false);

            // Hook pointer lock state change events
            document.addEventListener('pointerlockchange', pointerlockchange, false);
            document.addEventListener('mozpointerlockchange', pointerlockchange, false);
            document.addEventListener('webkitpointerlockchange', pointerlockchange, false);

            document.addEventListener('pointerlockerror', pointerlockerror, false);
            document.addEventListener('mozpointerlockerror', pointerlockerror, false);
            document.addEventListener('webkitpointerlockerror', pointerlockerror, false);

            document.addEventListener('keydown', (event) => this.onKeyDown(event), false);
            document.addEventListener('keyup', (event) => this.onKeyUp(event), false);

            //遮罩层事件
            instructions.addEventListener('click', function () {

                instructions.style.display = 'none';
                // Ask the browser to lock the pointer
                element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
                element.requestPointerLock();
            }, false);

        } else {
            instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';
        }
    }

    init(camera, scene, load) {
        this.registControlEvent();
        let controls = new THREE.PointerLockControls(camera);
        controls.getObject().position.y = 600;
        this.camera = camera;
        this.load = load;
        this.scene = scene;
        this.controls = controls;
        this.initRaycaster();
        scene.add(controls.getObject());
        return this;
    }

    onKeyDown(event) {
        switch (event.keyCode) {

            case 38: // up
            case 87: // w
                this.moveForward = true;
                break;

            case 37: // left
            case 65: // a
                this.moveLeft = true;
                break;

            case 40: // down
            case 83: // s
                this.moveBackward = true;
                break;

            case 39: // right
            case 68: // d
                this.moveRight = true;
                break;

            case 32: // space
                if (this.canJump === true) this.velocity.y += this.upSpeed;
                this.canJump = false;
                this.jump = true;
                break;
        }
    }

    onKeyUp(event) {
        switch (event.keyCode) {

            case 38: // up
            case 87: // w
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
    }

    initRaycaster() {
        // origin — 射线的起点向量。
        // direction — 射线的方向向量，应该归一化。
        // near — 所有返回的结果应该比 near 远。Near不能为负，默认值为0。
        // far — 所有返回的结果应该比 far 近。Far 不能小于 near，默认值为无穷大。
        this.raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3().copy(this.directionY), 0, 0);
    }

    update() {
        //判断鼠标是否锁定
        if (this.controlsEnabled === true) {

            //判断键盘移动方向
            this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
            this.direction.x = Number(this.moveLeft) - Number(this.moveRight);
            this.direction.normalize(); // this ensures consistent movements in all directions

            //用于检测地面
            this.raycaster.ray.origin.copy(this.controls.getObject().position);

            //相机距离地面的相对高度
            this.raycaster.ray.origin.y -= this.height;
            let intersections = this.raycaster.intersectObjects([this.load]);
            //将摄像头面对的相对方向置入cameradir变量,用于检测障碍物.
            this.controls.getObject().getWorldDirection(this.cameradir);
            let intersections2 = [], onWard = false, dir = new THREE.Vector3();

            //确认移动的方向，以便检测障碍物
            if (this.direction.z > 0) {
                //W
                dir.copy(this.cameradir).negate();
            } else if (this.direction.z < 0) {//
                //S
                dir.copy(this.cameradir);
            }
            if (this.direction.x > 0) {
                //A
                dir.copy(this.cameradir).applyAxisAngle(this.directionY, 90.0);
            } else if (this.direction.x < 0) {
                //D
                dir.copy(this.cameradir).applyAxisAngle(this.directionY, -90.0);
            }

            //用于检测障碍物
            if (this.direction.z !== 0 || this.direction.x !== 0) {
                this.raycaster.ray.direction.copy(dir);
                intersections2 = this.raycaster.intersectObjects([this.load]);
                this.raycaster.ray.direction.copy(this.directionY);
            }

            //是否碰撞标志位
            onWard = intersections2.length > 0;


            //一帧的时间 大概0.016S
            let time = performance.now();
            let delta = (time - this.prevTime) / 1000;
            //delta = 0.016; 调试时使用此项
            //以下为了保证有过渡效果
            this.velocity.x -= this.velocity.x * 10 * delta;
            this.velocity.z -= this.velocity.z * 10 * delta;


            //下坠标识位
            let needFallDown = intersections.length > 0 && intersections[0].distance > 0;
            //确保人物不下落
            console.log(intersections[0], intersections[0] ? intersections[0].distance : null, intersections[0] && intersections[0].distance ? intersections[0].distance > 0 : null, needFallDown)

            if (needFallDown) {
                this.velocity.y -= 9.8 * this.downSpeed * delta; // 100.0 = mass
            } else {
                this.velocity.y = 0;
                this.canJump = true;
            }


            //人物移动距离计算
            if (this.moveForward || this.moveBackward) {
                this.velocity.z -= this.direction.z * this.moveSpeed * delta;
            }
            if (this.moveLeft || this.moveRight) {
                this.velocity.x -= this.direction.x * this.moveSpeed * delta;
            }


            //确保人物碰撞停止
            if (onWard) {
                if ((this.direction.x != 0)) {
                    this.velocity.x = 0;
                }
                if ((this.direction.z != 0)) {
                    this.velocity.z = 0;
                }
            }

            //人物移动
            this.controls.getObject().translateX(this.velocity.x * delta);
            this.controls.getObject().translateY(this.velocity.y * delta);
            this.controls.getObject().translateZ(this.velocity.z * delta);

            this.prevTime = time;

        }
    }

}