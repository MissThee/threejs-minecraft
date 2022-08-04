import * as THREE from 'three';
import GlobalSetting from "../../setting/GlobalSetting";
import GeometryType from "./GeometryType";
import ImagePoint from "./ImagePoint";
import DefaultCube, {CubeOption} from "./DefaultCube";

export default class CubeFactory {
    private static _instanceObj: Record<string, CubeFactory>;
    cubeOptions: CubeOption;
    _materials: THREE.Material[];
    _materialsMap: Record<string, THREE.Material[]>;
    _materialsHalfMap: Record<string, THREE.MeshLambertMaterial>;
    _geometry: THREE.BufferGeometry | undefined;
    _geometryMap: Record<string, THREE.BufferGeometry>;
    _cubeSize: number;

    constructor(defaultCube: CubeOption) {
        if (CubeFactory._instanceObj && CubeFactory._instanceObj[defaultCube.key]) {
            return CubeFactory._instanceObj[defaultCube.key];
        }
        this.cubeOptions = defaultCube;
        this._materials = [];
        this._materialsMap = {};
        this._materialsHalfMap = {};
        this._geometry = undefined;
        this._geometryMap = {};
        this._cubeSize = 1;//方块边长，只能为1
        this.buildMaterials();
        this.buildGeometry();
        CubeFactory._instanceObj = {
            [defaultCube.key]: this
        }
    }

    //初始化形状
    buildGeometry() {
        if (this._geometryMap) {
            this._geometry = this._geometryMap[this.cubeOptions.cubeAttributes.geometryType];
        }
        if (this._geometry) {
            return;
        }

        let geometryType = undefined;
        if (this.cubeOptions.cubeAttributes !== undefined && this.cubeOptions.cubeAttributes.geometryType !== undefined) {
            geometryType = this.cubeOptions.cubeAttributes.geometryType;
        }
        let geom;
        const imagePoint = ImagePoint;
        const width = this._cubeSize;
        const innerWidth = width / Math.sqrt(2);
        switch (geometryType) {
            case GeometryType.Cube:
                geom = new THREE.BoxGeometry(this._cubeSize, this._cubeSize, this._cubeSize);
                break;
            case GeometryType.HalfCube:
                geom = new THREE.BoxGeometry(this._cubeSize, this._cubeSize / 2, this._cubeSize);
                break;
            case GeometryType.StairsCube:
                geom = new THREE.BufferGeometry();
                geom.setAttribute('color', new THREE.BufferAttribute(new Float32Array([
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
                ]), 3, false));
                geom.setAttribute('normal', new THREE.BufferAttribute(new Float32Array([
                    0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1
                ]), 3, false));
                geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
                    0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0, -0.5, 0.5, -0.5, 0.5, 0.5, 0, -0.5, 0.5, 0, 0.5, 0, 0, 0.5, 0, 0, -0.5, 0, 0.5, -0.5, 0, 0, 0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0.5, 0, 0.5, 0.5, 0, -0.5, 0, 0, -0.5, 0.5, 0, 0.5, 0, 0, -0.5, 0, 0, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, -0.5, 0.5, -0.5, 0, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0, 0, 0.5, 0, 0.5, 0.5, -0.5, 0.5, 0.5, 0, 0, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0, 0, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0, 0, 0.5, 0.5, -0.5, 0.5, 0.5, 0, 0.5, 0, 0, -0.5, -0.5, 0.5, -0.5, 0, 0.5, -0.5, 0, 0, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0, 0, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0, 0, -0.5, 0.5, 0, -0.5, 0.5, -0.5, -0.5
                ]), 3, false));
                geom.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([
                    0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0.5, 0, 0, 1, 0.5, 0, 0.5, 0, 0, 1, 0, 1, 0.5, 0, 0, 1, 0.5, 0, 0.5, 0, 0, 1, 0, 1, 0.5, 0, 0, 1, 0.5, 0, 0.5, 0, 0, 1, 0, 1, 0.5, 0, 0, 1, 0.5, 0, 0.5, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0.5, 0.5, 0.5, 1, 0, 1, 0.5, 0.5, 0, 1, 0, 0, 0.5, 0.5, 0, 0, 1, 0, 0.5, 0.5, 1, 0, 1, 0.5, 0.5, 0.5, 0, 1, 0.5, 1, 0.5, 0.5, 0, 0, 0, 1, 0.5, 0.5, 1, 0, 0, 0, 0.5, 0.5, 1, 0.5, 1, 0
                ]), 2, false));
                geom.groups.push({start: 0, materialIndex: 0, count: 60})
                geom.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 0.8660254037844386)
                break;
            case GeometryType.Flower1Cube:
                geom = new THREE.BufferGeometry();
                geom.setAttribute('color', new THREE.BufferAttribute(new Float32Array([
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
                ]), 3, false));
                geom.setAttribute('normal', new THREE.BufferAttribute(new Float32Array([
                    0.7071067690849304, 0, -0.7071067690849304, 0.7071067690849304, 0, -0.7071067690849304, 0.7071067690849304, 0, -0.7071067690849304, 0.7071067690849304, 0, -0.7071067690849304, 0.7071067690849304, 0, -0.7071067690849304, 0.7071067690849304, 0, -0.7071067690849304, 0.7071067690849304, 0, 0.7071067690849304, 0.7071067690849304, 0, 0.7071067690849304, 0.7071067690849304, 0, 0.7071067690849304, 0.7071067690849304, 0, 0.7071067690849304, 0.7071067690849304, 0, 0.7071067690849304, 0.7071067690849304, 0, 0.7071067690849304, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0
                ]), 3, false));
                geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
                    0.3535533845424652, -0.5, 0.3535533845424652, -0.3535533845424652, -0.5, -0.3535533845424652, -0.3535533845424652, 0.5, -0.3535533845424652, 0.3535533845424652, -0.5, 0.3535533845424652, -0.3535533845424652, 0.5, -0.3535533845424652, 0.3535533845424652, 0.5, 0.3535533845424652, -0.3535533845424652, -0.5, 0.3535533845424652, 0.3535533845424652, -0.5, -0.3535533845424652, 0.3535533845424652, 0.5, -0.3535533845424652, -0.3535533845424652, -0.5, 0.3535533845424652, 0.3535533845424652, 0.5, -0.3535533845424652, -0.3535533845424652, 0.5, 0.3535533845424652, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5
                ]), 3, false));
                geom.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([
                    0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ]), 2, false));
                geom.groups.push({start: 0, materialIndex: 0, count: 12})
                geom.groups.push({start: 12, materialIndex: 1, count: 36})
                geom.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 0.8660254037844386)
                break;
            default:
                throw "unknow geometryType";
        }
        this._geometry = geom;
        this._geometryMap[this.cubeOptions.cubeAttributes.geometryType] = this._geometry
    }

    //初始化材质
    buildMaterials() {
        if (this._materialsMap) {
            this._materials = this._materialsMap[this.cubeOptions.key];
        }
        if (this._materials && this._materials.length !== 0) {
            return;
        }
        this._materials = [];
        let textureLoader = new THREE.TextureLoader();
        let textureList = [];
        for (let imageUrlIndex in this.cubeOptions.images) {
            let imageUrl = this.cubeOptions.images[imageUrlIndex];
            if (imageUrl === '' || imageUrl === undefined) {
                textureList.push(undefined);
            } else {
                let texture = textureLoader.load(imageUrl);
                texture.generateMipmaps = true;//生成纹理，用于相关滤镜，根据远近自动调整贴图质量
                texture.minFilter = THREE.NearestMipMapNearestFilter;//minFilter属性：指定纹理如何缩小。默认值：THREE.LinearMipMapLinearFilter。
                texture.magFilter = THREE.NearestFilter;//magFilter属性：指定纹理如何放大。THREE.NearestFilter 贴图像素化
                textureList.push(texture);
            }
        }
        let materialList = [];
        for (let textureIndex in textureList) {
            let texture = textureList[textureIndex];
            materialList.push(
                new THREE.MeshLambertMaterial({
                    // color:0x4F9C1A,
                    // side: THREE.DoubleSide,
                    map: texture,
                    // vertexColors: THREE.VertexColors,
                    fog: true,//当前材质是否受到全局雾化效果器影响
                    ...(this.cubeOptions.materialParameters ? this.cubeOptions.materialParameters : {}),
                    ...(this.cubeOptions.materialParametersForOneList && this.cubeOptions.materialParametersForOneList[textureIndex] ? this.cubeOptions.materialParametersForOneList[textureIndex] : {}),
                })
            );
        }
        //半高贴图
        let geometryType = (this.cubeOptions.cubeAttributes !== undefined) && this.cubeOptions.cubeAttributes.geometryType;

        for (let keyIndex in this.cubeOptions.imageSet) {
            let key = this.cubeOptions.imageSet[keyIndex];
            let materialTmp = materialList[key];
            switch (geometryType) {
                case GeometryType.HalfCube:
                    if ("0145".indexOf(keyIndex) >= 0) {
                        if (!this._materialsHalfMap) {
                            this._materialsHalfMap = {}
                        }
                        if (this._materialsHalfMap[this.cubeOptions.key]) {
                            materialTmp = this._materialsHalfMap[this.cubeOptions.key];
                        } else if (materialTmp.map) {
                            let materialNew = materialTmp.clone();
                            materialNew.map = materialTmp.map.clone();
                            let textureNew = textureLoader.load(this.cubeOptions.images[this.cubeOptions.imageSet[keyIndex]]);
                            textureNew.generateMipmaps = true;
                            textureNew.minFilter = THREE.NearestMipMapNearestFilter;
                            textureNew.magFilter = THREE.NearestFilter;
                            textureNew.wrapS = textureNew.wrapT = THREE.RepeatWrapping;
                            textureNew.repeat.set(1, 0.5);
                            materialNew.map = textureNew;
                            materialTmp = materialNew;
                            this._materialsHalfMap[this.cubeOptions.key] = materialTmp;
                        }
                    }
                    break;
                case GeometryType.Flower1Cube:
                    if (Number(keyIndex) === 0) {
                        materialTmp.transparent = true;
                        // materialTmp.depthTest=false;//穿所有平面，一直可见
                        materialTmp.depthWrite = false;//交叉平面透明部分不互相遮挡
                        materialTmp.side = THREE.DoubleSide;
                    } else {
                        materialTmp.transparent = true;
                        materialTmp.opacity = 0;
                    }
                    break;
            }
            this._materials.push(materialTmp);
        }
        if (geometryType === GeometryType.Flower1Cube) {
            if (this._materials.length <= 1) {
                this._materials.push(new THREE.MeshBasicMaterial({
                    transparent: true,
                    opacity: 0,
                }));
            }
        }
        this._materialsMap[this.cubeOptions.key] = this._materials;
    };


    //构造方块
    buildCube(x?: number, y?: number, z?: number, defaultCube?: string | CubeOption, rotateX?: number, rotateY?: number, rotateZ?: number) {
        let position = {x: x, y: y, z: z};
        let rotation = {rotateX: rotateX, rotateY: rotateY, rotateZ: rotateZ};
        if (defaultCube) {
            if (typeof (defaultCube) === "string") {
                defaultCube = DefaultCube[defaultCube];
            }
            this.cubeOptions = defaultCube;
            this.buildGeometry();
            this.buildMaterials();
        }
        defaultCube = defaultCube as CubeOption
        position.x = position.x || 0;
        position.y = position.y || 0;
        position.z = position.z || 0;
        let mesh = new THREE.Mesh(
            this._geometry,
            this._materials
        );
        mesh.receiveShadow = mesh.castShadow = GlobalSetting.enableShadow;
        //新方块中心位置
        {
            mesh.position.x = position.x;
            mesh.position.y = position.y;
            mesh.position.z = position.z;
            mesh.userData = {
                saveInfo: [x, y, z, this.cubeOptions.key, rotateX, rotateY, rotateZ],
                fullCubePosition: {
                    x: mesh.position.x,
                    y: mesh.position.y,
                    z: mesh.position.z,
                },
                cubeTypeKey: this.cubeOptions.key,
                cubeAttributes: this.cubeOptions.cubeAttributes
            };
        }
        if (rotation.rotateX && defaultCube?.meshParameters?.rotateEnable?.x) {
            mesh.rotateX(rotation.rotateX * Math.PI / 180);
        }
        if (rotation.rotateY && defaultCube?.meshParameters?.rotateEnable?.y) {
            mesh.rotateY(rotation.rotateY * Math.PI / 180);
        }
        if (rotation.rotateZ && defaultCube?.meshParameters?.rotateEnable?.z) {
            mesh.rotateZ(rotation.rotateZ * Math.PI / 180);
        }
        mesh.name = this.cubeOptions.key + "(" + position.x + "," + position.y + "," + position.z + ")";
        return mesh;
    }
}
