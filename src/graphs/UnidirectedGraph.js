/**
 * Unidirected Graph Implementation
 * 
 * This class represents a unidirected graph using an adjacency list.
 * It provides methods to add and remove nodes and edges, check for node existence,
 * retrieve neighbors, and check adjacency between nodes.
 */
class UnidirectedGraph {
  constructor() {
    this.nodes = new Set();
    this.adjacencyList = {};
  }

  addNode(node) {
    this.nodes.add(node);
    this.adjacencyList[node] = [];
  } 

  hasNode(node) {
    return this.nodes.has(node);
  }

  removeNode(node) {
    if (this.nodes.has(node)) {  
      for (let neighbor in this.adjacencyList) {
        this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(
          (n) => n !== node
        );
      }
      this.nodes.delete(node);
      delete this.adjacencyList[node];
    } else {
      throw new Error("Node not found in the graph");
    }
  }

  addEdge(node1, node2) { 
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      this.adjacencyList[node1].push(node2);
      this.adjacencyList[node2].push(node1);
    } else {
      throw new Error("One or both nodes not found in the graph");
    }
  }

  hasEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      return this.adjacencyList[node1].includes(node2);
    } else {
      throw new Error("One or both nodes not found in the graph");
    }
  }

  removeEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      this.adjacencyList[node1] = this.adjacencyList[node1].filter(
        (neighbor) => neighbor !== node2
      );
      this.adjacencyList[node2] = this.adjacencyList[node2].filter(
        (neighbor) => neighbor !== node1
      ); 
    } else {
      throw new Error("One or both nodes not found in the graph");
    }
  }

  neighbors(node) {
    if (this.nodes.has(node)) {
      return this.adjacencyList[node];
    } else {
      throw new Error("Node not found in the graph");
    }
  }

  adjacent(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      return this.adjacencyList[node1].includes(node2);
    } else {
      throw new Error("One or both nodes not found in the graph");
    }
  }
}