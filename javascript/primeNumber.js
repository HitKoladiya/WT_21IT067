console.log('hii')
const calculate = (e) => {
    e.preventDefault();
    let num = document.getElementById("num").value;
    num = parseFloat(num);
    let result = [1];
    for (let i = 2; i <= num; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        result.push(i);
      }
    }
    document.getElementById("result").innerText = result.toString().split(",").join(", ");
    console.log(document.getElementById("result").innerText);
};
document.getElementById("calculate").onsubmit = calculate;
  