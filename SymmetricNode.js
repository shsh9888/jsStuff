// <!DOCTYPE html>
// <html>
// <head>
// <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width">
//     <title>Facebook DOM Traversal</title>
// </head>
// <body>
// <div id="rootA">
//     <div>
//     <div></div>
//     </div>

    // <div></div>


    // <div>
    // <div>
    // <div id="nodeA"></div>
    // <div></div>
    // </div>
    // </div>
    // </div>

    // <div id="rootB">
    // <div>
    // <div></div>
    // </div>

    // <div></div>

    // <div>
    // <div>
    // <div id="nodeB"></div>
    // <div></div>
    // </div>
    // </div>
    // </div>
    // </body>
    // </html>




const rootA = document.getElementById('rootA');
const rootB = document.getElementById('rootB');

const nodeA = document.getElementById('nodeA');
const nodeB = document.getElementById('nodeB');

function getPath(root, node) {
    const path = [];

    while (node !== root) {
        const parent = node.parentElement;
        const children = Array.from(parent.children);
        const nodeIndex = children.indexOf(node);
        path.push(nodeIndex);
        node = parent;
    }

    return path;
}

function getNodeFromPath(node, path) {
    const toWalk = [...path];

    while (toWalk.length > 0) {
        node = node.children[toWalk.pop()];
    }

    return node;
}

function getSymmetricNode(rootA, rootB, nodeA) {
    const pathToNode = getPath(rootA, nodeA);
    return getNodeFromPath(rootB, pathToNode);
}


const targetNode = getSymmetricNode(rootA, rootB, nodeA);

console.log(nodeB === targetNode);