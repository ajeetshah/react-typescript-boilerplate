import { fsPrimaryColor } from "src/constants/colorValues";

export function log(message) {
    console.log(message);
}

export function debug(message) {
    console.debug(message);
}

export function error(message) {
    console.error(message);
}

let prettyCssRule = `color: ${fsPrimaryColor};` + "font-size: 60px;" + "font-weight: bold;" 
    + "text-shadow: 1px 1px 5px rgb(249, 162, 34);" 
    + "filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";

export function prettyLog(message, style=prettyCssRule) {
    setTimeout(console.log.bind(console, `%c${message}`, style), 0);
}