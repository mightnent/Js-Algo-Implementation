//this will contain methods not in es6. So, will call it mySet instead of Set

function mySet(){
    var collection = [];
    
    //this is boolean value
    this.has = function(e){
        return (collection.indexOf(e) !== -1);
        //indexOf will return a number
    };

    this.values = function(){
        return collection;
    };

    this.add = function(e){
        if(!this.has(e)){
            collection.push(e);
            return true;
        }
        return false;
    };

    this.delete = function(e){
        if(this.has(e)){
            idx = collection.indexOf(e);
            collection.splice(idx,1);
            return true;
        }
        return false;
    };

    this.size = function(){
        return collection.length;
    };

    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(e => {
            unionSet.add(e);
        });
        //you can only forEach on a array
        secondSet.forEach(e=>{
            //add alr takes care of duplicates
            unionSet.add(e)
        });
        return unionSet;
    };

    this.intersection= function(otherSet){
        var intersect = new mySet();
        var firstSet = this.values();
        firstSet.forEach(e=>{
            if(otherSet.has(e)){
                intersect.add(e);
            };
        });
        return intersect;
    };

    // (A.intersect.B)'
    this.difference = function(otherSet){
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(e=>{
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };

    //see if this set is subset of passed in set
    this.subset = function(otherSet){
        var firstSet = this.values();
        return firstSet.every(e=>{
            //this is boolean
            return otherSet.has(e);
        });
    };
}

var setA = new mySet();
var setB = new mySet();

setA.add("a");
setA.add(1);
setA.add(1.1);
setB.add("a");
setB.add(1.10);

console.log(setB.subset(setA));
//will return a set, so need to make it into array to print out
console.log(setA.difference(setB).values());
setA.delete("a");
console.log(setA.has("a"));
