const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
      this.rootNode = null;
  }

  root() {
      return this.rootNode;
  }

  add(data) {
      const newNode = new Node(data);
      if (!this.rootNode) {
          this.rootNode = newNode;
      } else {
        this.insertNode(this.rootNode, newNode);
      }
  }

  insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
          } else {
            this.insertNode(node.left, newNode);
          }
      } else {
          if (node.right === null) {
            node.right = newNode;
          } else {
            this.insertNode(node.right, newNode);
          }
      }
  }

  has(data) {
      return !!this.findNode(this.rootNode, data);
  }

  find(data) {
      return this.findNode(this.rootNode, data);
  }

  findNode(node, data) {
      if (node === null) {
          return null;
      }
      if (data < node.data) {
          return this.findNode(node.left, data);
      } else if (data > node.data) {
          return this.findNode(node.right, data);
      } else {
          return node;
      }
  }

  remove(data) {
      this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
      if (node === null) {
        return null;
      }
      if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
      } else {
        if (node.left === null && node.right === null) {
            return null;
          }
          if (node.left === null) {
              return node.right;
          } else if (node.right === null) {
              return node.left;
          }
          node.data = this.minValue(node.right);
          node.right = this.removeNode(node.right, node.data);
          return node;
      }
  }

  min() {
      if (!this.rootNode) {
        return null;
      }
      let current = this.rootNode;
      while (current.left !== null) {
        current = current.left;
      }
      return current.data;
  }

  max() {
      if (!this.rootNode) {
        return null;
      }
      let current = this.rootNode;
      while (current.right !== null) {
        current = current.right;
      }
      return current.data;
  }

  minValue(node) {
      let current = node;
      while (current.left !== null) {
        current = current.left;
      }
      return current.data;
  }
}


module.exports = {
  BinarySearchTree
};