import { writable } from 'svelte/store'
import { calcFromParts } from './helpers'

const calculatorInitialState = {
    layout: {
        display: '0',
        numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0],
        operators: ['÷', '×', '-', '+'],
        equals: '=',
        clear: 'AC'
    },
    operations: [0]
}

function createCalcModel() {
    const { subscribe, set, update } = writable(calculatorInitialState);
    return {
        subscribe,
        appendOperation(operation) {
            update(store => {
                const lastItem = store.operations[store.operations.length -1];
                let newOperations;
                let displayOperation = operation;
                const shouldCombineOperations = (
                    typeof(lastItem) === 'number' && 
                    typeof(operation) === 'number' &&
                    lastItem !== 0
                );
                if(shouldCombineOperations) {
                    const combinedOperation = parseFloat(String(lastItem) + String(operation));
                    store.operations[store.operations.length -1] = combinedOperation;
                    newOperations = [...store.operations];
                    displayOperation = combinedOperation;
                } else {
                    newOperations = [...store.operations, operation];
                }
                return {
                    ...store,
                    operations: newOperations,
                    layout: {
                        ...store.layout,
                        display: displayOperation
                    }
                }
            })
        },
        commitCalculations() {
            update(store => {
                return {
                    ...store,
                    layout: {
                        ...store.layout,
                        display: calcFromParts(store.operations)
                    }
                }
            })
        },
        clearCalculations() {
            set(calculatorInitialState);
        }
    };
}

export const calcModel = createCalcModel();
