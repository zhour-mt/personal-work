
function sumDigits(num){
    const numArray = num.toString().split("")
    let sum = 0

    numArray.map((digit) => sum += Number(digit))

    return sum
}

