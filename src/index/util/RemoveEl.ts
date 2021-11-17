
//移除dom
export default function (dom:HTMLElement) {
    setTimeout(()=>{
        let loadingStyleInterval = setInterval(function () {
            if (dom.style.opacity === undefined || dom.style.opacity.length === 0) {
                dom.style.opacity = '1'
            } else {
                let loadingOpacityValue = Number.parseFloat(dom.style.opacity) - 0.1;
                dom.style.opacity = (loadingOpacityValue).toString();
                if (loadingOpacityValue <= 0) {
                    clearInterval(loadingStyleInterval);
                    dom.style.display = "none";
                    dom.parentNode?.removeChild(dom);
                }
            }
        }, 16);
    }, 1000);
};

