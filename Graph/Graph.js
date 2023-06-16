class Graph{
    constructor(){
        this.adjacencyList={}
    }
    
    addVertex(vertex){
        this.adjacencyList[vertex]=[]
        // if(!this.adjacencyList[vertex]){
        //     this.adjacencyList[vertex]=new Set()  
        // }
    }

    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
     
    hasEdges(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2) 
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    bfs(startVertex) {
        const visited = {};
        const queue = [];
        visited[startVertex] = true;
        queue.push(startVertex);
        while (queue.length > 0) {
          const currentVertex = queue.shift();
          console.log(currentVertex);
          this.adjacencyList[currentVertex].forEach((neighbor) => {
            if (!visited[neighbor]) {
              visited[neighbor] = true;
              queue.push(neighbor);
            }
          });
        }
      }

      dfs(startVertex) {
        const visited = {};
        const dfsHelper = (vertex) => {
          visited[vertex] = true;
          console.log(vertex);
          this.adjacencyList[vertex].forEach((neighbor) => {
            if (!visited[neighbor]) {
              dfsHelper(neighbor);
            }
          });
        };
    
        dfsHelper(startVertex);
      }
  

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]])
        }
    }
}


const graph=new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdges("A","B")
graph.addEdges("B","C ")

graph.display()
// console.log("DFS")
// graph.dfs("B")
console.log("BFS")
graph.bfs("B")
// console.log(graph.hasEdges("A","B"))
// graph.removeVertex("B")
// graph.display()

