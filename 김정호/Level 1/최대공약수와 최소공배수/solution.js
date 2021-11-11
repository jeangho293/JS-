const solution = (n, m) => {
  const GCD = (a, b) => a % b === 0 ? b : GCD(b, a % b)
  const LCD = n * m / GCD(n, m);
  return [GCD(n, m), LCD]
};