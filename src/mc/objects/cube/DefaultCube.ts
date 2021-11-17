//预设方块信息
import GeometryType from "./GeometryType";
import CubeImage from '../../image/CubeImage';

export interface CubeOption {
    key: string,
    images: string[],
    imageSet: number[],
    materialParameters: Record<string, any>,
    materialParametersForOneList: Record<string, any>[]
    meshParameters?: {
        rotateEnable: {
            x: boolean,
            y: boolean,
            z: boolean,
        }
    }
    cubeAttributes: {
        isPenetrable: boolean,
        isIndestructible: boolean,
        geometryType: GeometryType,
    }
}

const defaultCubes: Record<string, CubeOption> = {
    grassdirt: {
        key: 'grassdirt',//设置和对象key一样
        images: [//贴图路径
            CubeImage.grass_side,
            CubeImage.grass_top,
            CubeImage.dirt,
        ],
        imageSet: [0, 0, 1, 2, 0, 0],//六面贴图使用的images图片下标
        materialParameters: {},//THREE.MeshXxxMaterial 对象参数，六面都影响
        materialParametersForOneList: [//THREE.MeshXxxMaterial 对象参数，只影响对应的一个面
            {},
            {color: 0xB1FB6C},
        ],
        meshParameters: {
            rotateEnable: {//放置方块时，旋转辅助参数，是否可在对应轴上旋转
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,//不能碰撞。false-能踩能撞
            isIndestructible: false,//不能销毁。false-左键点击能消除
            geometryType: GeometryType.Cube,//是半砖。cube-砖。halfCube-半砖，可以在一个1x1x1内叠加另一个半砖
        },
    },
    test: {
        key: 'test',
        images: [
            CubeImage.test1,
            CubeImage.test2,
            CubeImage.test3,
            CubeImage.test4,
            CubeImage.test5,
            CubeImage.test6,
        ],
        imageSet: [0, 1, 2, 3, 4, 5],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    grass: {
        key: 'grass',
        images: [
            CubeImage.grass_top,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {color: 0xB1FB6C},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    dirt: {
        key: 'dirt',
        images: [
            CubeImage.dirt
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    dirt_podzol: {
        key: 'dirt_podzol',
        images: [
            CubeImage.dirt_podzol_side,
            CubeImage.dirt_podzol_top,
            CubeImage.dirt,
        ],
        imageSet: [0, 0, 1, 2, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    redstone_block: {
        key: 'redstone_block',
        images: [
            CubeImage.redstone_block,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    diamond_block: {
        key: 'diamond_block',
        images: [
            CubeImage.diamond_block
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    // Cloud: {
    //     key: 'Cloud',
    //     images: [
    //         CubeImage.grass_side,
    //         CubeImage.grass_top_green,
    //         CubeImage.dirt,
    //     ],
    //     imageSet: [0, 0, 1, 2, 0, 0],
    //     materialParameters: {
    //         transparent: true,//透明
    //         opacity: 0.2,//透明度
    //     }
    // },
    cobblestone: {
        key: 'cobblestone',
        images: [
            CubeImage.cobblestone,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    cobblestone_mossy: {
        key: 'cobblestone_mossy',
        images: [
            CubeImage.cobblestone_mossy,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    stone: {
        key: 'stone',
        images: [
            CubeImage.stone,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    stone_slab: {
        key: 'stone_slab',
        images: [
            CubeImage.stone_slab_side,
            CubeImage.stone_slab_top,
        ],
        imageSet: [0, 0, 1, 1, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    stonebrick: {
        key: 'stonebrick',
        images: [
            CubeImage.stonebrick,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    stonebrick_carved: {
        key: 'stonebrick_carved',
        images: [
            CubeImage.stonebrick_carved,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    stonebrick_cracked: {
        key: 'stonebrick_cracked',
        images: [
            CubeImage.stonebrick_cracked,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    stonebrick_mossy: {
        key: 'stonebrick_mossy',
        images: [
            CubeImage.stonebrick_mossy
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    brick: {
        key: 'brick',
        images: [
            CubeImage.brick
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    planks_birch: {
        key: 'planks_birch',
        images: [
            CubeImage.planks_birch
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    planks_acacia: {
        key: 'planks_acacia',
        images: [
            CubeImage.planks_acacia
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    planks_jungle: {
        key: 'planks_jungle',
        images: [
            CubeImage.planks_jungle,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    planks_oak: {
        key: 'planks_oak',
        images: [
            CubeImage.planks_oak
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    planks_spruce: {
        key: 'planks_spruce',
        images: [
            CubeImage.planks_spruce
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    // reeds: {
    //     key: 'reeds',
    //     images: [
    //        CubeImage.reeds,
    //     ],
    //     imageSet: [0, 0, 0, 0, 0, 0],
    //     materialParameters: {
    //         transparent: true,
    //         side: THREE.DoubleSide,
    //     },
    //     materialParametersForOneList:[]
    // },
    log_acacia: {
        key: 'log_acacia',
        images: [
            CubeImage.log_acacia,
            CubeImage.log_acacia_top,
        ],
        imageSet: [0, 0, 1, 1, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    leaves_acacia: {
        key: 'leaves_acacia',
        images: [
            CubeImage.leaves_acacia
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            color: 0x89B95C,
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    leaves_acacia_opaque: {
        key: 'leaves_acacia_opaque',
        images: [
            CubeImage.leaves_acacia_opaque,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            color: 0x89B95C,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    log_birch: {
        key: 'log_birch',
        images: [
            CubeImage.log_birch,
            CubeImage.log_birch_top,
        ],
        imageSet: [0, 0, 1, 1, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    leaves_birch: {
        key: 'leaves_birch',
        images: [
            CubeImage.leaves_birch,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            color: 0x89B95C,
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    leaves_birch_opaque: {
        key: 'leaves_birch_opaque',
        images: [
            CubeImage.leaves_birch_opaque
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            color: 0x89B95C,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    log_jungle: {
        key: 'log_jungle',
        images: [
            CubeImage.log_jungle,
            CubeImage.log_jungle_top,
        ],
        imageSet: [0, 0, 1, 1, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    leaves_jungle: {
        key: 'leaves_jungle',
        images: [
            CubeImage.leaves_jungle
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            color: 0x89B95C,
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    leaves_jungle_opaque: {
        key: 'leaves_jungle_opaque',
        images: [
            CubeImage.leaves_jungle_opaque,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            color: 0x89B95C,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    log_oak: {
        key: 'log_oak',
        images: [
            CubeImage.log_oak,
            CubeImage.log_oak_top,
        ],
        imageSet: [0, 0, 1, 1, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    leaves_oak: {
        key: 'leaves_oak',
        images: [
            CubeImage.leaves_oak,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            color: 0x89B95C,
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    leaves_oak_opaque: {
        key: 'leaves_oak_opaque',
        images: [
            CubeImage.leaves_oak_opaque,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            color: 0x89B95C,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },

    log_spruce: {
        key: 'log_spruce',
        images: [
            CubeImage.log_spruce,
            CubeImage.log_spruce_top,
        ],
        imageSet: [0, 0, 1, 1, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    leaves_spruce: {
        key: 'leaves_spruce',
        images: [
            CubeImage.leaves_spruce,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            color: 0x89B95C,
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    leaves_spruce_opaque: {
        key: 'leaves_spruce_opaque',
        images: [
            CubeImage.leaves_spruce_opaque,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            color: 0x89B95C,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    glass: {
        key: 'glass',
        images: [
            CubeImage.glass,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    glass_black: {
        key: 'glass_black',
        images: [
            CubeImage.glass_black,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    glass_blue: {
        key: 'glass_blue',
        images: [
            CubeImage.glass_blue,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    glass_brown: {
        key: 'glass_brown',
        images: [
            CubeImage.glass_brown
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    glass_cyan: {
        key: 'glass_cyan',
        images: [
            CubeImage.glass_cyan
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    glass_gray: {
        key: 'glass_gray',
        images: [
            CubeImage.glass_gray
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    glass_green: {
        key: 'glass_green',
        images: [
            CubeImage.glass_green
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    glass_light_blue: {
        key: 'glass_light_blue',
        images: [
            CubeImage.glass_light_blue
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    glass_lime: {
        key: 'glass_lime',
        images: [
            CubeImage.glass_lime
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    glass_magenta: {
        key: 'glass_magenta',
        images: [
            CubeImage.glass_magenta
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    glass_orange: {
        key: 'glass_orange',
        images: [
            CubeImage.glass_orange
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    glass_pink: {
        key: 'glass_pink',
        images: [
            CubeImage.glass_pink
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    glass_purple: {
        key: 'glass_purple',
        images: [
            CubeImage.glass_purple
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    glass_red: {
        key: 'glass_red',
        images: [
            CubeImage.glass_red
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    glass_silver: {
        key: 'glass_silver',
        images: [
            CubeImage.glass_silver
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    glass_white: {
        key: 'glass_white',
        images: [
            CubeImage.glass_white
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    glass_yellow: {
        key: 'glass_yellow',
        images: [
            CubeImage.glass_yellow
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    glowstone: {
        key: 'glowstone',
        images: [
            CubeImage.glowstone
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    gold_block: {
        key: 'gold_block',
        images: [
            CubeImage.gold_block,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    gold_ore: {
        key: 'gold_ore',
        images: [
            CubeImage.gold_ore
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    clay: {
        key: 'clay',
        images: [
            CubeImage.clay,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    hardened_clay: {
        key: 'hardened_clay',
        images: [
            CubeImage.hardened_clay,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    hardened_clay_stained_black: {
        key: 'hardened_clay_stained_black',
        images: [
            CubeImage.hardened_clay_stained_black,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    hardened_clay_stained_blue: {
        key: 'hardened_clay_stained_blue',
        images: [
            CubeImage.hardened_clay_stained_blue,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    hardened_clay_stained_brown: {
        key: 'hardened_clay_stained_brown',
        images: [
            CubeImage.hardened_clay_stained_brown,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    hardened_clay_stained_cyan: {
        key: 'hardened_clay_stained_cyan',
        images: [
            CubeImage.hardened_clay_stained_cyan,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    hardened_clay_stained_gray: {
        key: 'hardened_clay_stained_gray',
        images: [
            CubeImage.hardened_clay_stained_gray,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    hardened_clay_stained_green: {
        key: 'hardened_clay_stained_green',
        images: [
            CubeImage.hardened_clay_stained_green,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    hardened_clay_stained_light_blue: {
        key: 'hardened_clay_stained_light_blue',
        images: [
            CubeImage.hardened_clay_stained_light_blue,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    hardened_clay_stained_lime: {
        key: 'hardened_clay_stained_lime',
        images: [
            CubeImage.hardened_clay_stained_lime,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    hardened_clay_stained_magenta: {
        key: 'hardened_clay_stained_magenta',
        images: [
            CubeImage.hardened_clay_stained_magenta,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    hardened_clay_stained_orange: {
        key: 'hardened_clay_stained_orange',
        images: [
            CubeImage.hardened_clay_stained_orange,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    hardened_clay_stained_pink: {
        key: 'hardened_clay_stained_pink',
        images: [
            CubeImage.hardened_clay_stained_pink,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    hardened_clay_stained_purple: {
        key: 'hardened_clay_stained_purple',
        images: [
            CubeImage.hardened_clay_stained_purple,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    hardened_clay_stained_red: {
        key: 'hardened_clay_stained_red',
        images: [
            CubeImage.hardened_clay_stained_red,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    hardened_clay_stained_silver: {
        key: 'hardened_clay_stained_silver',
        images: [
            CubeImage.hardened_clay_stained_silver,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    hardened_clay_stained_white: {
        key: 'hardened_clay_stained_white',
        images: [
            CubeImage.hardened_clay_stained_white,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    hardened_clay_stained_yellow: {
        key: 'hardened_clay_stained_yellow',
        images: [
            CubeImage.hardened_clay_stained_yellow,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            transparent: true,
        },
        materialParametersForOneList: [],
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    // ice: {
    //     key: 'ice',
    //     images: [
    //         CubeImage.ice,
    //     ],
    //     imageSet: [0, 0, 0, 0, 0, 0],
    //     materialParameters: {
    //         transparent:true
    //     },
    //     materialParametersForOneList: [
    //     ],
    //     meshParameters: {
    //         rotateEnable: {
    //             x: false,
    //             y: false,
    //             z: false,
    //         }
    //     },
    // },
    melon: {
        key: 'melon',
        images: [
            CubeImage.melon_side,
            CubeImage.melon_top,
        ],
        imageSet: [0, 0, 1, 1, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    pumpkin_face_off: {
        key: 'pumpkin_face_off',
        images: [
            CubeImage.pumpkin_face_off,
            CubeImage.pumpkin_side,
            CubeImage.pumpkin_top,
        ],
        imageSet: [0, 1, 2, 2, 1, 1],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    pumpkin_face_on: {
        key: 'pumpkin_face_on',
        images: [
            CubeImage.pumpkin_face_on,
            CubeImage.pumpkin_side,
            CubeImage.pumpkin_top,
        ],
        imageSet: [0, 1, 2, 2, 1, 1],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    test_half: {
        key: 'test_half',
        images: [''],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {
            color: 0xFFFFFF,
            transparent: true,//透明
            opacity: 0.8,//透明度
        },
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.HalfCube,
        },
    },
    stone_slab_half: {
        key: 'stone_slab_half',
        images: [
            CubeImage.stone_slab_side,
            CubeImage.stone_slab_top,
        ],
        imageSet: [0, 0, 1, 1, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.HalfCube,
        },
    },
    brick_half: {
        key: 'brick_half',
        images: [
            CubeImage.brick,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.HalfCube,
        },
    },
    planks_birch_half: {
        key: 'planks_birch_half',
        images: [
            CubeImage.planks_birch,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.HalfCube,
        },
    },
    planks_acacia_half: {
        key: 'planks_acacia_half',
        images: [
            CubeImage.planks_acacia,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.HalfCube,
        },
    },
    planks_jungle_half: {
        key: 'planks_jungle_half',
        images: [
            CubeImage.planks_jungle,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.HalfCube,
        },
    },
    planks_oak_half: {
        key: 'planks_oak_half',
        images: [
            CubeImage.planks_oak,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.HalfCube,
        },
    },
    planks_spruce_half: {
        key: 'planks_spruce_half',
        images: [
            CubeImage.planks_spruce,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.HalfCube,
        },
    },
    cobblestone_stairs: {
        key: 'cobblestone_stairs',
        images: [
            CubeImage.cobblestone,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.StairsCube,
        },
    },
    cobblestone_mossy_stairs: {
        key: 'cobblestone_mossy_stairs',
        images: [
            CubeImage.cobblestone_mossy,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.StairsCube,
        },
    },
    stone_stairs: {
        key: 'stone_stairs',
        images: [
            CubeImage.stone,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.StairsCube,
        },
    },
    stone_slab_stairs: {
        key: 'stone_slab_stairs',
        images: [
            CubeImage.stone_slab_side,
            CubeImage.stone_slab_top,
        ],
        imageSet: [0, 0, 1, 1, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.StairsCube,
        },
    },
    brick_stairs: {
        key: 'brick_stairs',
        images: [
            CubeImage.brick,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.StairsCube,
        },
    },
    planks_birch_stairs: {
        key: 'planks_birch_stairs',
        images: [
            CubeImage.planks_birch,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.StairsCube,
        },
    },
    planks_acacia_stairs: {
        key: 'planks_acacia_stairs',
        images: [
            CubeImage.planks_acacia,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.StairsCube,
        },
    },
    planks_jungle_stairs: {
        key: 'planks_jungle_stairs',
        images: [
            CubeImage.planks_jungle,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.StairsCube,
        },
    },
    planks_oak_stairs: {
        key: 'planks_oak_stairs',
        images: [
            CubeImage.planks_oak,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.StairsCube,
        },
    },
    planks_spruce_stairs: {
        key: 'planks_spruce_stairs',
        images: [
            CubeImage.planks_spruce,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.StairsCube,
        },
    },
    hay_block: {
        key: 'hay_block',
        images: [
            CubeImage.hay_block_side,
            CubeImage.hay_block_top,
        ],
        imageSet: [0, 0, 1, 1, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    sandstone_normal: {
        key: 'sandstone_normal',
        images: [
            CubeImage.sandstone_normal,
            CubeImage.sandstone_top,
            CubeImage.sandstone_bottom,
        ],
        imageSet: [0, 0, 1, 2, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    sandstone_smooth: {
        key: 'sandstone_smooth',
        images: [
            CubeImage.sandstone_smooth,
            CubeImage.sandstone_top,
            CubeImage.sandstone_bottom,
        ],
        imageSet: [0, 0, 1, 2, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    sandstone_carved: {
        key: 'sandstone_carved',
        images: [
            CubeImage.sandstone_carved,
            CubeImage.sandstone_top,
            CubeImage.sandstone_bottom,
        ],
        imageSet: [0, 0, 1, 2, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: true,
                y: true,
                z: true,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    tnt: {
        key: 'tnt',
        images: [
            CubeImage.tnt_side,
            CubeImage.tnt_top,
            CubeImage.tnt_bottom,
        ],
        imageSet: [0, 0, 1, 2, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    wool_colored_white: {
        key: 'wool_colored_white',
        images: [
            CubeImage.wool_colored_white,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    wool_colored_black: {
        key: 'wool_colored_black',
        images: [
            CubeImage.wool_colored_black,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    wool_colored_blue: {
        key: 'wool_colored_blue',
        images: [
            CubeImage.wool_colored_blue,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    wool_colored_brown: {
        key: 'wool_colored_brown',
        images: [
            CubeImage.wool_colored_brown,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    wool_colored_cyan: {
        key: 'wool_colored_cyan',
        images: [
            CubeImage.wool_colored_cyan,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    wool_colored_gray: {
        key: 'wool_colored_gray',
        images: [
            CubeImage.wool_colored_gray,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    wool_colored_green: {
        key: 'wool_colored_green',
        images: [
            CubeImage.wool_colored_green,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    wool_colored_light_blue: {
        key: 'wool_colored_light_blue',
        images: [
            CubeImage.wool_colored_light_blue,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    wool_colored_lime: {
        key: 'wool_colored_lime',
        images: [
            CubeImage.wool_colored_lime,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    wool_colored_magenta: {
        key: 'wool_colored_magenta',
        images: [
            CubeImage.wool_colored_magenta,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    wool_colored_orange: {
        key: 'wool_colored_orange',
        images: [
            CubeImage.wool_colored_orange,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    wool_colored_pink: {
        key: 'wool_colored_pink',
        images: [
            CubeImage.wool_colored_pink,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    wool_colored_purple: {
        key: 'wool_colored_purple',
        images: [
            CubeImage.wool_colored_purple,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    wool_colored_red: {
        key: 'wool_colored_red',
        images: [
            CubeImage.wool_colored_red,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    wool_colored_silver: {
        key: 'wool_colored_silver',
        images: [
            CubeImage.wool_colored_silver,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    wool_colored_yellow: {
        key: 'wool_colored_yellow',
        images: [
            CubeImage.wool_colored_yellow,
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: false,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: false,
            isIndestructible: false,
            geometryType: GeometryType.Cube,
        },
    },
    flower_rose: {
        key: 'flower_rose',
        images: [
            CubeImage.flower_rose,
        ],
        imageSet: [0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: true,
            isIndestructible: false,
            geometryType: GeometryType.Flower1Cube,
        },
    },
    flower_allium: {
        key: 'flower_allium',
        images: [
            CubeImage.flower_allium,
        ],
        imageSet: [0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: true,
            isIndestructible: false,
            geometryType: GeometryType.Flower1Cube,
        },
    },
    flower_blue_orchid: {
        key: 'flower_blue_orchid',
        images: [
            CubeImage.flower_blue_orchid,
        ],
        imageSet: [0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: true,
            isIndestructible: false,
            geometryType: GeometryType.Flower1Cube,
        },
    },
    flower_dandelion: {
        key: 'flower_dandelion',
        images: [
            CubeImage.flower_dandelion,
        ],
        imageSet: [0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: true,
            isIndestructible: false,
            geometryType: GeometryType.Flower1Cube,
        },
    },
    flower_houstonia: {
        key: 'flower_houstonia',
        images: [
            CubeImage.flower_houstonia,
        ],
        imageSet: [0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: true,
            isIndestructible: false,
            geometryType: GeometryType.Flower1Cube,
        },
    },
    flower_oxeye_daisy: {
        key: 'flower_oxeye_daisy',
        images: [
            CubeImage.flower_oxeye_daisy,
        ],
        imageSet: [0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: true,
            isIndestructible: false,
            geometryType: GeometryType.Flower1Cube,
        },
    },
    flower_paeonia: {
        key: 'flower_paeonia',
        images: [
            CubeImage.flower_paeonia,
        ],
        imageSet: [0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: true,
            isIndestructible: false,
            geometryType: GeometryType.Flower1Cube,
        },
    },
    flower_tulip_orange: {
        key: 'flower_tulip_orange',
        images: [
            CubeImage.flower_tulip_orange,
        ],
        imageSet: [0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: true,
            isIndestructible: false,
            geometryType: GeometryType.Flower1Cube,
        },
    },
    flower_tulip_pink: {
        key: 'flower_tulip_pink',
        images: [
            CubeImage.flower_tulip_pink,
        ],
        imageSet: [0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: true,
            isIndestructible: false,
            geometryType: GeometryType.Flower1Cube,
        },
    },
    flower_tulip_red: {
        key: 'flower_tulip_red',
        images: [
            CubeImage.flower_tulip_red,
        ],
        imageSet: [0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: true,
            isIndestructible: false,
            geometryType: GeometryType.Flower1Cube,
        },
    },
    flower_tulip_white: {
        key: 'flower_tulip_white',
        images: [
            CubeImage.flower_tulip_white,
        ],
        imageSet: [0],
        materialParameters: {},
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: true,
            isIndestructible: false,
            geometryType: GeometryType.Flower1Cube,
        },
    },
    tallgrass: {
        key: 'tallgrass',
        images: [
            CubeImage.tallgrass,
        ],
        imageSet: [0],
        materialParameters: {
            color: 0xB1FB6C,
        },
        materialParametersForOneList: [],
        meshParameters: {
            rotateEnable: {
                x: false,
                y: true,
                z: false,
            }
        },
        cubeAttributes: {
            isPenetrable: true,
            isIndestructible: false,
            geometryType: GeometryType.Flower1Cube,
        },
    },
}
export default defaultCubes;
