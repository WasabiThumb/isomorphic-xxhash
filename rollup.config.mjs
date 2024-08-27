import { defineConfig } from 'rollup';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from "@rollup/plugin-terser";

export default defineConfig({
    input: "cjs/index.cjs",
    output: [
        {
            name: "XXH",
            dir: "browser",
            format: "umd",
            entryFileNames: "isomorphic-xxhash.js",
            sourcemap: "inline"
        },
        {
            name: "XXH",
            dir: "browser",
            format: "umd",
            entryFileNames: "isomorphic-xxhash.min.js",
            sourcemap: false,
            plugins: [terser()]
        }
    ],
    plugins: [
        commonjs(),
        nodeResolve({
            browser: true
        })
    ]
});
