const spinnerArr = [
  '\r|  ',
  '\r/  ',
  '\r-  ',
  '\r\\  ',
  '\r|  ',
  '\r/  ',
  '\r-  ',
  '\r\\  ',
  '\r|  \n'
];

let delay = 0;

for (const arr of spinnerArr) {
  setTimeout(() => {
    process.stdout.write(arr);
  }, delay);
  delay += 200;
}