const jim = 56;
const tanim = 67;
const arafat = 89;


if ( jim > tanim && jim > arafat){
    console.log('jim is the boss')
}
else if(tanim > jim && tanim > arafat){
    console.log('tanim is the boss')
}
else {
    console.log('arafat is the lombo')
}

//function style.

// function maxOfThree (num1, num2, num3){

//     if ( num1 > num2 && num1 > num3){
//         console.log('num1 is big')
//     }
//     else if(num2 > num1 && num2 > num3){
//         console.log('num2 is big')
//     }
//     else {
//         console.log('num3 is the big')
//     }
// }
// const max = maxOfThree( 56, 67, 96);
// console.log(max);


//------------------------

function  maxOfThree (num1, num2, num3){

    if ( num1 > num2 && num1 > num3){
        return num1
    }

    else if(num2 > num1 && num2 > num3){
        return num2
    }
    else {
        return num3
    }
}
// const max = maxOfThree( 56, 67, 96);
// console.log('this is the bigest number',max);




// finally use this formaula.

const max = Math.max(12,1, 56, 6 ,7, 46  ,45 ,45,45,78,)
console.log('max isusing Math.max',max);