'use strict';

function isObject(val) {
    return typeof val === 'object';
}

function isArray(val) {
    return Object.prototype.toString.call(val) === '[object Array]';
}

function isFunction(val) {
    return typeof val === 'function';
}

function isWindow(obj) {
    return obj != null && obj === obj.window;
}


module.exports = function (obj) {

    if (!obj) {
        return false;
    }

    if (isArray(obj)) {
        return true;
    }

    if (isFunction(obj) || isWindow(obj)) {
        return false;
    }


    var length = isObject(obj) && 'length' in obj && obj.length;

    if (obj.nodeType === 1 && length) {
        return true;
    }

    return length === 0 ||
        typeof length === 'number' && length > 0 && ( length - 1 ) in obj;
};
