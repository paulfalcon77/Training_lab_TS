
let hasAccess: boolean = true;
let accessMessage = hasAccess ? 'Welcome' : 'Denied';
console.log(accessMessage);

//

let num: number = 10;
let sum  = (num % 2 == 0) ? 'ok' : 'not ok';
console.log(sum);

//

let orderAmount = 800; // amount of order
let deliveryCost = 200; //amount of delivery
let sumOfOrderTotal = orderAmount >= 1000 ? orderAmount : orderAmount + deliveryCost;
console.log(sumOfOrderTotal);

//
let score = 40;
let scoreTotal: string = score >= 90 ? 'Excellent' : (score >= 70 ? 'Good' : 'Try again');
console.log(scoreTotal);