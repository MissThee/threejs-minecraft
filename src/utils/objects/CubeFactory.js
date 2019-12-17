import {TextureLoader, NearestFilter, Mesh, MeshLambertMaterial, CubeGeometry} from "three";

const THREE = {TextureLoader, NearestFilter, Mesh, MeshLambertMaterial, CubeGeometry};
export default class CubeFactory {
    constructor(cubeType) {
        //预设方块信息
        CubeFactory.DefaultCubeInfo = {
            GrassDirt: {
                images: [
                    './assets/img/blocks/grass_side.png',
                    './assets/img/blocks/grass_top_green.png',
                    './assets/img/blocks/dirt.png',
                ],
                imageSet: [0, 0, 1, 2, 0, 0],
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
                imageSet: [0, 0, 1, 2, 0, 0],
                material: {
                    transparent: true,//透明
                    opacity: 0.2,//透明度
                }
            }
        };
        if(Object.keys(CubeFactory.DefaultCubeInfo).indexOf(cubeType)===-1){
            throw "unknown cubeType"
        }
        this.cubeType = cubeType;
        this._materials = [];
        this._geometry = undefined;
        this._cubeSize = 1;//方块边长，默认1
    }

    //初始化材质
    initMaterials() {
        if (this._materials && this._materials.length !== 0) {
            return;
        }
        let textureLoader = new THREE.TextureLoader();
        let extraOptions = {};
        if (CubeFactory.DefaultCubeInfo[this.cubeType]) {
            extraOptions = CubeFactory.DefaultCubeInfo[this.cubeType].material;
        }
        let textureList = [];
        for (let imageUrl of CubeFactory.DefaultCubeInfo[this.cubeType].images) {
            let texture = textureLoader.load(imageUrl);
            texture.generateMipmaps = false;
            texture.minFilter = THREE.NearestFilter; //minFilter属性：指定纹理如何缩小。默认值：THREE.LinearMipMapLinearFilter。 THREE.NearestFilter 贴图像素化
            texture.magFilter = THREE.NearestFilter;
            textureList.push(texture);
        }
        let materialList = [];
        for (let texture of textureList) {
            materialList.push(
                new THREE.MeshLambertMaterial({
                    map: texture,
                    fog: true,//当前材质是否受到全局雾化效果器影响
                    ...extraOptions
                })
            );
        }
        for (let key of CubeFactory.DefaultCubeInfo[this.cubeType].imageSet) {
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
        // cube.receiveShadow = cube.castShadow = true;
        cube.position.x = x + this._cubeSize / 2;
        cube.position.y = y + this._cubeSize / 2;
        cube.position.z = z + this._cubeSize / 2;
        cube.name = "GrassCube(" + x + "," + y + "," + z + ")";
        return cube;
    }

    create(x, y, z) {
        this.initMaterials();
        this.initGeometry();
        return this.buildCube(x, y, z);
    }
}