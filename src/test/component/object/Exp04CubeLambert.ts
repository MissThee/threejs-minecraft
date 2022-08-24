import * as THREE from "three";
import CommonComponent from "../CommonComponent";
import * as Color from "../../utils/Color";
import CanvasTexture from "../../utils/CanvasTexture";
import ActionBuilder from "../../utils/ActionBuilder";
import TWEEN from "@tweenjs/tween.js";

let actions1 = [
    {
        properties: {
            x: 5, y: 0, z: 0
        },
        easing: TWEEN.Easing.Cubic.In
    }, {
        properties: {
            x: 0, y: 5, z: 0
        },
        easing: TWEEN.Easing.Exponential.InOut
    }, {
        properties: {
            x: 0, y: 0, z: 5
        },
        easing: TWEEN.Easing.Elastic.Out
    },
    {
        properties: {
            x: 0, y: 0, z: 0
        },
        easing: TWEEN.Easing.Linear.None
    }
];


class Exp04CubeLambert extends CommonComponent {
    constructor(opt?: { name?: string }) {
        super();
        let cubeGeometry = new THREE.BoxGeometry(3, 3, 3);
        // 有光照，但表面暗淡不光亮
        let material = new THREE.MeshLambertMaterial({color: 0x00cc00});
        let box = new THREE.Mesh(cubeGeometry, material);
        box.name = opt?.name || this.getClassName();
        box.castShadow = true;
        this.object3Ds.push(box);
    }

    init() {
        let actions1 = [
            {
                properties: {
                    x: 0, y: 5, z: 0
                },
                easing: TWEEN.Easing.Linear.None
            }, {
                properties: {
                    x: 0, y: 0, z: 0
                },
                easing: TWEEN.Easing.Bounce.Out
            }
        ];

        this.object3Ds.forEach(e => {
            ActionBuilder(e, actions1).start();
        })
    }
}

export default Exp04CubeLambert