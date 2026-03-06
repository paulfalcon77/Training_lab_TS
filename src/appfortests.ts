export const isPalindrome = (str: string): boolean => {
    return  (str.split('').reverse().join('') === str) ? true : false;

}

export const calculateDiscount = (price: number, percent: number): number => {
    return price - (price * (percent / 100));
}

export const filterPositiveNumbers = (numbers: number[]): number[] => {
    let result:number[] = [] ;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0){
            result.push(numbers[i]) ;
        }
    }
    return result;
}
console.log(filterPositiveNumbers([2, 5, -1, 6, -6, 7]))