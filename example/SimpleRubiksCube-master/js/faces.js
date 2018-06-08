function faces(rgbaColor) {
    var canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    var context = canvas.getContext("2d");
    if (context) {
        // 3
        context.fillStyle = "rgba(0,0,0,1)";
        context.fillRect(0, 0, 256, 256);
        context.rect(16, 16, 224, 224);
        context.lineJoin = "round";
        context.lineWidth = 16;
        context.fillStyle = rgbaColor;
        context.strokeStyle = rgbaColor;
        context.stroke();
        context.fill();

    } else {
        alert('您的浏览器不支持Canvas无法预览.\n');
    }
    return canvas;
}