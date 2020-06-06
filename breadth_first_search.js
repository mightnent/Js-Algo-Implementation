function bfs(graph,root){
    var nodesLen = {};

    //assign everything as infinity
    for(var i = 0;i<graph.length;i++){
        nodesLen[i] = Infinity;
    }

    nodesLen[root] = 0;

    // init the queue array
    let Q = [root];
    let current;

    while(Q.length !== 0){
        //remove first item
        current = Q.shift();

        let curentConnect = graph[current];
        let neighbourIdx = [];
        //indexOf finds the first index where the value is 1
        let idx = curentConnect.indexOf(1);
        while(idx !== -1){
            neighbourIdx.push(idx);
            //find index where value is 1, starting from index+1
            idx = curentConnect.indexOf(1,idx+1)
        }

        for(var j=0;j<neighbourIdx.length;j++){
            if(nodesLen[neighbourIdx[j]] == Infinity){
                nodesLen[neighbourIdx[j]] = nodesLen[current]+1;
                Q.push(neighbourIdx[j]);
            }
        }
    }
    return nodesLen;
};

let graph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];

console.log(bfs(graph,1));






