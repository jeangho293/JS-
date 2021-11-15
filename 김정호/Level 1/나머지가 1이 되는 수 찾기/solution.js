function solution(n) {
    for (let i = 2; i < parseInt(Math.sqrt(n - 1)) + 1; i++) {
        if ((n - 1) % i === 0) {
            return i
        }
    }
    return n - 1
}

console.log(solution(12))