const { isBrowser } = require("browser-or-node");

const impl = isBrowser ? require("./browser.cjs") : require("./node.cjs");

module.exports = Object.freeze(Object.assign(impl, {
    default: impl,
    provider: isBrowser ? "xxhash-wasm" : "xxhashjs"
}));
