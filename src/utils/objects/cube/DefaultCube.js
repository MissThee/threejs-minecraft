//预设方块信息
import * as THREE from 'three'

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
        cubeAttributes:{
            isPenetrable: false,//不能碰撞。false-能踩能撞
            isIndestructible: false,//不能销毁。false-左键点击能消除
            isHalfCube: false,//是半砖。false-不是半砖。true-是一个半砖，可以在一个1x1x1内叠加另一个半砖
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: false,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: true,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: true,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: true,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: true,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: true,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: true,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: true,
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
        cubeAttributes:{
            isPenetrable: false,
            isIndestructible: false,
            isHalfCube: true,
        },
    },
}