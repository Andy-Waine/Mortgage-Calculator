//r = rate
//p = principal of mortgage
//N = Period of Mortgage (in Months)

var price = document.getElementById("inputPrice").value;
var downPayment = document.getElementById("inputDownPayment").value;
var loanAmount = price - downPayment;
var interest = document.getElementById("inputAPR").value;
var term = document.getElementById("inputLength").value;
var payment = calculate(loanAmount, interest, term);

//main calculating function
function calculateMortgage(p, r, n) {


    //establishes rate by calling outside function to convert annual percentage to monthly decimal
    r = percentToDecimal(r);

    //Establishes number of total monthly payments from user-input years (length)
    n = yearsToMonths;

    //Standard Mortgage Payment Function
    var pmt = (r * p) / (1- (Math.pow((1 + r), (-n))));

    return parseFloat(pmt.toFixed(2));

};

//outside functions used in calculate(p, r, n)
function percentToDecimal(percent) {
    return (percent/12)/100;
};

function postPayments(payment) {
    var htmlE1 = document.getElementById("outputPayment");

    htmlE1.innerText = "$" + payment;
}

function yearsToMonths(year) {
    return year * 12;
};



//HTML Connectors
var btn = document.getElementById("btnCalculate");
btn.onclick = function() {

    //price functions

    //other functions


    postPayments(payment);
};

console.log(price);
console.log(downPayment);
console.log(interest);
console.log(term);
console.log(payment);