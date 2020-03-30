// first in last out
// functions associated with stacks: push,pop,peek,length

// in code, a stack could be an array
var letters = [];

var word = "abcddcba";

var rword = "";

//put letters from word into stack
for(var i =0;i<word.length;i++){
    letters.push(word[i]);
}

for (var i=0;i<word.length;i++){
    rword += letters.pop();
}

// note: === is strict comparison, both type and value
// == only compare value. so will auto do type conversion before comparison
if(rword===word){
    console.log(word)
}else{
    console.log("note palindrome")
}

chars = ['a','b','c','d']
count = 3;
console.log(count)
count--;
console.log(count)
result = chars[count];
delete chars[count]
console.log(result)
console.log(chars.pop())
