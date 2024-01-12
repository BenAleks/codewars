// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
function between(a, b) {
    let result = []
    while (a<=b){
        result.push(a)
        a++
    }
    return result
}
console.log(between(-1,30))