import textBoard from "./util/TextBoard";
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
/*禁止ios缩放，双击和双指*/
try {
    checkEnvironment()
} catch (e) {
    console.log(Object.prototype.toString.call(e))
    if(Object.prototype.toString.call(e)==="[object Array]"){
        textBoard(tipEL, ...e);
    }
}
try {
    /*  非入口，第一个模块打包后名称name默认为index
        import()引入的懒加载模块引入时
        不自定名称：打包分割，个人代码叫2，依赖包代码叫3。
        自定义名称后，打包分割，个人代码叫mc，依赖包叫vendor~mc（vendor~xx这种格式是webpack默认配置）*/
    import(/*webpackChunkName:'mc'*/'../mc/mc').then(() => {
        removeEl();
    });
} catch (e) {
    textBoard(tipEL, "error :(")
    console.log('try chrome');
}

//移除加载提示遮罩层
function removeEl() {
    textBoard(tipEL, "Done :)")
    let loadingDivEl = tipEL;
    setTimeout(function () {
        let loadingStyleInterval = setInterval(function () {
            if (loadingDivEl.style.opacity === undefined || loadingDivEl.style.opacity.length === 0) {
                loadingDivEl.style.opacity = '1'
            } else {
                let loadingOpacityValue = Number.parseFloat(loadingDivEl.style.opacity) - 0.1;
                loadingDivEl.style.opacity = (loadingOpacityValue).toString();
                if (loadingOpacityValue <= 0) {
                    clearInterval(loadingStyleInterval);
                    loadingDivEl.style.display = "none";
                }
            }
        }, 16);
    }, 1000);
};


