//预设方块信息
import GeometryType from "./GeometryType";

export default {
    grass: {
        key: 'grass',//设置和对象key一样
        images: [//贴图路径
            './assets/img/blocks/grass_side.png',
            './assets/img/blocks/grass_top.png',
            './assets/img/blocks/dirt.png',
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
            './assets/img/1.png',
            './assets/img/2.png',
            './assets/img/3.png',
            './assets/img/4.png',
            './assets/img/5.png',
            './assets/img/6.png',
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
    dirt: {
        key: 'dirt',
        images: [
            './assets/img/blocks/dirt.png',
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
            './assets/img/blocks/dirt_podzol_side.png',
            './assets/img/blocks/dirt_podzol_top.png',
            './assets/img/blocks/dirt.png',
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
            './assets/img/blocks/redstone_block.png',
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
            './assets/img/blocks/diamond_block.png',
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
    //         './assets/img/blocks/grass_side.png',
    //         './assets/img/blocks/grass_top_green.png',
    //         './assets/img/blocks/dirt.png',
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
            './assets/img/blocks/cobblestone.png',
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
            './assets/img/blocks/cobblestone_mossy.png',
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
            './assets/img/blocks/stone.png',
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
            './assets/img/blocks/stone_slab_side.png',
            './assets/img/blocks/stone_slab_top.png',
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
            './assets/img/blocks/stonebrick.png',
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
            './assets/img/blocks/stonebrick_carved.png',
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
            './assets/img/blocks/stonebrick_cracked.png',
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
            './assets/img/blocks/stonebrick_mossy.png',
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
            './assets/img/blocks/brick.png',
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
            './assets/img/blocks/planks_birch.png',
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
            './assets/img/blocks/planks_acacia.png',
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
            './assets/img/blocks/planks_jungle.png',
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
            './assets/img/blocks/planks_oak.png',
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
            './assets/img/blocks/planks_spruce.png',
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
    //         './assets/img/blocks/reeds.png',
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
            './assets/img/blocks/log_acacia.png',
            './assets/img/blocks/log_acacia_top.png',
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
            './assets/img/blocks/leaves_acacia.png',
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
            './assets/img/blocks/leaves_acacia_opaque.png',
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
            './assets/img/blocks/log_birch.png',
            './assets/img/blocks/log_birch_top.png',
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
            './assets/img/blocks/leaves_birch.png',
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
            './assets/img/blocks/leaves_birch_opaque.png',
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
            './assets/img/blocks/log_jungle.png',
            './assets/img/blocks/log_jungle_top.png',
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
            './assets/img/blocks/leaves_jungle.png',
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
            './assets/img/blocks/leaves_jungle_opaque.png',
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
            './assets/img/blocks/log_oak.png',
            './assets/img/blocks/log_oak_top.png',
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
            './assets/img/blocks/leaves_oak.png',
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
            './assets/img/blocks/leaves_oak_opaque.png',
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
            './assets/img/blocks/log_spruce.png',
            './assets/img/blocks/log_spruce_top.png',
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
            './assets/img/blocks/leaves_spruce.png',
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
            './assets/img/blocks/leaves_spruce_opaque.png',
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
            './assets/img/blocks/glass.png',
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
            './assets/img/blocks/glass_black.png',
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
            './assets/img/blocks/glass_blue.png',
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
            './assets/img/blocks/glass_brown.png',
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
            './assets/img/blocks/glass_cyan.png',
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
            './assets/img/blocks/glass_gray.png',
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
            './assets/img/blocks/glass_green.png',
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
            './assets/img/blocks/glass_light_blue.png',
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
            './assets/img/blocks/glass_lime.png',
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
            './assets/img/blocks/glass_magenta.png',
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
            './assets/img/blocks/glass_orange.png',
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
            './assets/img/blocks/glass_pink.png',
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
            './assets/img/blocks/glass_purple.png',
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
            './assets/img/blocks/glass_red.png',
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
            './assets/img/blocks/glass_silver.png',
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
            './assets/img/blocks/glass_white.png',
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
            './assets/img/blocks/glass_yellow.png',
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
            './assets/img/blocks/glowstone.png',
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
            './assets/img/blocks/gold_block.png',
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
            './assets/img/blocks/gold_ore.png',
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
            './assets/img/blocks/clay.png',
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
            './assets/img/blocks/hardened_clay.png',
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
            './assets/img/blocks/hardened_clay_stained_black.png',
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
            './assets/img/blocks/hardened_clay_stained_blue.png',
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
            './assets/img/blocks/hardened_clay_stained_brown.png',
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
            './assets/img/blocks/hardened_clay_stained_cyan.png',
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
            './assets/img/blocks/hardened_clay_stained_gray.png',
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
            './assets/img/blocks/hardened_clay_stained_green.png',
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
            './assets/img/blocks/hardened_clay_stained_light_blue.png',
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
            './assets/img/blocks/hardened_clay_stained_lime.png',
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
            './assets/img/blocks/hardened_clay_stained_magenta.png',
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
            './assets/img/blocks/hardened_clay_stained_orange.png',
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
            './assets/img/blocks/hardened_clay_stained_pink.png',
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
            './assets/img/blocks/hardened_clay_stained_purple.png',
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
            './assets/img/blocks/hardened_clay_stained_red.png',
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
            './assets/img/blocks/hardened_clay_stained_silver.png',
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
            './assets/img/blocks/hardened_clay_stained_white.png',
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
            './assets/img/blocks/hardened_clay_stained_yellow.png',
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
    //         './assets/img/blocks/ice.png',
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
            './assets/img/blocks/melon_side.png',
            './assets/img/blocks/melon_top.png',
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
            './assets/img/blocks/pumpkin_face_off.png',
            './assets/img/blocks/pumpkin_side.png',
            './assets/img/blocks/pumpkin_top.png',
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
            './assets/img/blocks/pumpkin_face_on.png',
            './assets/img/blocks/pumpkin_side.png',
            './assets/img/blocks/pumpkin_top.png',
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
            './assets/img/blocks/stone_slab_side.png',
            './assets/img/blocks/stone_slab_top.png',
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
            './assets/img/blocks/brick.png',
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
            './assets/img/blocks/planks_birch.png',
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
            './assets/img/blocks/planks_acacia.png',
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
            './assets/img/blocks/planks_jungle.png',
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
            './assets/img/blocks/planks_oak.png',
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
            './assets/img/blocks/planks_spruce.png',
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
            './assets/img/blocks/cobblestone.png',
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
            './assets/img/blocks/cobblestone_mossy.png',
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
            './assets/img/blocks/stone.png',
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
            './assets/img/blocks/stone_slab_side.png',
            './assets/img/blocks/stone_slab_top.png',
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
            './assets/img/blocks/brick.png',
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
            './assets/img/blocks/planks_birch.png',
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
            './assets/img/blocks/planks_acacia.png',
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
            './assets/img/blocks/planks_jungle.png',
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
            './assets/img/blocks/planks_oak.png',
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
            './assets/img/blocks/planks_spruce.png',
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
            './assets/img/blocks/hay_block_side.png',
            './assets/img/blocks/hay_block_top.png',
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
            './assets/img/blocks/sandstone_normal.png',
            './assets/img/blocks/sandstone_top.png',
            './assets/img/blocks/sandstone_bottom.png',
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
            './assets/img/blocks/sandstone_smooth.png',
            './assets/img/blocks/sandstone_top.png',
            './assets/img/blocks/sandstone_bottom.png',
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
            './assets/img/blocks/sandstone_carved.png',
            './assets/img/blocks/sandstone_top.png',
            './assets/img/blocks/sandstone_bottom.png',
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
            './assets/img/blocks/tnt_side.png',
            './assets/img/blocks/tnt_top.png',
            './assets/img/blocks/tnt_bottom.png',
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
            './assets/img/blocks/wool_colored_white.png',
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
            './assets/img/blocks/wool_colored_black.png',
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
            './assets/img/blocks/wool_colored_blue.png',
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
            './assets/img/blocks/wool_colored_brown.png',
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
            './assets/img/blocks/wool_colored_cyan.png',
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
            './assets/img/blocks/wool_colored_gray.png',
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
            './assets/img/blocks/wool_colored_green.png',
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
            './assets/img/blocks/wool_colored_light_blue.png',
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
            './assets/img/blocks/wool_colored_lime.png',
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
            './assets/img/blocks/wool_colored_magenta.png',
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
            './assets/img/blocks/wool_colored_orange.png',
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
            './assets/img/blocks/wool_colored_pink.png',
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
            './assets/img/blocks/wool_colored_purple.png',
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
            './assets/img/blocks/wool_colored_red.png',
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
            './assets/img/blocks/wool_colored_silver.png',
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
            './assets/img/blocks/wool_colored_yellow.png',
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
            './assets/img/blocks/flower_rose.png',
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
            './assets/img/blocks/flower_allium.png',
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
            './assets/img/blocks/flower_blue_orchid.png',
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
            './assets/img/blocks/flower_dandelion.png',
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
            './assets/img/blocks/flower_houstonia.png',
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
            './assets/img/blocks/flower_oxeye_daisy.png',
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
            './assets/img/blocks/flower_paeonia.png',
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
            './assets/img/blocks/flower_tulip_orange.png',
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
            './assets/img/blocks/flower_tulip_pink.png',
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
            './assets/img/blocks/flower_tulip_red.png',
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
            './assets/img/blocks/flower_tulip_white.png',
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
            './assets/img/blocks/tallgrass.png',
        ],
        imageSet: [0],
        materialParameters: {
            color:0xB1FB6C,
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