
import { writable } from 'svelte/store'

function createCalcModel() {
    const { subscribe, set, update } = writable("im the calc model");
    return {
        subscribe
    };
}

export const calcModel = createCalcModel();
