function multiplyMatrices(A, B) {
    const rowsA = A.length;
    const colsA = A[0].length;
    const colsB = B[0].length;
    
    const result = [];
    
    for (let i = 0; i < rowsA; i++) {
        result[i] = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += A[i][k] * B[k][j];
            }
            result[i][j] = sum;
        }
    }
    
    return result;
}

const A = [[1, 2], [3, 4]];
const B = [[5, 6], [7, 8]];

console.log("Матрица A:", JSON.stringify(A));
console.log("Матрица B:", JSON.stringify(B));
console.log("A × B =", JSON.stringify(multiplyMatrices(A, B)));
