//r = rate
//p = principal of mortgage
//N = Period of Mortgage (in Months)


//main calculating function
function calculateMortgage(p, r, n) {


    //establishes rate by calling outside function to convert annual percentage to monthly decimal
    r = percentToDecimal(r);

    //Establishes number of total monthly payments from user-input years (length)
    n = yearsToMonths(n);

    //Standard Mortgage Payment Function
    var pmt = (r * p) / (1- (Math.pow((1 + r), (-n))));

    return parseFloat(pmt.toFixed(2));

    console.log(p, r, n);

};

//outside functions used in calculate(p, r, n)
function percentToDecimal(percent) {
    return (percent/12)/100;
}

function yearsToMonths(year) {
    return year * 12;
}

function postPayments(payment) {

    var htmlE1 = document.getElementById("outMonthly");

    htmlE1.innerText = "$" + payment;
}


var btn = document.getElementById("btnCalculate");
btn.onclick = function() {
    var cost = document.getElementById("inCost").value;
    var downPayment = document.getElementById("inDown").value;
    var interest = document.getElementById("inAPR").value;
    var term = document.getElementById("inPeriod").value;


    var amountBorrowed = (cost - downPayment);


    var pmt = calculateMortgage(amountBorrowed, interest, term);

    console.log(cost, downPayment, interest, term, amountBorrowed);
    console.log(pmt);

    postPayments(pmt);

};

