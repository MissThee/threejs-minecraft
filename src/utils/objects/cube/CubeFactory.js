import * as THREE from 'three';
import GlobalSetting from "../../setting/GlobalSetting";

export default class CubeFactory {
    constructor(defaultCube) {
        if (CubeFactory._instanceObj && CubeFactory._instanceObj[defaultCube.key]) {
            return CubeFactory._instanceObj[defaultCube.key];
        }
        this.cubeOptions = defaultCube;
        this._materials = [];
        this._geometry = undefined;
        this._cubeSize = 1;//方块边长，默认1
        this.initMaterials();
        this.initGeometry();
        CubeFactory._instanceObj = {
            [defaultCube.key]: this
        }
    }

    //初始化材质
    initMaterials() {
        if (this._materials && this._materials.length !== 0) {
            return;
        }
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
        for (let texture of textureList) {
            materialList.push(
                new THREE.MeshLambertMaterial({
                    // color:0x4F9C1A,
                    map: texture,
                    vertexColors: THREE.VertexColors,
                    side: THREE.DoubleSide,
                    fog: true,//当前材质是否受到全局雾化效果器影响
                    ...this.cubeOptions.materialParameters
                })
            );
        }
        for (let key of this.cubeOptions.imageSet) {
            this._materials.push(materialList[key]);
        }
    };

    initGeometry() {
        if (this._geometry) {
            return;
        }
        this._geometry = new THREE.CubeGeometry(this._cubeSize, this._cubeSize, this._cubeSize)
    }

    //构造方块
    buildCube(x, y, z) {
        x = x || 0;
        y = y || 0;
        z = z || 0;
        let cube = new THREE.Mesh(
            this._geometry,
            this._materials
            // new THREE.MeshLambertMaterial({color: 0x00cc00})
        );
        cube.receiveShadow = cube.castShadow = GlobalSetting.enableShadow;
        cube.position.x = x + this._cubeSize / 2;
        cube.position.y = y + this._cubeSize / 2;
        cube.position.z = z + this._cubeSize / 2;
        cube.name = "GrassCube(" + x + "," + y + "," + z + ")";
        return cube;
    }
}