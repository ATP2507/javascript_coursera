let userRole="admin";
let accessLevel;

if (userRole==="admin"){
    accessLevel="Full access granted";
}
else if (userRole === "manager"){
    accessLevel = "Limited access granted"
}
else{
    accessLevel="No access granted"
}

console.log("Access Level: ", accessLevel)

let isLoggedIn= true;
let userMessage;

if(isLoggedIn){
    if(userRole === "admin"){
        userMessage="Welcome, admin";
    }
    else if(userRole ==="user"){
        userMessage="Welcome, user";
    }
}
else{
    userMessage="Log in to gain access";
}
console.log("User Message:", userMessage);

let userType="subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory="Administrator";
        break;
    case "manager":
        userCategory="Manager";
        break;
    case "subscriber":
        userCategory="Subscriber";
        break;
    default:
        userCategory="Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus= isAuthenticated? "Authenticated": "Not authenticated";
console.log("Authentication status:", authenticationStatus);

let employeeStatus= "Subscriber";
let authStat;

switch(employeeStatus){
    case "Employee":
        authStat="Dietary service access"
        break;
    case "Enrolled Member":
        authStat="Dietary service and one on one access";
        break;
    case "Subscriber":
        authStat="Partial dietary service access";
        break;
    default:
        authStat="Enroll or subscribe to avail facilities";
}
console.log("Access Status::", authStat);