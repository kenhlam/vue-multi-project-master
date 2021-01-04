export function throttle(fn, delay) {
    let canRun = true; 
    return function () {
        if (!canRun) return;
        canRun = false;
        let t = setTimeout(() => {
            clearTimeout(t)
            fn.apply(this, arguments);
            canRun = true;
        }, delay);
    };
}
export function debounce(fn, delay) {
    var timeout = null; 
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    };
}

export function typeInstance(o){
    return toString.call(o)
}