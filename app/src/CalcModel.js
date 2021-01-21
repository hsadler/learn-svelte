
class CalcModel {
    #_data = {
        hi: "there"
    };

    constructor() {
        if(!CalcModel._instance) {
            CalcModel._instance = this;
        }
        return CalcModel._instance;
    }

    getData() {
        return this._data;
    }
}

export default new CalcModel();