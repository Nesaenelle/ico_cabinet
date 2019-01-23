export const moneyBTC = {
    decimal: ".",
    thousands: ",",
    prefix: "",
    suffix: " BTC",
    precision: 2,
    masked: false /* doesn't work with directive */
};
export const moneyUSD = {
    decimal: ".",
    thousands: ",",
    prefix: "",
    suffix: " USD",
    precision: 2,
    masked: false /* doesn't work with directive */
};

export function toMoney(val) {
    return val ? parseFloat(val.replace(/,/g, "")) : 0;
};

export function recipientValidate(val) {
    let re = /^([0-9-]){1,30}$/;
    return re.test(val);
};

export function amountValidate(val) {
    return toMoney(val);
};

//TODO
class FormGroup {

}