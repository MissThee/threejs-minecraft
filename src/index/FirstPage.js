/*禁止ios缩放，双击和双指*/
window.onload=function () {
    document.addEventListener('touchstart',function (event) {
        if(event.touches.length>1){
            event.preventDefault();
        }
    });
    var lastTouchEnd=0;
    document.addEventListener('touchend',function (event) {
        var now=(new Date()).getTime();
        if(now-lastTouchEnd<=300){
            event.preventDefault();
        }
        lastTouchEnd=now;
    },false);
    document.addEventListener('gesturestart', function (event) {
        event.preventDefault();
    });
};

let CanRun=true;
// 检查浏览器
(function () {
    var explorer = window.navigator.userAgent,
        compare = function (s) {
            return (explorer.indexOf(s) >= 0);
        },
        ie11 = (function () {
            return ("ActiveXObject" in window)
        })();
    if (compare("MSIE") || ie11) {
        let divEl = document.createElement('div');
        divEl.style.position = "absolute";
        divEl.style.top = "35%";
        divEl.style.width = "100%";
        divEl.style.zIndex = "1000";
        divEl.style.textAlign = 'center';
        divEl.style.fontWeight = 'bold';
        divEl.style.color = 'gray';
        divEl.style.fontSize = '1em';
        let spanEl1 = document.createElement('span');
        spanEl1.style.fontSize = '1.5em';
        spanEl1.innerText = "不要用IE或浏览器的兼容模式 :(";
        let spanEl2 = document.createElement('span');
        spanEl2.innerText = "IE or browser compatibility mode is not OK :(";
        divEl.appendChild(spanEl1);
        divEl.appendChild(document.createElement('br'));
        divEl.appendChild(spanEl2);
        document.body.appendChild(divEl);
        throw "unsupported browser";
    }
})();
// 检查设备
if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
    let divEl = document.createElement('div');
    divEl.style.position = "absolute";
    divEl.style.top = "35%";
    divEl.style.width = "100%";
    divEl.style.zIndex = "1000";
    divEl.style.textAlign = 'center';
    divEl.style.fontWeight = 'bold';
    divEl.style.color = 'white';
    divEl.style.fontSize = '1em';
    divEl.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    let spanEl1 = document.createElement('span');
    spanEl1.style.fontSize = '1.5em';
    spanEl1.innerText = "手机尚不支持 :(";
    let spanEl2 = document.createElement('span');
    spanEl2.innerText = "Mobile phone is not supported :(";
    let spanEl3 = document.createElement('span');
    spanEl3.style.fontSize = '1.5em';
    spanEl3.innerText = "还是用电脑打开试试吧 :)";
    let spanEl4 = document.createElement('span');
    spanEl4.innerText = "Let's try it with computer :)";
    divEl.append(spanEl1, document.createElement('br'), spanEl2, document.createElement('br'), spanEl3, document.createElement('br'), spanEl4);
    document.body.appendChild(divEl);
    CanRun=false;
}
// 检查webgl支持
{
    var isWebGLAvailable = false;
    try {
        var canvas = document.createElement('canvas');
        isWebGLAvailable = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
    }
    if (!isWebGLAvailable) {
        let divEl = document.createElement('div');
        divEl.style.position = "absolute";
        divEl.style.top = "35%";
        divEl.style.width = "100%";
        divEl.style.zIndex = "10000";
        divEl.style.textAlign = 'center';
        divEl.style.fontWeight = 'bold';
        divEl.style.color = 'gray';
        divEl.style.fontSize = '1em';
        let spanEl1 = document.createElement('span');
        spanEl1.style.fontSize = '1.5em';
        spanEl1.innerText = "这个浏览器不太行 :(";
        let spanEl2 = document.createElement('span');
        spanEl2.innerText = "This browser doesn't work well :(";
        let spanEl3 = document.createElement('span');
        spanEl3.style.fontSize = '1.5em';
        spanEl3.innerText = "还是用流行的浏览器试试吧 :)";
        let spanEl4 = document.createElement('span');
        spanEl4.innerText = "Let's try it with a popular browser :)";
        divEl.append(spanEl1, document.createElement('br'), spanEl2, document.createElement('br'), spanEl3, document.createElement('br'), spanEl4);
        document.body.appendChild(divEl);
        document.body.appendChild(WEBGL.getWebGLErrorMessage());
        CanRun=false;
    }
}
// 加载中提示
{
    let loadingDivEl = document.createElement('div');
    loadingDivEl.id = 'loadingDivEl';
    loadingDivEl.style.position = "absolute";
    loadingDivEl.style.backgroundColor = "white";
    loadingDivEl.style.top = "0";
    loadingDivEl.style.bottom = "0";
    loadingDivEl.style.width = "100%";
    loadingDivEl.style.zIndex = "10000";
    loadingDivEl.style.textAlign = 'center';
    loadingDivEl.style.fontWeight = 'bold';
    loadingDivEl.style.color = 'gray';
    loadingDivEl.style.fontSize = '1em';
    let loadingTextEl = document.createElement('div');
    loadingTextEl.id = 'loadingTextEl';
    loadingTextEl.style.fontSize = '1.5em';
    loadingTextEl.style.position = "absolute";
    loadingTextEl.style.textAlign = 'center';
    loadingTextEl.style.top = "35%";
    loadingTextEl.style.width = "100%";
    loadingTextEl.innerText = "加载中";
    loadingDivEl.append(loadingTextEl);
    document.body.appendChild(loadingDivEl);
}
if(CanRun){
    //非入口，第一个模打包后名称name默认为index
    //import()引入的懒加载模块引入时
    //不自定名称：打包分割，个人代码叫2，依赖包代码叫3。
    //自定义名称后，打包分割，个人代码叫mc，依赖包叫vendor~mc（vendor~xx这种格式是webpack默认配置）
    import(/*webpackChunkName:'mc'*/'../mc/mc');
}

