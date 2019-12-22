import * as THREE from 'three';
import GlobalSetting from "../../setting/GlobalSetting";

export default class CubeFactory {
    constructor(defaultCube) {
        if (CubeFactory._instanceObj && CubeFactory._instanceObj[defaultCube.key]) {
            return CubeFactory._instanceObj[defaultCube.key];
        }
        this.cubeOptions = defaultCube;
        this._materials = [];
        this._materialsMap = [];
        this._geometry = undefined;
        this._cubeSize = 1;//方块边长，默认1
        this.initMaterials();
        this.initGeometry();
        CubeFactory._instanceObj = {
            [defaultCube.key]: this
        }
    }

    //初始化形状
    initGeometry() {
        if (this._geometry) {
            return;
        }
        this._geometry = new THREE.CubeGeometry(this._cubeSize, this._cubeSize, this._cubeSize)
    }

    //初始化材质
    initMaterials() {
        if (!this.cubeOptions.key) {
            throw '"key" in cubeType is undefined'
        }
        if (this._materialsMap) {
            this._materials = this._materialsMap[this.cubeOptions.key];
        }
        if (this._materials && this._materials.length !== 0) {
            return;
        }
        this._materials = [];
        let textureLoader = new THREE.TextureLoader();
        let textureList = [];
        for (let imageUrl of this.cubeOptions.images) {
            let texture = textureLoader.load(imageUrl);
            texture.generateMipmaps = true;//生成纹理，用于相关滤镜，根据远近自动调整贴图质量
            texture.minFilter = THREE.NearestMipMapNearestFilter;//minFilter属性：指定纹理如何缩小。默认值：THREE.LinearMipMapLinearFilter。
            texture.magFilter = THREE.NearestFilter;//magFilter属性：指定纹理如何放大。THREE.NearestFilter 贴图像素化
            textureList.push(texture);
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
        for (let key of this.cubeOptions.imageSet) {
            this._materials.push(materialList[key]);
        }
        this._materialsMap[this.cubeOptions.key] = this._materials;
    };


    //构造方块
    buildCube(x, y, z, defaultCube, rotateX, rotateY, rotateZ) {
        if (defaultCube) {
            this.cubeOptions = defaultCube;
            this.initMaterials();
        }
        x = x || 0;
        y = y || 0;
        z = z || 0;
        let mesh = new THREE.Mesh(
            this._geometry,
            this._materials
            // new THREE.MeshLambertMaterial({color: 0x00cc00})
        );
        mesh.receiveShadow = mesh.castShadow = GlobalSetting.enableShadow;
        mesh.position.x = x + this._cubeSize / 2;
        mesh.position.y = y + this._cubeSize / 2;
        mesh.position.z = z + this._cubeSize / 2;
        if (rotateX && (defaultCube.meshParameters && defaultCube.meshParameters.rotateEnable && defaultCube.meshParameters.rotateEnable.x)) {
            mesh.rotateX(rotateX * Math.PI / 180);
        }
        if (rotateY && (defaultCube.meshParameters && defaultCube.meshParameters.rotateEnable && defaultCube.meshParameters.rotateEnable.y)) {
            mesh.rotateY(rotateY * Math.PI / 180);
        }
        if (rotateZ && (defaultCube.meshParameters && defaultCube.meshParameters.rotateEnable && defaultCube.meshParameters.rotateEnable.z)) {
            mesh.rotateZ(rotateZ * Math.PI / 180);
        }
        mesh.name = this.cubeOptions.key + "(" + x + "," + y + "," + z + ")";
        return mesh;
    }
}