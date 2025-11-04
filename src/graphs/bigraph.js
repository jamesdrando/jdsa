/**
 * Bidirectional Graph Implementation
 * 
 * This class represents a bidirected graph using a hash map
 * to store nodes and their adjacency lists.
 * 
 * @methods
 * addNode(node): Adds a node to the graph.  
 * hasNode(node): Checks if a node exists in the graph.  
 * removeNode(node): Removes a node and its associated edges from the graph.  
 * addEdge(node1, node2): Adds a edge between node1 and node2.  
 * hasEdge(node1, node2): Checks if a directed edge from node1 to node2 exists.  
 * removeEdge(node1, node2): Removes the edge from node1 to node2.  
 * neighbors(node): Returns the list of neighbors for a given node.  
 * adjacent(node1, node2): Checks if node1 and node2 are adjacent.   
 */
class BiGraph {
  constructor() {
    this.nodes = new Map()
  }

  addNode(node) {
    this.nodes.set(node, []);
  } 

  hasNode(node) {
    return this.nodes.has(node);
  }

  removeNode(node) {
    if (this.nodes.has(node)) {  
      for (let neighbor in this.nodes.get(node)) {
        this.nodes.set(neighbor, this.nodes.get(neighbor).filter(
          (n) => n !== node
        ));
      };
      this.nodes.delete(node);
    } else {
      throw new Error("Node not found in the graph");
    }
  }

  addEdge(node1, node2) { 
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      this.nodes.get(node1).push(node2);
      this.nodes.get(node2).push(node1);
    } else {
      throw new Error("One or both nodes not found in the graph");
    }
  }

  hasEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      return this.nodes.get(node1).includes(node2);
    } else {
      throw new Error("One or both nodes not found in the graph");
    }
  }

  removeEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      this.nodes.set(node1) = this.nodes.get(node1).filter(
        (neighbor) => neighbor !== node2
      );
      this.nodes.set(node2) = this.nodes.get(node2).filter(
        (neighbor) => neighbor !== node1
      );
    } else {
      throw new Error("One or both nodes not found in the graph");
    }
  }

  neighbors(node) {
    if (this.nodes.has(node)) {
      return this.nodes.get(node);
    } else {
      throw new Error("Node not found in the graph");
    }
  }

  adjacent(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      return this.nodes.get(node1).includes(node2);
    } else {
      throw new Error("One or both nodes not found in the graph");
    }
  }
}