function big(num1, num2) {
    const bigNum1 = BigInt(num1);
    const bigNum2 = BigInt(num2);

    return {
        sum: (bigNum1 + bigNum2).toString(),
        product: (bigNum1 * bigNum2).toString()
    };
}

function calculate() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    const result = big(num1, num2);
    document.getElementById("sum").textContent = "Tổng: " + result.sum;
    document.getElementById("product").textContent = "Tích: " + result.product;
}
