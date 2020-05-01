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
    var collection = [];
    
    this.printCollection = function(){
        console.log(collection);
    };

    this.enqueue = function(e){
        if(this.isEmpty()){
            collection.push(e);
        } else {
            var added = false;
            for(var i =0;i<collection.length;i++){
                if (e[1] < collection[i][1]){
                    //splice(pos,del,element)
                    collection.splice(i,0,e);
                    added = true;
                    break;
                }
            }
            if (!added){
                //so if we run through the entire seq and havent insert, means the priority very low, 
                //so we just insert it at the back
                collection.push(e);
            }
        }
    }

    this.dequeue = function(){
        //dequeue only means to take the first one out
        var value = collection.shift();
        return value[0];
    }

    this.front = function(){
        return collection[0];
    }

    this.size = function(){
        return collection.length;
    }

    this.isEmpty = function(){
        return (collection.length === 0);
    }
    
}

var Q = new PriorityQueue;
//console.log(Q.isEmpty());
console.log(Q.isEmpty());
console.log(Q.enqueue(["p",200]));
console.log(Q.isEmpty());
console.log(Q.enqueue([3,"a"]));
console.log(Q.enqueue([3,"d"]));
console.log(Q.printCollection())
console.log(Q.size())
console.log(Q.dequeue());

//as you can see, numeric comes before alphabet in terms of priority