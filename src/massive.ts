/*const api_key = 'Dorety'
let retryCount = 3
let errorMessage: string
errorMessage = "404 Not Found"
retryCount = 4

/*console.log(api_key, retryCount, errorMessage, retryCount);
 */

let vlan: number[] = [10, 20, 30];
vlan.push(100);
vlan[1] = 25;
let users: string[] = ["admin", "manager", "guest"];
let res = users.length
console.log(res)
console.log(vlan);

//includes  indexOf shift join

let servers: string[] =  ["web-01", "db-01", "app-01"];
let serv = servers.includes("db-01");
console.log(serv)


let ports: number[] = [80, 443, 8080];
let freePorts = ports.shift();
console.log(freePorts);
console.log(ports);


let path = ["users", "admin", "profile"];
console.log(path.join("/"));



