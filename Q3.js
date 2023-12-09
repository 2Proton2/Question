// input = [{ a: 1 }, { b: 2 }, { c: 3 }];
// output = { a: 1, b: 2, c: 3 };

let input = [{ a: 1 }, { b: 2 }, { c: 3 }]

answer = Object.assign({}, ...input);

console.log(answer);