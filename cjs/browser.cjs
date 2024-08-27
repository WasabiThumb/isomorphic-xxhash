
/**
 * @type { (() => Promise<import("xxhash-wasm").XXHashAPI>) }
 */
const getWASM = (() => {
    let init = false;
    let value = null;

    return (() => {
        if (init) return value;
        value = require("xxhash-wasm")();
        init = true;
        return value;
    });
})();

/**

 * @param wasm {import("xxhash-wasm").XXHashAPI}
 * @return {import("../types/spec").XXHashEntry}
 */
function getAPI(wasm)  {
    return {
        h32(seed) {
            return wasm.create32(seed);
        },
        h64(seed) {
            return wasm.create64(seed);
        }
    };
}

/**
 * @returns {Promise<import("../types/spec").XXHashEntry>}
 */
module.exports = function() {
    return getWASM().then(getAPI);
}
