import * as THREE from 'three';

function buildLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, color: number) {
    x1 = x1 || 0;
    y1 = y1 || 0;
    z1 = z1 || 0;
    x2 = x2 || 0;
    y2 = y2 || 0;
    z2 = z2 || 0;
    color = color || 0xff0000;
    let geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([x1, y1, z1,x2, y2, z2]),3,false))
    let material = new THREE.MeshBasicMaterial({color: color});
    return new THREE.LineSegments(geometry, material);
}

export function buildXYZLine(scene: THREE.Scene) {
    //坐标线
    let lines = [];
    lines.push(buildLine(0, 0, 0, 1, 0, 0, 0xff0000));//中心坐标线，X轴，红
    lines.push(buildLine(0, 0, 0, 0, 1, 0, 0x00ff00));//中心坐标线，Y轴，绿
    lines.push(buildLine(0, 0, 0, 0, 0, 1, 0x0000ff));//中心坐标线，Z轴，蓝
    if (scene) {
        scene.add(...lines)
    }
    return lines;
}
