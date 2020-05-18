function LinkedList(){
    var length = 0;
    var head = null;

    var Node = function(e){
        this.e = e;
        this.next = null;
    };

    this.size = function(){
        return length;
    };

    this.head =function(){
        return head;
    };

    this.add = function(e){
        var node = new Node(e);
        if(head==null){
            head = node;
        }else{
            var currentNode = head;

            while(currentNode.next != null){
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
        length++
    };

    this.remove = function(e){
        var currentNode = head;
        var previousNode;

        if(currentNode.e === e){
            head = currentNode.next;
        } else{
            while(currentNode.e !== e){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length --
    };

    this.isEmpty = function(){
        return length === 0;
    };

    this.indexOf = function(e){
        var currentNode = head;
        var index = -1;

        while(currentNode){
            index++;
            if(currentNode.e === e){
                return index;
            }
            currentNode = currentNode.next;
        }

        return -1;
    };

    this.elementAt = function(index){
        var currentNode = head;
        var count = 0;
        while(count<index){
            currentNode = currentNode.next;
            count ++;
        }
        return currentNode.e;
    };

    this.addAt = function(index,e){
        var node = new Node(e);
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        if(index>length){
            return false;
        }

        if(index ===0){
            //link the inserted node's next to current node, i.e head
            node.next = currentNode;
            //set inserted node to head
            head = node;
        } else{
            while(currentIndex<index){
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }
            node.next = currentNode;
            previousNode.next = node;
        }

        length++;
    };

    this.removeAt = function(index){
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        if (index <0 || index>length){
            return false;
        }
        if(index === 0){
            head=currentNode.next;
        }else{
            while(currentIndex<index){
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }
            previousNode.next = currentNode.next;
        }
        length--;
        return currentNode.e;
    };
}

var conga = new LinkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf('Puppy'));
console.log(conga.size());

