const funcionA = () => {
  console.log(1);
  funcionB();
  console.log(2);
}

const funcionB = () => {
  console.log(3);
  funcionC();
  console.log(4);
}

const funcionC = () => {
  console.log(5);
}

funcionA();
