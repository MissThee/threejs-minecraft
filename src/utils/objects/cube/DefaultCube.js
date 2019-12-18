//预设方块信息
export default {
    GrassDirt: {
        key: 'GrassDirt',
        images: [
            './assets/img/blocks/grass_side.png',
            './assets/img/blocks/grass_top_green.png',
            './assets/img/blocks/dirt.png',
        ],
        imageSet: [0, 0, 1, 2, 0, 0],
        materialParameters: {}
    },
    Cloud: {
        key: 'Cloud',
        images: [
            './assets/img/blocks/grass_side.png',
            './assets/img/blocks/grass_top_green.png',
            './assets/img/blocks/dirt.png',
        ],
        imageSet: [0, 0, 1, 2, 0, 0],
        materialParameters: {
            transparent: true,//透明
            opacity: 0.2,//透明度
        }
    }
}