// 面\颜色 贴图

export default class {
    canvas = document.createElement('canvas');
    context = this.canvas.getContext('2d');
    rgbaColorOrImg: string

    constructor(rgbaColorOrImg: string) {
        this.rgbaColorOrImg = rgbaColorOrImg
        this.canvas.width = 256;
        this.canvas.height = 256;
        if (this.context) {
            if (rgbaColorOrImg.trim().match(/^(rgba\()([.0-9]+,?){4}(\))$/)) {
                this.context.fillStyle = 'rgba(0,0,0,1)';
                this.context.fillRect(0, 0, 256, 256);
                this.context.rect(16, 16, 224, 224);
                this.context.lineJoin = 'round';
                this.context.lineWidth = 16;
                this.context.fillStyle = rgbaColorOrImg;
                this.context.strokeStyle = rgbaColorOrImg;
                this.context.stroke();
                this.context.fill();
            } else {
                let image = new Image();
                image.src = rgbaColorOrImg;
                image.onload = () => {
                    this.context?.drawImage(image, 0, 0);
                    ////遍历像素并修改rgba值
                    // let imgData = context.getImageData(0, 0, 256, 256);//我这个图片大小是 256 * 256 ,这里指从（0, 0）获取宽256高256的像素的data
                    // let data = imgData.data;//每个像素的data是个数组（红，绿，蓝，透明度）
                    // //遍历每个像素
                    // for (let i = 0; i < data.length; i += 4) {
                    //     // data[i] = 255 - data[i];
                    //     data[i + 1] = data[i + 1]+10;
                    //     // data[i + 2] = 255 - data[i + 2];
                    //     //这里只反转颜色，不管透明度
                    // }
                    // //在指定位置输出图片
                    // context.putImageData(imgData, 0, 0);//在（0,0）的位置放上我的新图片
                };
            }
        }

    }
}
