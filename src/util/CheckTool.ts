import {WEBGL} from "./WebGL";

// 检查浏览器
export function checkBrowser() {
    let explorer = window.navigator.userAgent,
        compare = function (s: string) {
            return (explorer.indexOf(s) >= 0);
        },
        ie11 = (function () {
            return ("ActiveXObject" in window)
        })();
    if (compare("MSIE") || ie11) {
        throw ["不支持IE或浏览器的兼容模式 :(", "IE or browser compatibility mode is not OK :("];
    }
}

// 检查设备
export function checkDevice() {
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
        throw ["手机尚不支持 :(", "Mobile phone is not supported :(", "还是用电脑打开试试吧 :)", "Let's try it with computer :)"]
    }
}

// 检查webgl支持
export function checkWebGL() {
    let isWebGLAvailable = false;
    try {
        const canvas = document.createElement('canvas');
        isWebGLAvailable = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
    }
    if (!isWebGLAvailable) {
        throw [
            "这个浏览器不太行 :(",
            "This browser doesn't work well :(",
            "还是用流行的浏览器试试吧 :)",
            "Let's try it with a popular browser :)",
            '',
            "ERROR: " + WEBGL.getWebGLErrorMessage().innerText]
    }
}
