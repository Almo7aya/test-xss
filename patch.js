// Save the original JSON.parse method
const originalJSONParse = JSON.parse;

console.log("loading the xss script");
// Create a new parse method
JSON.parse = function (text, reviver) {
    const val = originalJSONParse(text, reviver);
    if (val.nty === 1082) {
        console.log(val.data.slot_machine.stage, val.data.slot_machine.remain_tms, val.data.slot_machine.bombRate);
        console.log(val)
        if (val.data.slot_machine.stage === 'BOMB') {
            console.log('should click');
            document.querySelector('.confirm_btn').click();
        }
    }
    return val;
};

