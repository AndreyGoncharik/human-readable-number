module.exports = function toReadable (num) {
  const arr = {
      1:"one",
      2:"two",
      3:"three",
      4:"four",
      5:"five",
      6:"six",
      7:"seven",
      8:"eight",
      9:"nine",
      10:"ten",
      11:"eleven",
      12:"twelve",
      13:"thirteen",
      14:"fourteen",
      15:"fifteen",
      16:"sixteen",
      17:"seventeen",
      18:"eighteen",
      19:"nineteen",
      20:"twenty",
      30:"thirty",
      40:"forty",
      50:"fifty",
      60:"sixty",
      70:"seventy",
      80:"eighty",
      90:"ninety",
  };
  
  
       
  let first = num.toString().slice(-1);
  let second = num.toString().slice(-2);
  let third = num > 99 ? num.toString().slice(-3, 1) : false;
  let result = ''; 
  if (num == 0) result += "zero";
  
  Object.entries(arr).forEach(([k, v]) => {
      if (third) third == k ? result += `${v} hundred ` : false;
  });
  
  Object.entries(arr).forEach(([k, v], i, a) => {
      if (+second == k) {
          result += `${v} `;
          
      } else if (second > 19 && k >= Math.floor(+second / 10) * 10 && k < +second) {
                  let sec = Math.floor(+second / 10) * 10;
                  for (const [n, z] of Object.entries(a)) {
                      if (z[0] == sec) {
                        result += `${z[1]} `;
                      }
                  }
                  for (const [x, y] of Object.entries(a)) {
                      if (y[0] == first) {
                        result += `${y[1]}`;
                      }
                  }
          
      }
      
  });
  return result.trim();
  
};
