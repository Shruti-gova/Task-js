var string = "aasssdassddfgd";
var str = string.split("");
var n = str.length;

//Function to count duplicate character in a string.
function duplicateCount(str){
    if(str){
        var obj =  {};
    
        for (let i = 0; i < n; i++) {
         if(obj[str[i]]){
             obj[str[i]] += 1; 
         }
        
        else{
             obj[str[i]] = 1;    
             }
        }
    }
    console.log("Duplicate Characters : ",obj);
}
console.log("Input String : ",string);
duplicateCount(str);

//Function to remove duplicate character in given string.
function removeDuplicate(str){
   var result = "";
   for(var j = 0; j< n; j++){
       if(result.indexOf(str[j])<0){
           result += str[j];
       }
   }
   return result;
}
console.log("String without duplicate character : " ,removeDuplicate(str));