/**
 * @param {number[]} arr
 * @returns {number}
 */
function longest_increasing_subsequence_Length(arr) {
  const lis = Array(arr.length).fill(1);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && lis[i] <= lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
    }
  }

  return Math.max(...lis);
}

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function longest_increasing_subsequence_Array(arr) {
  const lis = Array(arr.length);
  for (let i = 0; i < lis.length; i++) {
    lis[i] = Array();
  }
  lis[0].push(arr[0]);
  debugger;
  for (let i = 1; i < arr.length; i++) {
    lis[i].push(arr[i]);

    let temp = [];
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && lis[i].length <= lis[j].length + 1) {
        debugger;
        temp = [...lis[j], ...lis[i]];
        debugger;
      }
    }
    lis[i] = temp;
  }
  console.log(lis);

  return lis.reduce((acc, val) => );
}

console.log('1'+ longest_increasing_subsequence_Array([0, 1, 2]));

/* Test */
const tests = [
  {
    desc: "1",
    args: [[0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]],
    res: 6
  },
  {
    desc: "2",
    args: [[1, 2, 3, 4, 5]],
    res: 5
  },
  {
    desc: "3",
    args: [[1, 2, 0, 4, 5]],
    res: 4
  },
  {
    desc: "3",
    args: [[1, 2, 0, -4, 5]],
    res: 3
  }
];

// tests.forEach(test => {
//   const receivedResult = longest_increasing_subsequence_Length(...test.args);
//   if (test.res === receivedResult) {
//     console.log(`Pass: ${test.desc} | ${test.args.join(", ")} => ${test.res}`);
//   } else {
//     console.log(`\nFail: ${test.desc}`);
//     console.log(`expected: ${test.res} | received: ${receivedResult}\n`);
//   }
// });
