// 查看信息小控件
import Stats from "stats.js";

export default class StatsWindow {
    stats: Stats | undefined;

    constructor(canvasElId: string) {
        let stats;
        stats = new Stats();
        stats.dom.style.position = 'absolute';
        stats.dom.style.left = '0px';
        stats.dom.style.top = '0px';
        stats.dom.style.zIndex = '1000';
        (document.getElementById(canvasElId) as HTMLCanvasElement).appendChild(stats.dom);
        this.stats = stats;
    }
}

