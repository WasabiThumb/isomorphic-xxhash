# isomorphic-xxhash
Isomorphic wrapper for [xxhash-wasm](https://www.npmjs.com/package/xxhash-wasm) (browser) and [xxhashjs](https://www.npmjs.com/package/xxhashjs) (node).
When bundling with tools like Webpack or Rollup (with browser hint enabled), only the WASM implementation should
be included. A 13.2 kB browser build is included as an example, though if you want to include this library as a static ``<script>``,
plain ``xxhash-wasm`` offers a slightly smaller UMD build as well as an ES module.

## Usage
### NodeJS
```ts
import XXH from "isomorphic-xxhash";
// const XXH = require("isomorphic-xxhash");

const xxhash = await XXH();

xxhash.h32(/* may provide a seed (number) */)
    .update("text")
    .update(new Uint8Array([ 32, 58, 68 ]))
    .digest(); // number (781456070)

xxhash.h64(/* may provide a seed (bigint) */)
    .update("more text")
    .update(new Uint8Array([ 32, 240, 159, 152, 179 ]))
    .digest(); // bigint (5612704373666880606n)
```

### Browser
```html
<script src="https://unpkg.com/isomorphic-xxhash/browser/isomorphic-xxhash.min.js"></script>
```
The global ``XXH`` will be available.
