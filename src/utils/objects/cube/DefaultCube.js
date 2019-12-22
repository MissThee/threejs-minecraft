//预设方块信息
import * as THREE from 'three'
export default {
    grass: {
        key: 'grass',
        images: [
            './assets/img/blocks/grass_side.png',
            './assets/img/blocks/grass_top.png',
            './assets/img/blocks/dirt.png',
        ],
        imageSet: [0, 0, 1, 2, 0, 0],
        materialParameters: {},
        materialParametersForOneList: [
            {},
            {color: 0xB1FB6C},
        ]
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
        key: 'Cobblestone',
        images: [
            './assets/img/blocks/cobblestone.png',
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList:[]
    },
    cobblestone_mossy: {
        key: 'cobblestone_mossy',
        images: [
            './assets/img/blocks/cobblestone_mossy.png',
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList:[]
    },
    stone: {
        key: 'Stone',
        images: [
            './assets/img/blocks/stone.png',
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList:[]
    },
    stone_slab: {
        key: 'stone_slab',
        images: [
            './assets/img/blocks/stone_slab_side.png',
            './assets/img/blocks/stone_slab_top.png',
        ],
        imageSet: [0, 0, 1, 1, 0, 0],
        materialParameters: {},
        materialParametersForOneList:[]
    },
    planks_birch: {
        key: 'planks_birch',
        images: [
            './assets/img/blocks/planks_birch.png',
        ],
        imageSet: [0, 0, 0, 0, 0, 0],
        materialParameters: {},
        materialParametersForOneList:[]
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
        materialParametersForOneList:[]
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
        materialParametersForOneList:[]
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
        materialParametersForOneList:[]
    },

    log_birch: {
        key: 'log_birch',
        images: [
            './assets/img/blocks/log_birch.png',
            './assets/img/blocks/log_birch_top.png',
        ],
        imageSet: [0, 0, 1, 1, 0, 0],
        materialParameters: {},
        materialParametersForOneList:[]
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
        materialParametersForOneList:[]
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
        materialParametersForOneList:[]
    },

    log_jungle: {
        key: 'log_jungle',
        images: [
            './assets/img/blocks/log_jungle.png',
            './assets/img/blocks/log_jungle_top.png',
        ],
        imageSet: [0, 0, 1, 1, 0, 0],
        materialParameters: {},
        materialParametersForOneList:[]
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
        materialParametersForOneList:[]
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
        materialParametersForOneList:[]
    },

    log_oak: {
        key: 'log_oak',
        images: [
            './assets/img/blocks/log_oak.png',
            './assets/img/blocks/log_oak_top.png',
        ],
        imageSet: [0, 0, 1, 1, 0, 0],
        materialParameters: {},
        materialParametersForOneList:[]
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
        materialParametersForOneList:[]
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
        materialParametersForOneList:[]
    },

    log_spruce: {
        key: 'log_spruce',
        images: [
            './assets/img/blocks/log_spruce.png',
            './assets/img/blocks/log_spruce_top.png',
        ],
        imageSet: [0, 0, 1, 1, 0, 0],
        materialParameters: {},
        materialParametersForOneList:[]
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
        materialParametersForOneList:[]
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
        materialParametersForOneList:[]
    },
}