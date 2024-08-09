const accountId=144321;
let accountEmail="sahil@gmail.com"
var accountPassword="212as"
accountCity="Patna"

//accountId=2    // const can be changed ,, error
console.log(accountId);
console.table([accountEmail,accountPassword,accountCity])

accountEmail="kumar@gmail.com"
accountPassword="212as11"
accountCity="Motihari"
let accountState;

console.table([accountEmail,accountPassword,accountCity,accountState])

/*
1.) Prefer not to use var
because of issue in block scope and functional scope
2.) If we have declared the variable and not assigned any value to it then
by default it printd as --------->>>>>>>>  undefined


*/