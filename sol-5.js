//Make an api request using async await
// Q1
function findSum(arr){
    return arr.reduce( (prev, curr) => prev + curr ), 0
}


console.log(findSum([2, 4, 6])) // 12)  


// Q2
function findFrequency(arr){
    let noDupes = [...new Set(arr)]

    // console.log(noDupes.filter(elem => elem === 'a'))
    // let most = noDupes.reduce((prev, curr) => {
    //     return noDupes.filter(elem => elem === curr).length > prev ? curr : prev
    // }, noDupes[0])

    // let least =noDupes.reduce((prev, curr) => {
    //     return noDupes.filter(elem => elem === curr).length < prev ? curr : prev
    // }, noDupes[0])

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
}



console.log(findFrequency(['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd'])); // { most: 'a', least: 'd' }
console.log(findFrequency(['a', 'banana', 'a', 'd', 'd', 'd', 'd', 'b', 'b', 'c', 'c']))


function findSum(arr){
    return arr.reduce( (prev, curr) => prev + curr ), 0
}


console.log(findSum([2, 4, 6])) // 12)  

// Q3

function isPalindrome(word){
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
}

console.log(isPalindrome('canal')); // false
console.log(isPalindrome('Ana')); // true

function largestPair(arr){
    let productArr = []
    for(let i = 0; i < arr.length - 1; i++){
        productArr.push(arr[i] * arr[i+1])
    }
    return Math.max(...productArr)
}

console.log(largestPair([5, 1, 2, 3, 1, 4])) //6

console.log(largestPair([9, 5, 10, 2, 24, -1, -48])) // 50

function removeParenth(str){
    let start = str.indexOf('(')
    let end = str.indexOf(')')
    let strArr = str.split('')
    // console.log(start, end)
    // console.log(strArr) 
    strArr.splice(start, end -start + 1)
    // console.log(strArr)
    
    return strArr.join('')
}

console.log(removeParenth('codingis(not)fun'))

function scoreScrabble(word){
    let one = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']
    let two = ['d', 'g']
    let three = [ 'b', 'c', 'm', 'p']
    let four = ['f', 'h', 'v', 'w', 'y']
    let five = ['k']
    let eight = [ 'j', 'x']
    let ten = ['q', 'z']

    let count = 0
    
    for(let letter of word.split('')){
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
}

console.log(scoreScrabble('hello')); // 8
console.log(scoreScrabble('quiet')); // 14
