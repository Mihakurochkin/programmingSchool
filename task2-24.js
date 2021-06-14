function math(first, second) {
    let sum = first + second
    let difference
    if(first < second) {
        difference = second - first
    }
    else {
        difference =  first - second
    }
    return {sum, difference}
}

let result = math(3, 14);
console.log(result);