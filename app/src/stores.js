import { writable } from 'svelte/store'


const calculatorInitialState = {
    layout: {
        display: '0',
        numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0],
        operators: ['÷', '×', '-', '+'],
        equals: '=',
        clear: 'AC'
    },
    operations: []
}

function createCalcModel() {
    const { subscribe, set, update } = writable(calculatorInitialState);
    return {
        subscribe,
        appendOperation: (operation) => {
            update(store => {
                return {
                    ...store,
                    operations: [...store.operations, operation]
                }
            })
        },
        commitOperations() {
            update(store => {
                return {
                    ...store,
                    layout: {
                        ...store.layout,
                        display: store.operations.join(',')
                    }
                }
            })
        },
        clearOperations() {
            update(store => {
                return {
                    ...store,
                    operations: []
                }
            });
        }
    };
}

export const calcModel = createCalcModel();
