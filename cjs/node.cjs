const xxhashjs = require("xxhashjs");
const { UINT64 } = require("cuint");

/**
 * @param object {import("xxhashjs").HashObject}
 * @param u64 {boolean}
 * @return {import("../types/spec").XXHashInstance}
 */
function wrapInstance(object, u64) {
    const me = {
        update(chunk) {
            object.update(typeof chunk === "string" ? Buffer.from(chunk, "utf-8") : Buffer.from(chunk));
            return me;
        },
        digest() {
            const v = object.digest();
            if (u64) return BigInt(v.toString());
            return v.toNumber();
        }
    };
    return me;
}

/**
 * @return {import("../types/spec").XXHashEntry}
 */
function getAPI() {
    return {
        h32(seed) {
            return wrapInstance(xxhashjs.h32(seed), false);
        },
        h64(seed) {
            return wrapInstance(xxhashjs.h64(
                typeof seed === "undefined" ? undefined : (
                    typeof seed === "number" ? UINT64(seed) : UINT64(BigInt(seed).toString())
                )
            ), true);
        }
    };
}

/**
 * @returns {Promise<import("../types/spec").XXHashEntry>}
 */
module.exports = function() {
    return Promise.resolve(getAPI());
}
