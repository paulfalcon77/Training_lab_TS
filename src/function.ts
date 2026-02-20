
enum OS {
    Windows = "dir",
    Linux = "ls-la",
    MacOS = "ls -G"
}

function getAdminCommand (argon: OS): string{
   return argon
}
let arv = getAdminCommand(OS.Linux)
console.log(arv)

// ex: 2
function checkAccess (username: string, isAdmin: boolean): string {
    if (isAdmin) {
        return `Welcome ${username} Full access granted.`
    } else return`Hello ${username}! Limited access.`
}
let user1 = checkAccess("Ivan",true);
let user2 = checkAccess("Pavel",false);
console.log(user1)
console.log(user2)

//ex: 3

let usersUsers: string[] = ["Admin", "Manager", "Guest", "Root"]

const checkLength = (name: string): boolean => {
    return name.length > 4;
}

for (let user of usersUsers) {
    if(checkLength(user)){
        console.log(user)
    }
}

//ex: 4

let prices: number[] = [100, 500, 1000, 2000];

const discount = (price: number): number => {
    return price * 0.01;

}
for(let i = 0; i < prices.length; i++) {
    if(prices[i] > 800){
        let saveAmount = discount(prices[i]);
        let finalAmount = prices[i] - saveAmount;
        console.log(finalAmount);
    }
}

//ex:5

let scores: number[] = [45, 80, 32, 100, 90];

const convertStatus = (status: number): string => {
    if(status >= 50){
        return "pass"
    }else {
        return "fail"
    }
}
for (let user of scores){
    if(convertStatus(user)){
        console.log(convertStatus(user))
    }
}

//ex:6

interface students  {
    name: string,
    score: number,
    isStipend: boolean,
    status?: string,
}

let Students: students[] = [];

let student001: students = {
    name: "Pavel",
    score: 50,
    isStipend: false,
    status: ""
};

let student002: students = {
    name: "Oleg",
    score: 90,
    isStipend: false
};

let student003: students = {
    name: "Dmitri",
    score: 70,
    isStipend: false
};

Students.push(student001, student002, student003);

const updateStipend = (arv: students): students => {
    if(arv.score > 80){
        arv.isStipend = true;
    }
    return arv
};

for (let user of Students){
    updateStipend(user);
}

console.log(Students)

let processStudent = (student: students): students => {

        if(student.score >= 90){
            student.status = "Excellent";
        } else if(student.score >= 70){
            student.status = "Good";
        } else {
            student.status = "Average"
        }
        return student;
    }


for(let i = 0; i < Students.length; i++){
    processStudent(Students[i]);
}
console.log(Students)