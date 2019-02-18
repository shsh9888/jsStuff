// Implement a BinaryTree class with breadth first search and inorder, preorder, and postorder depth first search functions.

class Node {
    constructor(value, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
    }

}


class BinaryTree {
    constructor() {
        this.root = null
    }

    add(...items) {

        function _add(root, item) {
            if (!root) {
                root = new Node(item)
            } else if (item < root.value) {
                root.left = _add(root.left, item)
            } else if (item > root.value) {
                root.right = _add(root.right, item)
            }
            return root
        }

        for (let item of items) {
            this.root = _add(this.root, item)
        }
    }


    inorder(fn) {

        function _inorder(root, fn) {
            if (!root) return

            _inorder(root.left, fn)
            fn(root.value)
            _inorder(root.right, fn)

        }

        _inorder(this.root, fn)
    }

    preorder(fn) {

        function _preorder(root, fn) {
            if (!root) return

            fn(root.value)

            _preorder(root.left, fn)
            _preorder(root.right, fn)

        }

        _preorder(this.root, fn)
    }

    postorder(fn) {

        function _postorder(root, fn) {
            if (!root) return


            _postorder(root.left, fn)
            _postorder(root.right, fn)
            fn(root.value)


        }

        _postorder(this.root, fn)
    }

    bfs(fn) {
        function _bfs(queue) {
            if (queue.length < 1) return

            let root = queue.shift()
            fn(root.value)
            if (root.left) queue.push(root.left)
            if (root.right) queue.push(root.right)
            _bfs(queue)


        }

        if (this.root)
            _bfs([this.root])
    }


    dfs(fn) {
        //for a binary tree dfs is same as preorder
        this.preorder(fn)

    }


}


let tree = new BinaryTree()
let fn = value => console.log(value)
tree.add(3, 1, 2, 6, 9, 4, 8, 0, 12)
// console.log("Inorder traversal")
// tree.inorder(fn)
// console.log("Preorder traversal")
// tree.preorder(fn)
// console.log("Postorder traversal")
// tree.postorder(fn)

console.log("BFS ")

tree.bfs(fn)


console.log("DFS ")

tree.dfs(fn)

