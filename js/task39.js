function bfs(root) {
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.value);
        
        if (node.children) {
            for (const child of node.children) {
                queue.push(child);
            }
        }
    }
    
    return result;
}

const tree = {
    value: 1,
    children: [
        { value: 2, children: [{ value: 4 }, { value: 5 }] },
        { value: 3, children: [{ value: 6 }] }
    ]
};

console.log("BFS обход дерева:", bfs(tree));
