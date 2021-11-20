const mat =[

    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let sum=0


let sum2 =0

for (let i = 0, j=mat.length-1;  i< mat.length; i++,j--) {

    sum += mat[i][i]
    
    sum2 += mat[i][j]
}


console.log(`Principal Diagonal = ${sum}`)
console.log(`Secondary Diagonal = ${sum2}`)