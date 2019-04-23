
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//create a function called `map`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter returns something
//The point of the javascript map function is to take an array and return different array with the exact same number of items in it
//The items will be whatever the function `iteratee` creates
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop array and extract the single item from the array per loop and store it in a variable
//on each loop call iteratee() passing in the item from the current loop into the call to iteratee()
//iteratee is a function that must return something, capture whatever it returns in a variable
//add the returned value from iteratee tp myNewArray
//after looping, return  myNewArray
function map(array, iteratee){
    myNewArray = []
    for(let i=0; i<array.length; i++){
        let value = iteratee(array[i])
        myNewArray.push(value)
    }
    console.log(myNewArray)
    return myNewArray
}

map([5,4,3,6,8], iteratee=(value)=>{return value})

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//create a function called `filter`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop `array` and call iteratee for each thing in the array, 
//     passing in the item from the current loop
//iteratee will return true or false, if true add the item to myNewArray else do not
//after looping, return myNewArray
function filter(array, iteratee){
    let myNewArray = []
    for(let i=0; i<array.length; i++){
        let value = iteratee(array[i])
        if(value)myNewArray.push(array[i])
    }
    console.log(myNewArray)
    return myNewArray
}

filter([5,4,4,2,1], iteratee=(value)=>{return value===4})

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//create a function called `find`, it should take 2 parameters `theArray` and `fnc`
//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true return the item 
//after looping, return null
function find(theArray, fnc){
    let myNewArray = []
    for(let i=0; i<theArray.length; i++){
        let value = fnc(theArray[i])
        if(value)myNewArray.push(value)
    }
    console.log(myNewArray)
    return null
}

find([16,14,9,7],iteratee=(value)=>{if(value>10)return value})

//return the last item in theArray
function findLast(theArray){
    let value = theArray.length-1
    console.log(theArray[value])
    return theArray[value]
}

findLast([5,4,3,2,6])

//return the first element of the array
function head(theArray){
    console.log(theArray[0])
    return theArray[0]
}

head([7,93,45])

//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array
function reverse(theArray){
    let myNewArray = []
    for(let i=theArray.length-1;i>-1; i--){
        myNewArray.push(theArray[i])
    }
    console.log(myNewArray)
    return myNewArray
}
reverse([55,33,4132,641])

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
function tail(theArray){
    let myNewArray = []
    for(let i = 1; i<theArray.length; i++){
        myNewArray.push(theArray[i])
    }
    console.log(myNewArray)
    return myNewArray
}

tail([7,3,9,4,5,6])

//implement the most basic sorting algorithm there is
//assume the array will always have numbers
//use a while loop to constantly loop theArray until it is sorted
//use a for loop to loop theArray
//look at the current item and the next item, compare them
//if the items are out of order, swap them
//initialize a variable that indicates if a swap had to be done, set it to false
//if a swap is done set it to true
//after each for loop check the variable, if true, continue the while loop
//if false return theArray
function sort(theArray){
    let i = 0
    while(theArray[i]){
        let swapchecker = true
        if(swapchecker){
            for(let x=0;x<theArray.length; x++){
                let firstValue = theArray[x]
                let secondValue = theArray[x+1]
                if(firstValue > secondValue && x < x+1){
                    theArray[x] = secondValue
                    theArray[x+1] = firstValue
                    swapchecker = true
                }
            }
        }
        if(swapchecker===0){swapchecker===false}
        i++
    }
    console.log(theArray)
    return theArray       
}

// function sort(theArray){
//     let i = 0
//     while(theArray[i]){
//         for(let x=0;x<theArray.length; x++){
//             let firstValue = theArray[i]
//             let secondValue = theArray[x]
//             if(firstValue > secondValue && i < x){
//                 theArray[i] = secondValue
//                 theArray[x] = firstValue
//             }
//         }
//         i++
//     }
//     console.log(theArray)
//     return theArray       
// }

sort([3,2,1,4,6,0,1])

exports.map = map;
exports.filter = filter;
exports.find = find;
exports.head = head;
exports.reverse = reverse;
exports.tail = tail;
exports.sort = sort;
exports.findLast = findLast;
