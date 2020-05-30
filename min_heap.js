class MinHeap{
    constructor(){
        //the first element of array is left blank, i.e null
        //this is because of the math
        this.heap = [null];
    }

   insert(num) {
       this.heap.push(num);
       if(this.heap.length>2){
            let idx = this.heap.length -1;
            while(this.heap[idx]<this.heap[Math.floor(idx/2)]){
                if(idx>=1){
                    //es6 syntax for swap
                    [this.heap[Math.floor(idx/2)],this.heap[idx]] = [this.heap[idx],this.heap[Math.floor(idx/2)]];
                    if(Math.floor(idx/2)>1){
                        idx = Math.floor(idx/2);
                    } else {
                        break;
                    };
                };
            };
       };
   };

   //defaults to removing the smallest number. i.e, the top node  
   remove(){
       let smallest = this.heap[1];
      
       if(this.heap.length>2){
           //the last index element will become the first index element
           this.heap[1] = this.heap[this.heap.length-1];
           //remove all element after last index (inclusive)
           this.heap.splice(this.heap.length-1);
           //after you move last to first and kick out the last index
           if(this.heap.length===3){
               if(this.heap[1]>this.heap[2]){
                   [this.heap[1],this.heap[2]] = [this.heap[2],this.heap[1]];
               };
               //smallest is still the original first index number.
               //since length is 3, we are done sorting and we can exit
               return smallest;
           };

           let i = 1;
           let left = 2*i;
           let right = 2*i +1;
           while(this.heap[i] >= this.heap[left]||this.heap[i]>=this.heap[right]){
               if(this.heap[left]<this.heap[right]){
                   [this.heap[i],this.heap[left]] = [this.heap[left],this.heap[i]];
                   i=2*i;
               } else {
                   [this.heap[i],this.heap[right]] = [this.heap[right],this.heap[i]];
                   i = 2*i+1;
               };
               left = 2*i;
               right = 2*i+1;
               if(this.heap[left]==undefined||this.heap[right]==undefined){
                   break;
               };
           };
       } else if(this.heap.length === 2){
           this.heap.splice(1);
       } else {
           return null;
       };
       return smallest;
   };

   sort(){
       let result = [];
       while(this.heap.length>1){
           result.push(this.remove());
       };
       return result;
   }
}

let heap = new MinHeap();

heap.insert(5);
heap.insert(20);
heap.insert(4);
heap.insert(6);
arr = heap.sort();
console.log(heap);
console.log(arr);
