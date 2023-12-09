//  input = { a: 1, b: 2, c: 3 };
//  output = [{ a: 1 }, { b: 2 }, { c: 3 }];


let input = { a: 1, b: 2, c: 3 };

function objToArr(obj){
    let arr = Object.keys(obj).map((e) => {
        return {[e]: obj[e]};
    });
    return arr;

}

let answer = objToArr(input);

console.log(answer);