function maxTrianglePathSum(triangle) {
 
  function dribbleLastLine() {
    let belowLine = triangle.pop(),
        aboveLine = triangle.pop();
    for (let i = 0; i < aboveLine.length; i++)
      aboveLine[i] = Math.max(
        aboveLine[i] + belowLine[i],
        aboveLine[i] + belowLine[i + 1]
      );
    triangle.push(aboveLine);
  }
 
  do {
    dribbleLastLine();
  } while (triangle.length > 1);
  return triangle[0][0];
}
 
// test
let testTriangle = [
[1],
[8, 4],
[2, 6, 9],
[8, 5, 9, 3]
];
 
console.log(maxTrianglePathSum(testTriangle));
