function solution(arr) {
  if (arr.length > 1) {
    return arr.filter((index) => index !== Math.min(...arr));
  } else {
    return [-1];
  }
}