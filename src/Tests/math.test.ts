import {isEven, sum, getLength, isPositive} from '../math'


describe('Математические операции', () => {
    test('Сложение: должно возвращать 5 для 2 + 3', () => {
        expect(sum(2, 3)).toBe(5);
    });

    test('Сложение: должно корректно работать с отрицательными числами', () => {
        expect(sum(-1, -1)).toBe(-2);
    });

    test( 'get Even', () => {
        expect(isEven(4)).toBe(true)
    });

    test('get length of string', () => {
        expect(getLength('abdr')).toBe(4);
    })

    test('number > 0', () =>{
        expect(isPositive(1)).toBe(true);
    })
});