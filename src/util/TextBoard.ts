export default function (el: HTMLElement|undefined, ...nodeArr: (HTMLElement|string)[]) {
    let divEl = el;
    if (!divEl || !divEl.getAttribute("tip-el")) {
        divEl = document.createElement('div');
        divEl.style.position = "absolute";
        divEl.style.top = "35%";
        divEl.style.width = "100%";
        divEl.style.zIndex = "1000";
        divEl.style.textAlign = 'center';
        divEl.style.fontWeight = 'bold';
        divEl.style.color = 'white';
        divEl.style.fontSize = '1em';
        divEl.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        divEl.setAttribute('tip-el', '1');
        document.body.appendChild(divEl);
    }
    divEl.innerHTML = '';
    let spanElArr = [];
    if (nodeArr !== undefined) {
        for (let node of nodeArr) {
            if (node instanceof HTMLElement) {
                spanElArr.push(node);
                spanElArr.push(document.createElement('br'));
            } else {
                let spanEl1 = document.createElement('span');
                spanEl1.style.fontSize = '1.5em';
                spanEl1.innerText = node;
                spanElArr.push(spanEl1);
                spanElArr.push(document.createElement('br'));
            }
        }
    }
    for (let spanEl of spanElArr) {
        divEl.appendChild(spanEl);
    }
    return divEl;
}
