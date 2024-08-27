
function doFail() {
    throw new Error("Illegal access");
}

const noop = new Proxy({}, { get: doFail, set: doFail });

module.exports = Object.freeze(Object.assign(noop, { default: noop }));
