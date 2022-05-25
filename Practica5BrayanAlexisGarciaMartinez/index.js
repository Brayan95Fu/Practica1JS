function print(mat){
    let renglon = ""
    for (let i=mat.length-1; i >= 0 ; i-- ){
        renglon="[ "
        for(let j=mat[0].length-1; j >= 0 ; j--){
            renglon += ""+mat[i][j]+ " ";
        }
        renglon += "]"
        console.log(renglon);
    }
}

let Matriz = [[1,2,3],[4,5,6],[7,8,9]];
let Salida1= [[9,8,7],[6,5,4],[3,2,1]];
let Salida2= [[1,4,7],[2,5,8],[3,6,9]];
let Salida3= [[9,6,3],[8,5,2],[7,4,1]];

print(Matriz);
console.table(Matriz);
print(Salida1);
console.table(Salida1);
print(Salida2);
console.table(Salida2);
print(Salida3);
console.table(Salida3);