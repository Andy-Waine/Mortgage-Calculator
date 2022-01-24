//r = rate
//p = principal of mortgage
//N = Period of Mortgage (in Months)

//main calculating function
function calculate(p, r, n) {

    //establishes rate by calling outside function to convert annual percentage to monthly decimal
    r = percentToMonthlyDecimal(r);

    //Establishes number of total monthly payments from user-input years (length)
    n = yearsToMonths;

    //Standard Mortgage Payment Function
    var payment = ((p * r) * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);

    return parseFloat(payment.toFixed(2));

};

//outside functions used in calculate(p, r, n)
function percentToMonthlyDecimal(percent) {
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
    var price = document.getElementById("inputPrice").value;

    if (price <= 0) {
        alert("Invalid Price - No Negatives Nancies");
        return false;
    };

    if (price == "") {
        alert("Please Enter a Price - Ain't Such a Thing as Free Lunch");
        return false;
    }

    //other functions
    var downPayment = document.getElementById("inputDownPayment").value;
    var loanAmount = price - downPayment;
    var interest = document.getElementById("inputAPR").value;
    var term = document.getElementById("inputLength").value;

    var payment = calculate(loanAmount, interest, term);

    postPayments(payment);
};

console.log(price);
console.log(downPayment);
console.log(interest);
console.log(term);
console.log(payment);