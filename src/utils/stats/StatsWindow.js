// 查看信息小控件
import Stats from "stats-js";
export default class StatsWindow {
    constructor(canvasElId) {
        if (StatsWindow._instance) {
            return StatsWindow._instance;
        }
        let stats;
        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.getElementById(canvasElId).appendChild(stats.domElement);
        StatsWindow._instance = this;
        this.stats=stats;
        return this;
    }
}

