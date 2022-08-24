import * as THREE from "three";
import TWEEN, {Tween} from "@tweenjs/tween.js";

interface Actions {
    properties: { x: number, y: number, z: number },
    easing: (amount: number) => number
    duration?: number
}

export default (obj: THREE.Object3D | undefined, actions: Actions[]) => {
    if (!actions.length||!obj) {
        return new TWEEN.Tween({})
    }
    let x = obj.position.x;
    let y = obj.position.y;
    let z = obj.position.z;
    let firstTween: Tween<THREE.Vector3> = new TWEEN.Tween(new THREE.Vector3());
    let preTween: Tween<THREE.Vector3> | null = null;
    let curTween: Tween<THREE.Vector3> | null = null;

    for (let i = 0; i < actions.length; i++) {
        actions[i].properties.x = x + actions[i].properties.x;
        actions[i].properties.y = y + actions[i].properties.y;
        actions[i].properties.z = z + actions[i].properties.z;
        curTween = new TWEEN.Tween(obj.position)
            .to(actions[i].properties, actions[i].duration || 1000)
            .easing(actions[i].easing)

        if (preTween) {
            preTween.chain(curTween);
        }
        preTween = curTween
        if (i === 0) {
            firstTween = curTween
        }
    }
    curTween?.chain(firstTween)
    return firstTween;
}