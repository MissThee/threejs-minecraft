export function initCanvasEl(elementId: string) {
    if (!elementId) {
        throw 'invalid elementId'
    }
    let canvasElTmp = document.getElementById(elementId) as HTMLDivElement;
    if (!canvasElTmp) {
        canvasElTmp = document.createElement('div');
        canvasElTmp.id = 'canvas-wrapper';
        canvasElTmp.style.height = '100%';
        canvasElTmp.style.width = '100%';
        canvasElTmp.style.cursor = 'pointer';
        document.body.appendChild(canvasElTmp);
    }
    return canvasElTmp
}
