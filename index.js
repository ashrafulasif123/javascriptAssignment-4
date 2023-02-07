/** 
 * Simple Mathmatical(+, - , *, /) Operation 
 */
function mindGame(number){
    if(typeof number != 'number'){ 
        return 'Please provide a number'; 
    }
        const result = ((number * 3) + 10) / 2 -5; 
        return result;
}

/** 
* Total number of characters in String, even or odd 
 */
function evenOdd(friendName){
    if(typeof friendName == 'string'){
        let friend = friendName.length;
        if(friend % 2 == 0){ 
            return 'even';
        }
        return 'odd'
    }
    return 'Please provide a string';
}

/**
 *  The input number is greaterthan or less than from 7 
 */
function isLGSeven(inputNumber){
    if(typeof inputNumber == 'number'){
        const theInputNumber = inputNumber;
        const differenceBetween = theInputNumber -7 ;
        if(differenceBetween < 7){
            return differenceBetween; 
        }
        else{
            return inputNumber * 2; 
        }
    }
    return 'Please provide a number';
}

/**
 *  Finding total Negetive Value 
 */
function findingBadData(friendsAge){
    if(Array.isArray(friendsAge) == true){
        const badData = [];
        for(i = 0; i < friendsAge.length; i++){
            const friendAge = friendsAge[i];
            if (friendAge < 0) {  
                badData.push(friendAge); 
            }
        }
        const totalBadData = badData.length; 
        return totalBadData;
    }
    return 'The input is not a array';
}

/**
 *  gems to diamond Converter 
 */
    function gemsToDiamond(firstFriendGemsQuantity, secondFriendGemsQuantity, thirdFriendGemsQuantity ){
        if(typeof firstFriendGemsQuantity == 'number' && typeof secondFriendGemsQuantity == 'number' && typeof thirdFriendGemsQuantity == 'number'){
            const firstFriendGemsPower = 21;
            const secondFriendGemsPower = 32;
            const thirdFriendGemsPower = 43;

            let firstFriendGem = firstFriendGemsPower * firstFriendGemsQuantity;
            let secondFriendGem = secondFriendGemsPower * secondFriendGemsQuantity;
            let thirdFriendGem = thirdFriendGemsPower * thirdFriendGemsQuantity;
            let totalDiamond = firstFriendGem + secondFriendGem + thirdFriendGem; 
            if(totalDiamond < 1000*2){ 
                return totalDiamond; 
            }
            return totalDiamond - 2000;
        }
        return 'please enter all input in number ';  
       
    }
    




