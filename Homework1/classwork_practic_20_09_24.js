function sumArray(arr) {
    let summa = 0
    for (let i = 0; i < arr.length; i++) {
        summa += arr[i]
    }
    return summa
}

class SparseMatrix {
    constructor(matrix1, matrix2) {
        this.matrix1 = matrix1
        this.matrix2 = matrix2
    }
    multiply() {
        let result = []
        let a = this.matrix1
        let b = this.matrix2
        for (let y = 0; y < b.length; y++) {
            let list1 = []
            for (let x = 0; x < b.length; x++) {
                let summa = 0
                for (let j = 0; j < b.length; j++) {
                    summa += a[y][j] * b[j][x]
                }
                list1.push(summa)
            }
            result.push(list1)
        }
        return result
    }
    sum() {
        let result = []
        let a = this.matrix1
        let b = this.matrix2
        for (let y = 0; y < b.length; y++) {
            let list1 = []
            for (let x = 0; x < b[0].length; x++) {
                list1.push(a[y][x] + b[y][x])
            }
            result.push(list1)
        }
        return result
    }
}    
console.log(sumArray([1,2,2,3]))
let matrix1 = new SparseMatrix([[1, 2, 1], [4, 2, 2], [0, 1, 7]], [[7, 5, 1], [2, 1, 2], [4, 3, 4]])
console.log(matrix1.multiply())
let matrix2 = new SparseMatrix([[2, 0, 7], [4, 6, 5]], [[-1, 3, -2], [9, 2, 4]])
console.log(matrix2.sum())