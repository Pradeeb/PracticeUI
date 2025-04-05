/* 1. charAt(number);      
   2. charCodeAt(number);
   3. concat(String);
   4. includes(string);
   5. indexOf(char);
   6. lastIndexOf(char)
   7. repeat(number);
   8. replace(string,string) && replaceAll(string,string) //waht we remove,what we add
   9. slice(from number,end numbet);
   10. subString(from number,end numbet)
   11. split("string")
   12. startsWith("string");
   13. endsWith("string");
   14. toUpperCase()
   15. toLowerCase()
   16. trim()
   17. trimStart()
   18. trimEnd()
*/
let str =" Hello world ";

//1.charAt(number);  retrun postion char
console.log(str.charAt(6));

//  2. charCodeAt(number);  retrun uniqu code retrun
console.log(str.charCodeAt(6));

// 3. concat(String); 
console.log(str.concat(" java script"));

//  4. includes(string) retrun boolean * casesesitive
console.log(str.includes("H"));
console.log(str.includes("H",1));
 
// 5. indexOf(char); return index * casesesitive

console.log(str.indexOf("H"));
console.log(str.indexOf("H",1));

// 6.  lastIndexOf(char)
console.log(str.lastIndexOf("H"));
console.log(str.lastIndexOf("e",3));

// 7. repeat(number);
console.log(str.repeat(3));

//8. replace(waht we remove,what we add) && replaceAll(waht we remove,what we add)
console.log(str.replace("world","Earth"));
console.log(str.replaceAll("l","i"));

// 9. slice(from number,end numbet); retrun copy 
console.log(str.slice(0,7));

//  10. subString()
console.log(str.substring(0,7));

// 11. split()
console.log(str.split(" "));
console.log(str.split("",4));  // give array length

// 12. startsWith();
console.log(str.startsWith(" "));
console.log(str.startsWith(" ",1));

// 13. endsWith();
console.log(str.endsWith(" "));
console.log(str.endsWith(" ",5));

// 14. toUpperCase()
console.log(str.toUpperCase());

// 15. toLowerCase()
console.log(str.toLowerCase());
// 16. trim()
console.log(str.trim());

// 17. trimStart()
console.log(str.trimStart());

// 18. trimEnd()
console.log(str.trimEnd());








