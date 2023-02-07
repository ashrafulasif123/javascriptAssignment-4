/** 
 * Problem 1: Let’s play a mind game
 * Simple Mathmatical(+, - , *, /) Operator 
 */
function mindGame(number){
    if(typeof number != 'number'){ 
        return 'Please provide a number'; // if the input is not number
    }
        return result = ((number * 3) + 10) / 2 -5; //Assigning mathmatical operator to find the result 
}
// console.log(mindGame('4'));

/** 
 * Problem 2: Finding even or odd
 * Total number of characters in String 
 */
function evenOdd(friendName){
    if(typeof friendName == 'string'){
        const friend = friendName.length;
        if(friend % 2 == 0){ //checking even or odd
            return 'even';
        }
        return 'odd'
    }
    return 'Please provide a string';
       
}
// console.log(evenOdd('asif'));

/**
 *  Problem 3: Is Less or Greater than seven
 *  The input number is greaterthan or less than from 7 
 */
function isLGSeven(inputNumber){
    if(typeof inputNumber == 'number'){
        const theInputNumber = inputNumber;
        const differenceBetween = theInputNumber -7 ;
        if(differenceBetween < 7){
            return differenceBetween; //if the subtraction  is less then return the subtraction
        }
        else{
            return inputNumber * 2; //if the subtraction  is greater than 7 then input number(double) return
        }
    }
    return 'Please provide a number';
}

// console.log(isLGSeven(20));


/**
 *  Problem 4: Finding Bad data
 *  Finding total Negetive Value 
 */
function findingBadData(friendsAge){
    if(Array.isArray(friendsAge) == true){
        const badData = [];
        for(i = 0; i < friendsAge.length; i++){
            const friendAge = friendsAge[i];
            if (friendAge < 0) {  // checking input array number is positive or negetive value 
                badData.push(friendAge); // if the age is negetive value then push to the new array 
            }
        }
        const totalBadData = badData.length; // total number of negetive value
        return totalBadData;
    }
    return 'The input is not a array';
}

const friendsAge = [50, 100, -87, 33, 78 , -90];
// // const friendsAge = 'oh my god';
// console.log(findingBadData(friendsAge));

/**
 *  Problem 5: Convert your gems into diamond
 *  gems to diamond Converter 
 */
    function gemsToDiamond(firstFriendGemsQuantity, secondFriendGemsQuantity, thirdFriendGemsQuantity ){
        if(typeof firstFriendGemsQuantity == 'number' && typeof secondFriendGemsQuantity == 'number' && typeof thirdFriendGemsQuantity == 'number'){
            const firstFriendGemsPower = 21;
            const secondFriendGemsPower = 32;
            const thirdFriendGemsPower = 43;

            const firstFriendGem = firstFriendGemsPower * firstFriendGemsQuantity;
            const secondFriendGem = secondFriendGemsPower * secondFriendGemsQuantity;
            const thirdFriendGem = thirdFriendGemsPower * thirdFriendGemsQuantity;
            const totalDiamond = firstFriendGem + secondFriendGem + thirdFriendGem; // summation of total diamond
            if(totalDiamond < 1000*2){ // checking the total diamond is less or greater than 2000
                return totalDiamond; // return the total diamond is less than 2000
            }
            return totalDiamond - 2000; // return the total diamond is greater than 2000
        }
        return 'please enter all input in number ';  
       
    }
    // console.log(gemsToDiamond(50, 47, 50));




