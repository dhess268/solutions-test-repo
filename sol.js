const findSum = function(array) {
  return array.reduce( ((prev, curr) => prev + curr), 0 )
};

const findFrequency = function(array) {
    let noDupes = [...new Set(arr)]
    let most = null
    let least = null
    let leastCount = Infinity
    let mostCount = 0
    let currentCount = 0
    for(let i = 0; i < noDupes.length; i++){
        currentCount = 0
        for(let j = 0; j < arr.length; j++){
            if(arr[j] === noDupes[i]){
                console.log('hi')
                currentCount += 1
            }

            }
        if(currentCount > mostCount){
            most = noDupes[i]
            mostCount = currentCount
        }
        if(currentCount < leastCount){
            least = noDupes[i]
            leastCount = currentCount
        }
        
    }


    return {
        'most': most,
        'least': least
    }
};

const isPalindrome = function(str) {
 return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
};

const largestPair = function(array) {
  let productArr = []
    for(let i = 0; i < array.length - 1; i++){
        productArr.push(array[i] * array[i+1])
    }
    return Math.max(...productArr)
};

const removeParenth = function(str) {
  let start = str.indexOf('(')
    let end = str.indexOf(')')
    let strArr = str.split('')
    // console.log(start, end)
    // console.log(strArr) 
    strArr.splice(start, end -start + 1)
    // console.log(strArr)
    
    return strArr.join('')
};

const scoreScrabble = function(str) {
    let one = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']
    let two = ['d', 'g']
    let three = [ 'b', 'c', 'm', 'p']
    let four = ['f', 'h', 'v', 'w', 'y']
    let five = ['k']
    let eight = [ 'j', 'x']
    let ten = ['q', 'z']

    let count = 0
    
    for(let letter of str.split('')){
        if(one.includes(letter)){
            count += 1
        }
        else if(two.includes(letter)){
            count += 2
        }
        else if(three.includes(letter)){
            count += 3
        }
        else if(four.includes(letter)){
            count += 4
        }
        else if(five.includes(letter)){
            count += 5
        }
        else if(eight.includes(letter)){
            count += 8
        }
        else if(ten.includes(letter)){
            count += 10
        }

    }
    return count
};
