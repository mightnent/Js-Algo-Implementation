//creating a stack

var Stack = function(){
    this.count = 0;
    this.storage = {};

    //add value into end of stack, rmb, last in first out
    this.push = function(value){
        //in the obj storage, find the index of this.count, then assign value to in
        this.storage[this.count]=value;
        this.count++;
    }

    this.pop = function(){
        if(this.count===0){
            return undefined;
        }

        //because the count has incremented previously when pushing
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
        
    }

    this.size = function(){
        return this.count;
    }

    this.peek = function(){
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

