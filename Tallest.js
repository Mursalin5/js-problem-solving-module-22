const heights = [56, 66, 45, 78, 67, 78,60];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max
}
const max = getMax(heights);
console.log('max value is',max);