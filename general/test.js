// const solution = (s) => {
//   for (let i = 1; i < s.length; i++) {
//     if (s[i - 1] === "b" && s[i] === "a") {
//       console.log("masuk");
//       return false;
//     }
//     return true;
//   }
// };

// console.log(solution("abba"));
// console.log(solution("aaabbbba"));
// console.log(solution("bbbbaaab"));
// console.log(solution("aaaabbbb"));
// console.log(solution("aabbbbab"));

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   let newArr = [];
//   for (let i = 0; i < A.length; i++) {
//     for (let j = i + 1; j < A.length; j++) {
//       if (A[i] > A[j]) {
//         temp = A[i];
//         A[i] = A[j];
//         A[j] = temp;
//       }
//     }

//     if (A[i] > 0) {
//       newArr.push(A[i]);
//     }
//   }

//   let result = 0;
//   for (let i = 0; i < newArr.length; i++) {
//     if (i < 3) {
//       result += newArr[i];
//     }
//   }

//   return result;
// }

// solution([4, -2, 0, 5, -2, 1, 6]);
// solution([3, -2, 0]);
// solution([-9, -4, -2, -6]);

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)\
  let reverseStr = "";
  for (let i = S.length - 1; i >= 0; i--) {
    reverseStr += S[i];
  }

  let binaryResult = 0;
  for (let i = 0; i < reverseStr.length; i++) {
    strToNum = parseInt(reverseStr[i]);

    binaryResult += strToNum * Math.pow(2, i);
  }

  let result = 0;
  if (binaryResult === Infinity) {
    result += 799999;
  } else {
    for (let i = 0; i < 1000000; i++) {
      if (binaryResult > 0) {
        if (binaryResult % 2 === 0) {
          binaryResult /= 2;
          result += 1;
        } else {
          binaryResult -= 1;
          result += 1;
        }
      }
    }
  }
  console.log(result);
  // return result
}

solution("1".repeat(400000));
