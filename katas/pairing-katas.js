
function sumDigits(num){
    const numArray = num.toString().split("")
    let sum = 0

    numArray.map((digit) => sum += Number(digit))

    return sum
}

function countVeg(vegetables, veg_type) {
    let vegCount = 0
    for (let i=0; i<vegetables.length; i++){
        if (vegetables[i].type === veg_type){
            vegCount += vegetables[i].quantity
        }
    }
    return vegCount
}

// The function sumArgs should accept any number of arguments, and add them together. If given one argument, it should return that. If it is not given arguments, it should return 0.

function sumArgs(){
    let sum= 0
    for (let i=0; i< arguments.length; i++){
        sum +=arguments[i]
    }
    return sum
}

