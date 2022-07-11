import textBoard from "./util/TextBoard";
import removeEl from "./util/RemoveEl";
import {checkBrowser, checkWebGL, checkDevice} from './util/CheckTool'

window.addEventListener('load', () => {
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
})

let tipEL = textBoard(undefined, "Loading...");
let canPlay: boolean;
/*禁止ios缩放，双击和双指*/
try {
    checkBrowser();
    checkWebGL();
    canPlay = true;
} catch (e: any) {
    canPlay = false;
    if (Object.prototype.toString.call(e) === "[object Array]") {
        textBoard(tipEL, ...e);
    }
}

if (canPlay) {
    import(/* webpackChunkName: "mc" */ './mc/mc').then(({default: MC}) => {
        new MC().init()
        try {
            checkDevice()
            textBoard(tipEL, "Done :)")
            removeEl(tipEL);
        } catch (e: any) {
            if (Object.prototype.toString.call(e) === "[object Array]") {
                textBoard(tipEL, ...e);
            }
        }
    }).catch((e) => {
        textBoard(tipEL, "Error :(")
        console.log('Error Info', e);
    })
}
