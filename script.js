function getCanChiYear(year) {
    const can = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
    const chi = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

    const canIndex = (year + 6) % 10;
    const chiIndex = (year + 8) % 12;

    return `${can[canIndex]} ${chi[chiIndex]}`;
}

function getCanChiMonth(month, year) {
    const can = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
    const chi = ["Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu"];

    const canIndex = (year * 12 + month + 3) % 10;
    const chiIndex = (month + 1) % 12;

    return `${can[canIndex]} ${chi[chiIndex]}`;
}

function getCanChiDay(day, month, year) {
    const can = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
    const chi = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

    const jd = getJulianDate(day, month, year);
    const canIndex = (jd + 9) % 10;
    const chiIndex = (jd + 1) % 12;

    return `${can[canIndex]} ${chi[chiIndex]}`;
}

function getJulianDate(day, month, year) {
    return Math.floor((1461 * (year + 4800 + Math.floor((month - 14) / 12))) / 4) +
           Math.floor((367 * (month - 2 - 12 * Math.floor((month - 14) / 12))) / 12) -
           Math.floor((3 * Math.floor((year + 4900 + Math.floor((month - 14) / 12)) / 100)) / 4) +
           day - 32075;
}

function showCanChi() {
    const year = parseInt(document.getElementById('yearInput').value);
    const month = parseInt(document.getElementById('monthInput').value);
    const day = parseInt(document.getElementById('dayInput').value);

    if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
        const canChiYear = getCanChiYear(year);
        const canChiMonth = getCanChiMonth(month, year);
        const canChiDay = getCanChiDay(day, month, year);
        document.getElementById('result').innerText = `Ngày ${day}/${month}/${year} là ngày ${canChiDay}, tháng ${canChiMonth}, năm ${canChiYear}`;
    } else {
        document.getElementById('result').innerText = 'Vui lòng nhập ngày, tháng, năm hợp lệ.';
    }
}

function updateCurrentDateTime() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const daysOfWeek = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    const dayOfWeek = daysOfWeek[now.getDay()];
    const currentDateTime = `${dayOfWeek}, ${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    document.getElementById('currentDateTime').innerText = currentDateTime;
}

setInterval(updateCurrentDateTime, 1000);


