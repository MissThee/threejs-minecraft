// 查看信息小控件
import Stats from "../jsm/libs/stats.module.js";

export default class StatsWindow {
    static _instance;
    stats;

    constructor(canvasElId) {
        if (StatsWindow._instance) {
            return StatsWindow._instance;
        }
        this.stats = new Stats();
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.left = '0px';
        this.stats.domElement.style.top = '0px';
        document.getElementById(canvasElId).appendChild(this.stats.domElement);
        StatsWindow._instance = this;
        return this;
    }

}

