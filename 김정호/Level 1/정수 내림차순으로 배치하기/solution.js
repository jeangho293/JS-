function solution(n) {
  let array = [...String(n)].sort((a, b) => {
      if (a < b) return 1;
      if (a > b) return -1;
      if (a === b) return 0;
    }
  );
  return Number(array.join(''));
}

console.log(solution('128934'));