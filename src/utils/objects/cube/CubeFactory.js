import * as THREE from 'three';
import GlobalSetting from "../../setting/GlobalSetting";
import GeometryType from "./GeometryType";
import ImagePoint from "./ImagePoint";
import {MeshLambertMaterial} from "three";
import {MeshBasicMaterial} from "three";


export default class CubeFactory {
    constructor(defaultCube) {
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
                geom = new THREE.CubeGeometry(this._cubeSize, this._cubeSize, this._cubeSize);
                break;
            case GeometryType.HalfCube:
                geom = new THREE.CubeGeometry(this._cubeSize, this._cubeSize / 2, this._cubeSize);
                break;
            case GeometryType.StairsCube:
                geom = new THREE.Geometry();
                geom.vertices = [//顶点
                    new THREE.Vector3(width / 2, -width / 2, width / 2),
                    new THREE.Vector3(width / 2, -width / 2, -width / 2),
                    new THREE.Vector3(-width / 2, -width / 2, -width / 2),
                    new THREE.Vector3(-width / 2, -width / 2, width / 2),

                    new THREE.Vector3(width / 2, 0, width / 2),
                    new THREE.Vector3(width / 2, 0, -width / 2),
                    new THREE.Vector3(0, 0, -width / 2),
                    new THREE.Vector3(0, 0, width / 2),

                    new THREE.Vector3(0, width / 2, width / 2),
                    new THREE.Vector3(0, width / 2, -width / 2),
                    new THREE.Vector3(-width / 2, width / 2, -width / 2),
                    new THREE.Vector3(-width / 2, width / 2, width / 2),
                ];
                geom.faces = [
                    //底面
                    new THREE.Face3(0, 2, 1),
                    new THREE.Face3(0, 3, 2),
                    //前面下半
                    new THREE.Face3(0, 1, 5),
                    new THREE.Face3(0, 5, 4),
                    //前面上半
                    new THREE.Face3(7, 6, 9),
                    new THREE.Face3(7, 9, 8),
                    //上面前半
                    new THREE.Face3(4, 5, 6),
                    new THREE.Face3(4, 6, 7),
                    //上面后半
                    new THREE.Face3(8, 9, 10),
                    new THREE.Face3(8, 10, 11),
                    //后面
                    new THREE.Face3(2, 3, 11),
                    new THREE.Face3(2, 11, 10),
                    //左
                    new THREE.Face3(7, 8, 11),
                    new THREE.Face3(7, 11, 3),
                    new THREE.Face3(7, 3, 0),
                    new THREE.Face3(7, 0, 4),
                    //右
                    new THREE.Face3(6, 10, 9),
                    new THREE.Face3(6, 2, 10),
                    new THREE.Face3(6, 1, 2),
                    new THREE.Face3(6, 5, 1),
                ];
                //底面
                geom.faceVertexUvs[0][0] = ([imagePoint[0][0], imagePoint[2][2], imagePoint[0][2]]);
                geom.faceVertexUvs[0][1] = ([imagePoint[0][0], imagePoint[2][0], imagePoint[2][2]]);
                //前面下半
                geom.faceVertexUvs[0][2] = ([imagePoint[0][0], imagePoint[0][2], imagePoint[1][2]]);
                geom.faceVertexUvs[0][3] = ([imagePoint[0][0], imagePoint[1][2], imagePoint[1][0]]);
                //前面上半
                geom.faceVertexUvs[0][4] = geom.faceVertexUvs[0][2];
                geom.faceVertexUvs[0][5] = geom.faceVertexUvs[0][3];
                //上面前半
                geom.faceVertexUvs[0][6] = geom.faceVertexUvs[0][2];
                geom.faceVertexUvs[0][7] = geom.faceVertexUvs[0][3];
                //上面后半
                geom.faceVertexUvs[0][8] = geom.faceVertexUvs[0][2];
                geom.faceVertexUvs[0][9] = geom.faceVertexUvs[0][3];
                //后面
                geom.faceVertexUvs[0][10] = ([imagePoint[0][0], imagePoint[0][2], imagePoint[2][2]]);
                geom.faceVertexUvs[0][11] = ([imagePoint[0][0], imagePoint[2][2], imagePoint[2][0]]);
                //左
                geom.faceVertexUvs[0][12] = ([imagePoint[1][1], imagePoint[2][1], imagePoint[2][0]]);
                geom.faceVertexUvs[0][13] = ([imagePoint[1][1], imagePoint[2][0], imagePoint[0][0]]);
                geom.faceVertexUvs[0][14] = ([imagePoint[1][1], imagePoint[0][0], imagePoint[0][2]]);
                geom.faceVertexUvs[0][15] = ([imagePoint[1][1], imagePoint[0][2], imagePoint[1][2]]);
                //右
                geom.faceVertexUvs[0][16] = ([imagePoint[1][1], imagePoint[2][0], imagePoint[2][1]]);
                geom.faceVertexUvs[0][17] = ([imagePoint[1][1], imagePoint[0][0], imagePoint[2][0]]);
                geom.faceVertexUvs[0][18] = ([imagePoint[1][1], imagePoint[0][2], imagePoint[0][0]]);
                geom.faceVertexUvs[0][19] = ([imagePoint[1][1], imagePoint[1][2], imagePoint[0][2]]);
                geom.computeFaceNormals();//计算面的法向量。可以在点击时判断出face的法向量。不使用此方法，则点击时获得的face法向量xyz均为0,。
                this._geometry = geom;
                break;
            case GeometryType.Flower1Cube:
                geom = new THREE.Geometry();
                geom.vertices = [//顶点
                    new THREE.Vector3(innerWidth / 2, -width / 2, innerWidth / 2),
                    new THREE.Vector3(innerWidth / 2, -width / 2, -innerWidth / 2),
                    new THREE.Vector3(-innerWidth / 2, -width / 2, -innerWidth / 2),
                    new THREE.Vector3(-innerWidth / 2, -width / 2, innerWidth / 2),

                    new THREE.Vector3(innerWidth / 2, width / 2, innerWidth / 2),
                    new THREE.Vector3(innerWidth / 2, width / 2, -innerWidth / 2),
                    new THREE.Vector3(-innerWidth / 2, width / 2, -innerWidth / 2),
                    new THREE.Vector3(-innerWidth / 2, width / 2, innerWidth / 2),

                    new THREE.Vector3(width / 2, -width / 2, width / 2),
                    new THREE.Vector3(width / 2, -width / 2, -width / 2),
                    new THREE.Vector3(-width / 2, -width / 2, -width / 2),
                    new THREE.Vector3(-width / 2, -width / 2, width / 2),

                    new THREE.Vector3(width / 2, width / 2, width / 2),
                    new THREE.Vector3(width / 2, width / 2, -width / 2),
                    new THREE.Vector3(-width / 2, width / 2, -width / 2),
                    new THREE.Vector3(-width / 2, width / 2, width / 2),

                ];
                geom.faces = [
                    //内部交叉面
                    new THREE.Face3(0, 2, 6),
                    new THREE.Face3(0, 6, 4),
                    new THREE.Face3(3, 1, 5),
                    new THREE.Face3(3, 5, 7),
                    //外部方块面
                    new THREE.Face3(8, 11, 10),
                    new THREE.Face3(8, 10, 9),
                    new THREE.Face3(8, 15, 11),
                    new THREE.Face3(8, 12, 15),
                    new THREE.Face3(8, 9, 13),
                    new THREE.Face3(8, 13, 12),
                    new THREE.Face3(14, 12, 13),
                    new THREE.Face3(14, 15, 12),
                    new THREE.Face3(14, 13, 9),
                    new THREE.Face3(14, 9, 10),
                    new THREE.Face3(14, 11, 15),
                    new THREE.Face3(14, 10, 11),
                ];

                for (let faceIndex in geom.faces) {
                    if (faceIndex < 4) {
                        geom.faces [faceIndex].materialIndex = 0;
                    } else {
                        geom.faces [faceIndex].materialIndex = 1;
                    }
                }
                geom.faceVertexUvs[0][0] = [imagePoint[0][0], imagePoint[0][2], imagePoint[2][2]];
                geom.faceVertexUvs[0][1] = [imagePoint[0][0], imagePoint[2][2], imagePoint[2][0]];
                geom.faceVertexUvs[0][2] = geom.faceVertexUvs[0][0];
                geom.faceVertexUvs[0][3] = geom.faceVertexUvs[0][1];
                for (let i = 4; i < 16; i++) {
                    geom.faceVertexUvs[0][i] = [new THREE.Vector2(), new THREE.Vector2(),  new THREE.Vector2() ]
                }
                geom.computeFaceNormals();
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
                this._materials.push(new MeshBasicMaterial({
                    transparent: true,
                    opacity: 0,
                }));
            }
        }
        this._materialsMap[this.cubeOptions.key] = this._materials;
    };


    //构造方块
    buildCube(x, y, z, defaultCube, rotateX, rotateY, rotateZ) {
        let position = {x: x, y: y, z: z};
        let rotation = {rotateX: rotateX, rotateY: rotateY, rotateZ: rotateZ};
        if (defaultCube) {
            this.cubeOptions = defaultCube;
            this.buildGeometry();
            this.buildMaterials();
        }
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
                fullCubePosition: {
                    x: mesh.position.x,
                    y: mesh.position.y,
                    z: mesh.position.z,
                },
                cubeTypeKey: this.cubeOptions.key,
                cubeAttributes: this.cubeOptions.cubeAttributes
            };
        }
        if (rotation.rotateX && (defaultCube.meshParameters && defaultCube.meshParameters.rotateEnable && defaultCube.meshParameters.rotateEnable.x)) {
            mesh.rotateX(rotation.rotateX * Math.PI / 180);
        }
        if (rotation.rotateY && (defaultCube.meshParameters && defaultCube.meshParameters.rotateEnable && defaultCube.meshParameters.rotateEnable.y)) {
            mesh.rotateY(rotation.rotateY * Math.PI / 180);
        }
        if (rotation.rotateZ && (defaultCube.meshParameters && defaultCube.meshParameters.rotateEnable && defaultCube.meshParameters.rotateEnable.z)) {
            mesh.rotateZ(rotation.rotateZ * Math.PI / 180);
        }
        mesh.name = this.cubeOptions.key + "(" + position.x + "," + position.y + "," + position.z + ")";
        return mesh;
    }
}