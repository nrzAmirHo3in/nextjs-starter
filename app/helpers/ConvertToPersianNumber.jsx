function convertToPersianNumber(num, signs = true) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    if (signs)
        var formattedNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    else
        var formattedNumber = `${num}`;
    return formattedNumber.replace(/[0-9]/g, (digit) => persianDigits[parseInt(digit)]);
}

export default convertToPersianNumber;
