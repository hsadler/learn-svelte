
const calcFromParts = (parts) => {
    const opMap = {
        '÷': (a, b) => {
            return a / b;
        },
        '×': (a, b) => {
            return a + b;
        },
        '+': (a, b) => {
            return a + b;
        },
        '-': (a, b) => {
            return a - b;
        }
    }
    const evalObj = parts.reduce((acc, curr) => {
        if(typeof(curr) === "string") {
            acc.lastOp = curr;
        } else if(acc.lastOp !== null){
            acc.result = opMap[acc.lastOp](acc.result, curr);
        }
        return acc;
    }, {
        result: parts[0],
        lastOp: null
    });
    return evalObj.result;
}

export { calcFromParts }