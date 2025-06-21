import { loginData,company_name } from "./loginPage.mjs";  //named export we get value object 
import signUp from "./signUpPage.mjs"; // default export use get value without object and ,,, we can give any name 

function application(){
console.log(loginData);
console.log(signUp);

}

application();