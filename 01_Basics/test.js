const accountId= 1445523
let accountEmail= "vedansh@gmail.com"
var accountpassword ="12345"
accountCity ="Jaipur"

// accountId = 2345234 // not allowed 

accountEmail = "kumar@gmail.com"
accountpassword = "56789"
accountCity = "Kanpur"
/*
prefer not to use var 
because of issue in block scopee and functional scope 
*/

console.log(accountId);
console.table([accountId,accountEmail,accountpassword ,accountCity])

/*
in current time in general we can't use the var because of the issue in block scope and functional scope 
const me ek baar value asign hone ke baad update nahi ki jati hai 
let me ham wahi karte hain jo hm var me karte the lekin let me block scope ki problemn nahi aati hai   
*/