const matA =[

    [2,4,4,4],
    [3,2,2,2],
    [1,5,9,1],
    [5,5,5,5]
]

const matB =[

    [2,4,4,4],
    [3,2,2,2],
    [1,5,9,1],
    [5,5,5,5]

]

var result = []

for (let i = 0; i < matA.length; i++) {

    var temp =[]

    for (let j = 0; j < matA[i].length; j++) {
        
        temp.push(matA[i][j] * matB[i][j])   
    }
    result.push(temp)
}

console.log(result)