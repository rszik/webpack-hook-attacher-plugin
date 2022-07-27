"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
class Utils {
    static mergeUserSettingsToDeafultSetting(userParameterObject, defaultParameterObject) {
        for (const key in defaultParameterObject) {
            if (userParameterObject.hasOwnProperty(key)) {
                defaultParameterObject[key] = userParameterObject[key];
            }
        }
        return defaultParameterObject;
    }
    static capitalizeFirstLetter(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
    static arraySortNumberFunc(a, b) {
        return a - b;
    }
    static formattedJSONStringify(obj, replacer = null, space = 4) {
        return JSON.stringify(obj, replacer, space);
    }
    static Sleep(miliseconds) {
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, miliseconds);
    }
}
exports.Utils = Utils;
