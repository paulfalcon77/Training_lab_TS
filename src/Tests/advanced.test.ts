import {isPalindrome, calculateDiscount, filterPositiveNumbers} from "../appfortests";

test('isPalindrome', () => {
    expect(isPalindrome('abba')).toBeTruthy()
    expect(isPalindrome('abbA')).toBeFalsy()
})

test('calculateDiscount', () => {
    expect(calculateDiscount(100, 10)).toBe(90)
    expect(calculateDiscount(100, 10)).not.toBe(80)
})

test('filterPositiveNumbers', () => {
    expect(filterPositiveNumbers([2, 5, -1, 6, -6, 7])).toEqual([2, 5, 6, 7])
    expect(filterPositiveNumbers([2, 5, -1, 6, -6, 7])).not.toEqual([2, 5, 6, 7, 0])
})