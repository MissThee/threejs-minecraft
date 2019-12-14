import * as THREE from 'three';

export default class CubeFactory {
    constructor(cubeType, customCubeImages) {
        this.cubeType = cubeType;
        this.customCubeImages = customCubeImages;
        this._images = [];//实际使用的贴图
        this._materials = [];
        this._cubeSize = 1;//方块边长，默认1
        CubeFactory.customCubeImages = [];//自定义贴图，仅在cubeType为“custom”时生效
        //预设方块信息
        CubeFactory.DefaultCubeInfo = {
            GrassDirt: {
                images: [
                    './assets/img/blocks/grass_side.png',
                    './assets/img/blocks/grass_side.png',
                    './assets/img/blocks/grass_top_green.png',
                    './assets/img/blocks/dirt.png',
                    './assets/img/blocks/grass_side.png',
                    './assets/img/blocks/grass_side.png',
                ],
                material: {}
            },
            Cloud: {
                images: [
                    './assets/img/blocks/grass_side.png',
                    './assets/img/blocks/grass_side.png',
                    './assets/img/blocks/grass_top_green.png',
                    './assets/img/blocks/dirt.png',
                    './assets/img/blocks/grass_side.png',
                    './assets/img/blocks/grass_side.png',
                ],
                material: {
                    transparent: true,//透明
                    opacity: 0.2,//透明度
                }
            }
        };
    }



    //初始化images
    initImages() {
        if (this._images && this._images.length !== 0) {
            return;
        }
        if (this.cubeType === "Custom") {
            this._images = this.customCubeImages;
        } else if (CubeFactory.DefaultCubeInfo[this.cubeType]) {
            this._images = CubeFactory.DefaultCubeInfo[this.cubeType].images;
        } else {
            throw "unknown cubeType";
        }
    };

    //初始化材质
    initMaterials() {
        if (this._materials && this._materials.length !== 0) {
            return;
        }
        let textureLoader = new THREE.TextureLoader();
        for (let i = 0; i < 6; ++i) {
            let texture = textureLoader.load(this._images[i]);
            texture.generateMipmaps = false;
            texture.magFilter = THREE.NearestFilter;
            texture.minFilter = THREE.NearestFilter;
            let extraOptions = {};
            if (CubeFactory.DefaultCubeInfo[this.cubeType]) {
                extraOptions = CubeFactory.DefaultCubeInfo[this.cubeType].material;
            }
            this._materials.push(
                new THREE.MeshLambertMaterial({
                    map: texture,
                    fog: true,//当前材质是否受到全局雾化效果器影响
                    ...extraOptions
                }));
        }
    };

    //构造方块
    buildCube(x, y, z) {
        x = x || 0;
        y = y || 0;
        z = z || 0;
        let cube = new THREE.Mesh(new THREE.CubeGeometry(this._cubeSize, this._cubeSize, this._cubeSize), this._materials);
        // cube.receiveShadow = cube.castShadow = true;
        cube.position.x = x + this._cubeSize / 2;
        cube.position.y = y + this._cubeSize / 2;
        cube.position.z = z + this._cubeSize / 2;
        cube.name = "GrassCube(" + x + "," + y + "," + z + ")";
        return cube;
    }

    create(x, y, z) {
        this.initImages();
        this.initMaterials();
        return this.buildCube(x, y, z);
    }
}