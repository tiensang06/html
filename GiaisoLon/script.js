function big(num1, num2) {
    const bigNum1 = BigInt(num1);
    const bigNum2 = BigInt(num2);

    return {
        cong: (bigNum1 + bigNum2).toString(),
        nhan: (bigNum1 * bigNum2).toString()
    };
}

function calculate() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    const result = big(num1, num2);
    document.getElementById("cong").textContent = "Tổng: " + result.cong;
    document.getElementById("nhan").textContent = "Tích: " + result.nhan;
}
