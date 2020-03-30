//first in first out
//there is no class in js
// function Queue(){
//     collection= [];

//     this.print = function(){
//         console.log(collection);
//     };

//     this.enqueue = function(e){
//         //don't need to return because just pushing element into q
//         collection.push(e);
//     };

//     this.dequeue = function(){
//         return collection.shift();
//         //removes the first item of the array.
//         //something like pythons .pop(0)
//     };

//     this.front = function(){
//         return collection[0];
//         //return the first item
//     };

//     this.size = function(){
//         return collection.length;
//     };

//     this.isEmpty = function(){
//         return (collection.length === 0);
//     };

// }

// var Q = new Queue;
// console.log(Q.isEmpty());
// console.log(Q.enqueue("p"));
// console.log(Q.enqueue(3));
// console.log(Q.size());
// console.log(Q.dequeue());


//tried using js obj but it is not a good implementation => it has to sort the dictionary everytime i want to print
//will increase time
function PriorityQueue(){
    //understand that a 1x2 tuple/list is passed in
    var collection = {};

    this.printCollection = function(){
        tempList = []
        keyArr = Object.keys(collection);
        kaSorted = keyArr.sort(function(a, b){return a-b});
        for(i=0;i<kaSorted.length;i++){
            for(j=0;j<collection[kaSorted[i]].length;j++){
                tempList.push(collection[kaSorted[i]][j]);
            }
        }
        return tempList
    };

    this.isEmpty = function(){
        return (Object.keys(collection).length === 0);
    };

    this.size = function(){
        return (this.printCollection().length);
    };

    this.enqueue = function(e){
        if(this.isEmpty===true){
            
            return collection[e[0]] = [e[1]];
          
        } 
        else if(e[0] in collection === false){
          
            return collection[e[0]] = [e[1]];
        }
        else{
            
            return collection[e[0]].push(e[1])
        }
    };

    
}

var Q = new PriorityQueue;
//console.log(Q.isEmpty());
console.log(Q.isEmpty());
console.log(Q.enqueue([1,"p"]));
console.log(Q.isEmpty());
console.log(Q.enqueue([3,"a"]));
console.log(Q.enqueue([3,"d"]));
console.log(Q.printCollection())
console.log(Q.size())
