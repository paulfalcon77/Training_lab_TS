


let testUser: {
    username: string,
    password: string,
    loginAttempts: number,
    isAdmin: boolean,
    roles: string[]
};

testUser = {
    username: "admin_tester",
    password: "password12345",
    loginAttempts: 1,
    isAdmin: true,
    roles: ["editor", "viewer"]
}
console.log(testUser.username, testUser.loginAttempts);
console.log(testUser.roles[0]);

enum DeviceType {
    Router = "router",
    Switch = "switch",
    FireWall = "firewall"
}

interface Device {
    ip: string;
    model: string;
    portCount: number;
    type: DeviceType;
}

let network: Device[] = [];

let router: Device = {
    ip: "192.168.1.1",
    model: "Cisco",
    portCount: 24,
    type: DeviceType.Router
};

network.push(router);

network.push({
    ip: "10.0.0.5",
    model: "Juniper",
    portCount: 48,
    type: DeviceType.Switch
});

let a = router.model
let b = network[1].portCount
let c = router.type

console.log(a, b);
console.log("Device model: ", a, "Type: " + c);
console.log(network);