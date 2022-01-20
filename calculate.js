//r = rate
//p = principal of mortgage
//N = Period of Mortgage (in)

//main calculating function
function calculate(p, r, n) {

    let monthlyPayment = null;

    //establishes rate by calling outside function to convert annual percentage to monthly decimal
    r = percentToMonthlyDecimal(r);

    return monthlyPayment;

};

//outside functions used in calculate(p, r, n)
function percentToMonthlyDecimal(percent) {
    return (percent/12)/100;
};

function yearsToMonths(year) {
    return year * 12;
};