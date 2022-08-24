import * as THREE from "three";
import CommonComponent from "../CommonComponent";

class GridLines extends CommonComponent {
    gridSize = 100;
    lineWidth = 5;

    constructor(opt?: { name?: string }) {
        super()
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0xaa6391,
            transparent: true, // 开启时，opacity生效
            opacity: 0.2,
            depthWrite: true,
        })
        for (let i = 0; i <= this.gridSize * 2 / this.lineWidth; i++) {
            let geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position',
                new THREE.BufferAttribute(
                    new Float32Array([
                        -this.gridSize, 0, 0,
                        this.gridSize, 0, 0
                    ]),
                    3,
                    false
                )
            )

            let lineX = new THREE.Line(geometry, lineMaterial);
            lineX.name = opt?.name || this.getClassName();
            lineX.position.z = (i * this.lineWidth) - this.gridSize;
            this.object3Ds.push(lineX)

            let lineY = new THREE.Line(geometry, lineMaterial);
            lineX.name = opt?.name || this.getClassName();
            lineY.position.x = (i * this.lineWidth) - this.gridSize;
            lineY.rotation.y = 90 * Math.PI / 180;   //  旋转90度
            this.object3Ds.push(lineY)
        }
    }
}

export default GridLines