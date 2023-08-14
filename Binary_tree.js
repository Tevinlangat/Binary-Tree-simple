var tree;
 //This is the bare structure which has only the root node
 const Tree = function () {
    this.root = null;
 }

//  This is the node which is then every time added to the root of the tree
 const Node = function (val){
    this.value = val;
    this.right = null;
    this.left = null;
 }

//  NB: Prototype is used to add functions to the constructor function
    // NB: 🙅‍♂️❌Prototype cannot be used in ARROW FUNCTIONS  n = () => {}

// we are using prototype to add the function addValue to our previous Tree function
Tree.prototype.addValue = function(n) {
    var node = new Node(n)
    if (this.root == null) {
        this.root = node;
    } else {
        this.root.addNode(n)
    }

    return this.root
}

// we are using prototype again to add the function addNode
Node.prototype.addNode = function(val) {
    // First we have to check if the value is bigger or smaller than initial to know where to place it
    if(val.value < this.value){
        // Then again we check if the left child node is empty since it`s smaller value
        if(this.left == null){
            // since it`s empty we asign the value
            this.left = val
        } else {
            // we have to repeat a check in child node, so we repeat this function again on children
            this.left.addNode(val)
        }
    } else if (val.value > this.value) {
        // Check if the right value is empty 
        if(this.right == null){
            this.right = val
        } else(
            // at this point the right is not empty so we should repeat simillar process to it`s children
            this.right.addNode(val)
        )
    }
}


tree = new Tree()
tree.addValue(4)
