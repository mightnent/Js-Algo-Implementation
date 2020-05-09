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

    isBalanced(){
        return (this.findMaxHeight()-this.findMinHeight()<=1)
    }

    findMaxHeight(node = this.root){
        if(node == null){
            return -1;
        }
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        return (Math.max(left,right) + 1);
    }

    findMinHeight(node = this.root){
        if(node == null){
            return -1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        return (Math.min(left,right) + 1);
    }
    
    //<left><root><right>
    inorder(){
        if(this.root == null){
            return;
        }
        else{
            let result = [];
            function traverseInOrder(node){
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        }
    }

    //<root><left><right>
    preorder(){
        if(this.root == null){
            return;
        }
        else{
            let result = [];
            function traversePreOrder(node){
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            }
            traversePreOrder(this.root);
            return result;
        }
    }

    //<left><right><root>
    postorder(){
        if(this.root == null){
            return;
        }
        else{
            let result = [];
            function traversePostOrder(node){
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);
                result.push(node.data);
            }
            traversePostOrder(this.root);
            return result;
        }
    }

    levelOrder(){
        let result = [];
        let Q = [];
        if(this.root != null){
            Q.push(this.root);
            while(Q.length>0){
                let node = Q.shift();
                result.push(node.data);
                if(node.left != null){
                    Q.push(node.left);
                }
                if(node.right != null){
                    Q.push(node.right);
                }
            }
            return result;
        } else{
            return;
        }
    }


}

const bst = new BinarySearchTree();
bst.add(9);
bst.add(4);
bst.add(3);
bst.add(6);
bst.add(5);
bst.add(7);
bst.add(17);
bst.add(23);
bst.add(20);
bst.add(10);


// console.log(bst.findMax());
// console.log(bst.findMin());
// console.log(bst.remove(50));
// console.log(bst.findMax());
// console.log(bst.isPresent(50));
console.log(bst.findMaxHeight());
console.log(bst.findMinHeight());
console.log(bst.inorder());
console.log(bst.preorder());
console.log(bst.postorder());
console.log(bst.isBalanced());
console.log(bst.levelOrder());
