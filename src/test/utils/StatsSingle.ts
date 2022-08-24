import Stats from "stats.js";

class StatsSingle extends Stats {
    static Instance: Stats

    constructor() {
        super()
        if (StatsSingle.Instance) {
            return StatsSingle.Instance
        }
        const stats = new Stats();
        stats.dom.style.position = 'absolute';
        stats.dom.style.left = '0px';
        stats.dom.style.top = '0px';
        stats.dom.style.zIndex = '1000';
        document.body.appendChild(stats.dom);
        StatsSingle.Instance = stats
        return stats
    }

    static update() {
        if (!StatsSingle.Instance) {
            StatsSingle.Instance = new StatsSingle()
        }
        StatsSingle.Instance.update()
    }

}

export default StatsSingle