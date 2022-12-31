function getGCD(k, j) {
    let max = k > j ? k : j;
    let GCD = 0;
    for (let i = 1; i <= max; i++) {
      if (k % i === 0 && j % i === 0) {
        GCD = i;   // 최대공약수
      }
    }
    return GCD;
  }
  
  console.log(`308과 20의 최대공약수 : ${getGCD(308, 20)}`);
  console.log(`45과 38의 최대공약수 : ${getGCD(45, 38)}`);