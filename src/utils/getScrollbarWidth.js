import css from 'dom-css';
let scrollbarWidth = false;

export default function getScrollbarWidth() {
    if (scrollbarWidth !== false) return scrollbarWidth;
    /* istanbul ignore else */
    if (typeof document !== 'undefined') {
        const div = document.createElement('div');
        css(div, {
            width: 100,
            height: 100,
            position: 'absolute',
            top: -9999,
            overflow: 'scroll',
            MsOverflowStyle: 'scrollbar'
        });
        document.body.appendChild(div);
        scrollbarWidth = (div.offsetWidth - div.clientWidth) || 15;
        document.body.removeChild(div);
    } else {
        scrollbarWidth = 15;
    }
    return scrollbarWidth || 15;
}
