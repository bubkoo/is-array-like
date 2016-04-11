'use strict';


var isArray = Array.isArray || function (val) {
        return Object.prototype.toString.call(val) === 'Object array';
    };

function isObject(val) {
    return typeof val === 'object';
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
