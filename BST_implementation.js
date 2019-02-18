// Implement a BinarySearchTree class. It should support 4 methods: add, has, remove, and size:


class Node {
    constructor(node, left=null, right=null) {
        this.value = node
        this.left = left
        this.right = right
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }


    add(...items) {
        function _add(root, item) {
            if(!root){
                return new Node(item)
            }else if(item < root.value) {
                root.left =_add(root.left, item)
            }else if(item > root.value) {
                root.right =_add(root.right, item)
            }
            return root
        }

        for(let item of items) {
            this.root = _add(this.root, item)
        }

    }


    has(item) {
        function _has(root,item) {
            // console.log("innn",root,item)
            if(!root){
                return false
            }else if(item === root.value) {
                return true
            }else if(item < root.value) {
                return _has(root.left, item)
            }else if(item > root.value) {
                return _has(root.right,item)
            }
        }

        return _has(this.root, item)

    }


    size() {
        function _size(root) {
            if (!root) {
                return 0
            }
            return 1 + _size(root.left) +  _size(root.right)
        }
        return _size(this.root)

    }


    remove(item) {

        function _remove(root, item) {
            if(!root){
                return null
            }else if(item < root.value) {
                root.left = _remove(root.left, item)
            }else if(item > root.value) {
                root.right = _remove(root.right, item)
            }else {//equal condition
                if(!root.left) return root.right
                if(!root.right) return root.left

                //pick the minimum on thee right and make it the node
                // pick the right part of the minimum on the right and assign to the node right
                //node left will be the current elements left

                let current = root
                root = min(current.right)
                root.left = current.left
                root.right = minsright(current.right)
            }
            return root
        }

        this.root = _remove(this.root, item)

    }

    min(root) {
        while(root.left !==null) root = root.left
        return root

    }

    minsright(root){
        if(root.left === null) return root.right
        return minsright(root.left)

    }



}




let tree = new BinarySearchTree()
tree.add(1, 2, 3, 4)
tree.add(5)
console.log(tree.has(2))                           // true
console.log(tree.has(5))                           // true
tree.remove(2)                        // undefined
console.log(tree.size())                           // 4

console.log(tree.has(2))                           // true
