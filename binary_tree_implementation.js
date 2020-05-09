class Node {
    constructor(data,left=null,right=null){
        this.data = data;
        //pointers
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    add(data){
        const node = this.root;
        if(node == null){
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node){
                if(data<node.data){
                    if(node.left == null){
                        node.left = new Node(data);
                        return;
                    } else if(node.left != null){
                        return searchTree(node.left);
                    }
                } else if(data>node.data){
                    if (node.right == null){
                        node.right = new Node(data);
                    } else if (node.right != null){
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            }
            //if somehow the above didnt execute
            return searchTree(node);
        }
        
    }

    findMin(){
        let current = this.root;
        while(current.left != null){
            current = current.left;
        }
        return current.data;
    }

    findMax(){
        let current = this.root;
        while(current.right != null){
            current = current.right;
        }
        return current.data;
    }

    isPresent(data){
        let current = this.root;
        //Boolean a null is false
        while (current){
            if (data === current.data){
                return true;
            }
            else if (data < current.data ){
                current = current.left;
            } 
            else{
                current = current.right;
            }
        }
        return false;
    }

    find(data){
        let current = this.root;
        while(current.data !== data){
            // if(current === null)
            if(current.data == null){
                return null;
            }
            else if (data < current.data){
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        return current;
               
    }

    remove(data){
        const removeNode = function(node,data){
            if(node == null){
                return null;
            }
            if (data === node.data){
                if(node.left == null && node.right == null){
                    return null;
                }
                if (node.left == null){
                    return node.right;
                }
                if (node.right == null){
                    return node.left;
                }
                // if node has 2 children
                var tempNode = node.right;
                while(tempNode.left!=null){
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right,tempNode.data);
                return node;
            }
            else if(data<node.data){
                node.left = removeNode(node.left,data);
                return node;
            }
            else{
                node.right = removeNode(node.right,data);
                return node;
            }
        }
        //why assign root to be the node removed?
        this.root = removeNode(this.root,data);
    }

}

const bst = new BinarySearchTree();
bst.add(20);
bst.add(18);
bst.add(30);
bst.add(40);
bst.add(50);
bst.add(9);

console.log(bst.findMax());
console.log(bst.findMin());
console.log(bst.remove(50));
console.log(bst.findMax());
console.log(bst.isPresent(50));