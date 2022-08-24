export default () => {
    const canvas = document.createElement('canvas');
    const size = 128;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (ctx) {
        let timerId;
        const frameRate = 60;

        class CanvasObject {
            draw?: (ctx: CanvasRenderingContext2D) => void;
            start?: [x: number, y: number]
            end?: [x: number, y: number]
            x = 0;
            y = 0;
            rotation = 0;
            borderWidth = 2;
            borderColor = '#000000';
            fill = false;
            fillColor = '#ff0000';
            ctx = ctx;
            update = () => {
                if (!ctx) {
                    throw 'empty ctx'
                }
                ctx.save();
                ctx.lineWidth = this.borderWidth;
                ctx.strokeStyle = this.borderColor;
                ctx.fillStyle = this.fillColor;
                ctx.translate(this.x, this.y);
                if (this.rotation) ctx.rotate(this.rotation * Math.PI / 180);
                if (this.draw) this.draw(ctx);
                if (this.fill) ctx.fill();
                ctx.stroke();
                ctx.restore();
            }
        }


        class Line extends CanvasObject {
            start: [x: number, y: number] = [0, 0];
            end: [x: number, y: number] = [5, 5];
            draw = (ctx: CanvasRenderingContext2D) => {
                ctx.beginPath();
                ctx.moveTo.apply(ctx, this.start);
                ctx.lineTo.apply(ctx, this.end);
                ctx.closePath();
            };
        }


        class Circle extends CanvasObject {
            radius = 0
            draw = (ctx: CanvasRenderingContext2D) => {
                ctx.beginPath();
                ctx.arc(0, 0, this.radius, 0, 2 * Math.PI, true);
                ctx.closePath();
            };
        }

        const circle = new Circle();
        circle.ctx = ctx;
        circle.borderWidth = 6;
        circle.x = size / 2;
        circle.y = size / 2;
        circle.radius = size / 2 - circle.borderWidth / 2;
        circle.fill = true;
        circle.fillColor = '#ffffff';

        const hour = new Line();
        hour.ctx = ctx;
        hour.x = size / 2;
        hour.y = size / 2;
        hour.borderColor = "#000000";
        hour.borderWidth = 10;
        hour.rotation = 0;
        hour.start = [0, size / 20 * 2];
        hour.end = [0, -size / 20 * 5];

        const minute = new Line();
        minute.ctx = ctx;
        minute.x = size / 2;
        minute.y = size / 2;
        minute.borderColor = "#333333";
        minute.borderWidth = 7;
        minute.rotation = 0;
        minute.start = [0, size / 20 * 2];
        minute.end = [0, -size / 20 * 7];

        const seconds = new Line();
        seconds.ctx = ctx;
        seconds.x = size / 2;
        seconds.y = size / 2;
        seconds.borderColor = "#ff0000";
        seconds.borderWidth = 4;
        seconds.rotation = 0;
        seconds.start = [0, size / 20 * 2];
        seconds.end = [0, -size / 20 * 8];

        const center = new Circle();
        center.ctx = ctx;
        center.x = size / 2;
        center.y = size / 2;
        center.radius = 5;
        center.fill = true;
        center.borderColor = 'orange';

        let i = 0;
        const ls: Line[] = []
        let cache: Line

        for (; i < 12; i++) {
            cache = ls[i] = new Line();
            cache.ctx = ctx;
            cache.x = size / 2;
            cache.y = size / 2;
            cache.borderColor = "orange";
            cache.borderWidth = 5;
            cache.rotation = i * 30;
            cache.start = [0, -size / 20 * 7];
            cache.end = [0, -size / 20 * 8];
        }

        timerId = setInterval(function () {
            // 清除画布
            ctx.clearRect(0, 0, size, size);
            // 填充背景色
            ctx.fillStyle = 'orange';
            ctx.fillRect(0, 0, size, size);
            // 表盘
            circle.update();
            // 刻度
            for (let i = 0; cache == ls[i++];) cache.update();
            // 时针
            hour.rotation = (new Date()).getHours() * 30;
            hour.update();
            // 分针
            minute.rotation = (new Date()).getMinutes() * 6;
            minute.update();
            // 秒针
            seconds.rotation = (new Date()).getSeconds() * 6;
            seconds.update();
            // 中心圆
            center.update();
        }, (1000 / frameRate) | 0);
    }
    return canvas
}
