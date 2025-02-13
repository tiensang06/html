function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

function checkLeapYear() {
    const year = document.getElementById("year").value;
    const result = isLeapYear(year);
    document.getElementById("leapYearResult").textContent = result ? `Năm ${year} là năm nhuận.` : `Năm ${year} không phải là năm nhuận.`;
}