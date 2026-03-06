export const sum = (a: number, b: number): number => {
    return a + b;
};

export const isEven = (n: number):boolean => {
    return (n % 2 == 0) ? true : false
}

export const getLength = (str: string): number => {
    return str.length;
}

export const isPositive = (n: number):boolean => {
    return (n > 0) ? true : false
}