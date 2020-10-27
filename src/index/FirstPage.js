import textBoard from "./util/TextBoard";
import removeEl from "./util/RemoveEl";
import {checkEnvironment} from './util/CheckTool'

window.onload = function () {
    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        let now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    document.addEventListener('gesturestart', function (event) {
        event.preventDefault();
    });
};

let tipEL = textBoard(undefined, "Loading...");
let CanPlay;
/*禁止ios缩放，双击和双指*/
try {
    checkEnvironment();
    CanPlay = true;
} catch (e) {
    CanPlay = false;
    if (Object.prototype.toString.call(e) === "[object Array]") {
        textBoard(tipEL, ...e);
    }
}
try {
    /*  非入口，第一个模块打包后名称name默认为index
        import()引入的懒加载模块引入时
        不自定名称：打包分割，个人代码叫2，依赖包代码叫3。
        自定义名称后，打包分割，个人代码叫mc，依赖包叫vendor~mc（vendor~xx这种格式是webpack默认配置）*/
    import(/*webpackChunkName:'mc'*/'../mc/mc').then(() => {
        if (CanPlay) {
            textBoard(tipEL, "Done :)")
            removeEl(tipEL);
        }
    });
} catch (e) {
    textBoard(tipEL, "error :(")
    console.log('try chrome');
}

