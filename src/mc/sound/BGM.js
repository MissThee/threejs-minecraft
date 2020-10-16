import Sound from "./Sound";
export function initBGMPlayer() {
    let audioBGM;
    let currentIndex = 0;
    let arr = [//把需要播放的歌曲从后往前排，这里已添加一些音乐，可继续添加多个音乐
        Sound.calm1,
        Sound.calm2,
        Sound.calm3,
        Sound.hal1,
        Sound.hal2,
        Sound.hal3,
        Sound.hal4,
    ];
    audioBGM = new Audio();
    audioBGM.volume = 0.5;
    audioBGM.preload = "true";
    audioBGM.controls = true;
    audioBGM.autoplay = true;
    // audioBGM.muted = true;
    audioBGM.hidden = true;
    audioBGM.style.display = "none";
    audioBGM.style.position = "fixed";
    audioBGM.style.top = "0";
    audioBGM.style.right = "0";
    audioBGM.style.zIndex = "101";
    audioBGM.loop = false;//禁止循环，否则无法触发ended事件
    audioBGM.src = arr[currentIndex];         //每次读数组最后一个元素
    audioBGM.addEventListener('ended', playEndedHandler, false);
    document.addEventListener('click', playHandler, false);
    // audioBGM.play();
    document.body.appendChild(audioBGM);

    function playEndedHandler() {
        currentIndex++;
        if (currentIndex >= arr.length) {
            currentIndex = 0;
        }
        audioBGM.src = arr[currentIndex];
        audioBGM.play();
        // myAudio.removeEventListener('ended', playEndedHandler, false);
    }

    function playHandler() {
        audioBGM.play();
        document.removeEventListener('click', playHandler, false);
    }

    return audioBGM;
}