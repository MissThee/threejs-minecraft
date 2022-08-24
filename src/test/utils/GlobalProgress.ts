class GlobalProgress {

    private static _value: number = 0
    static get value() {
        return GlobalProgress._value;
    }

    private constructor() {
        throw 'static only'
    }

    private static startPerformance = Math.floor(performance.now())

    static update() {
        GlobalProgress._value = Math.floor(performance.now()) - GlobalProgress.startPerformance
    }

}

export default GlobalProgress