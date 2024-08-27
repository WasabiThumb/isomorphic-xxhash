
export interface XXHashInstance<N extends number | bigint> {

    update(chunk: Uint8Array | string): this;

    digest(): N;

}

export interface XXHashEntry {

    h32(seed?: number): XXHashInstance<number>;

    h64(seed?: bigint): XXHashInstance<bigint>;

}

export type XXHash = (() => Promise<XXHashEntry>) & { readonly provider: "xxhash-wasm" | "xxhashjs" };
