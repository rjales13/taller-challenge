//1 - Non-Constructible Change
const nonConstructibleChange = (arr) => {
    //sort the array in ascending order
    arr.sort((x,y) => x - y);
    let value = 0;
    let i=0;
    while(i < arr.length){
        //check the current array if is greater than the sum of the past arrays + 1
        if(arr[i] > value + 1){
            //if it is, return the sum os past arrays + 1
            return value + 1;
        }else{
            //else keep adding the sum of the old value with the current array value
            value += arr[i];
            i++;    
        }
    }
    // case the current value never gets greater than the sum of the past arrays, returns the sum + 1
    return value + 1;
}

console.log('Sample Output (Question 1) having the array: [5, 7, 1, 1, 2, 3, 22]', nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
console.log('Sample Output (Question 1) having the array: [1, 1, 1, 1, 1]', nonConstructibleChange([1, 1, 1, 1, 1]));
console.log('Sample Output (Question 1) having the array: [1, 5, 1, 1, 1, 10, 15, 20, 100]', nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100]));



//2 - Sorted Squared Array
const sortedSquaredArray = (arr) => {
    //check if is not an empty array
    if(arr.length){
        //sort the array in ascending order
        arr.sort((x,y) => x - y);
        // map the array into a new variable with the squares of the original
        const newArr = arr.map((result) => {
            return result * result;
        })
        // return the new array in ascending order
        return newArr.sort((x,y) => x - y);;    
    }
}

console.log('Sample Output (Question 2) having the array: [1, 2, 3, 5, 6, 8, 9]', sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
console.log('Sample Output (Question 2) having the array: [-2, -1]', sortedSquaredArray([-2, -1]));
console.log('Sample Output (Question 2) having the array: [-10, -5, 0, 5, 10]', sortedSquaredArray([-10, -5, 0, 5, 10]));
