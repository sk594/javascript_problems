//1.  Get max count of conjugative 1's in given below array
// var nums = [1,0,0,1,1,1,0,0,1,0,1,1,0,0,1];

let nums = [1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1];

const conjugativeMaxOneCount = (arr) => {
  let count = 0;
  let result = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == 0) {
      count = 0;
    } else {
      count++;
      result = Math.max(result, count);
    }
  }
  return result;
};

console.log("conjugativeOneCount======>", conjugativeMaxOneCount(nums));

//2.   Get the count of persons group by country in give array of persons

// [{id:1,name:"a"},{id:2,name:"b"},{id:3,name:"c"},{id:1,name:"d"},{id:3,name:"e"}]
// Expected Output: [{id:1,name:["a","d"]},{id:2,name:"b"},{id:3,name:["c","e"]}

var person = [
  {
    name: "xyz",
    address: {
      state: "TX",
      country: "US",
    },
  },
  {
    name: "xyz1",
    address: {
      state: "TX",
      country: "US1",
    },
  },
  {
    name: "xyz2",
    address: {
      state: "TX",
      country: "US2",
    },
  },
  {
    name: "xyz3",
    address: {
      state: "TX",
      country: "US",
    },
  },
];

const groupByCountry = (arr) => {
  let obj = {};
  for (let person of arr) {
    obj[person.address.country] = obj[person.address.country] || [];
    obj[person.address.country].push(person.name);
  }
  return obj;
};

console.log("groupByCountry======>", groupByCountry(person));

//3. Convert input array to output array as shown below ?

var InputArr = [{ p: 4 }, { p: 2 }, { p: 9 }, { p: 6 }];
var outputArr = [{ p: 2 }, {}, { p: 4 }, {}, { p: 6 }, {}, {}, { p: 9 }];

const updateArr = (arr) => {
  let result = [];
  arr = arr.sort((a, b) => a.p - b.p);
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], i, arr.length - 1);
    if (i === 0) {
      result.push(arr[i]);
    } else {
      result.push({}, arr[i]);
    }
  }
  return result;
};

console.log(updateArr(inputArr));

//4. write a code and check whether a given string is palindrome or not, just return true or false

function isPalindrome(str) {
  console.log(str);
  if (str.length === 0 || str.length === 1) return true;

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }
  return false;
}
console.log(isPalindrome("foobar"));

//5. write a code and check if any anagram of a string is palindrome or not
function isAnagramOfStrIsPalindrome(str) {
  const obj = {};

  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = ++obj[str[i]] || 1;
  }

  let count = 0;
  for (let i in obj) {
    if (obj[i] % 2 === 1) {
      count++;
    }
  }

  if (count > 1) {
    return false;
  }
  return true;
}

const q = isPossible("geeksogeeks");
console.log(q);
const z = isPossible("geeksforgeeks");
console.log(z);

//6. Merge two arrays also it should be an sorted while merging it
// arr1 = [ 10, 20, 30, 45, 50]
// arr2 = [ 15, 25, 26, 35]

const mergeSortedArr = (a1, a2) => {
  let i = 0,
    j = 0,
    result = [];

  while (a1.length > i && a2.length > j) {
    if (a1[i] <= a2[j]) {
      result.push(a1[i]);
      i++;
    } else {
      result.push(a2[j]);
      j++;
    }
  }

  while (a1.length > i) {
    result.push(a1[i]);
    i++;
  }

  while (a2.length > j) {
    result.push(a1[j]);
    j++;
  }

  return result;
};

console.log(mergeSortedArr([1, 3, 4, 5, 8], [2, 6, 7]));

//7. Given an array of length N, find the continuous sub array of length M with largest sum.
const minSubArrayLen = (arr, no) => {
  let result = Infinity;
  let sum = 0;
  let left = 0;
  let right = 0;

  while (left < arr.length) {
    if (sum < no && right < arr.length) {
      sum += arr[right];
      right++;
    } else if (sum >= no) {
      result = Math.min(result, right - left);
      sum -= arr[left];
      left++;
    } else {
      break;
    }
  }
  console.log("result: ", result);
  return result === Infinity ? 0 : result;
};

console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));

// 8. write a program for printing fibonacci series with memoization

let cache = {};
const fib = (n) => {
  if (cache[n]) {
    return cache[n];
  }
  if (n <= 0) return 0;
  if (n == 1) return 1;
  let result = fib(n - 1) + fib(n - 2);
  cache[n] = result;
  return result;
};
console.log(fib(10));

const fibMemo1 = (n, obj = {}) => {
  if (obj[n]) {
    return obj[n];
  }

  if (n <= 1) return n;
  obj[n] = fibMemo1(n - 1, obj) + fibMemo1(n - 2, obj);
  return obj[n];
};

console.log("fibMemo==>", fibMemo1(10));

//9. remove duplicates in a const array
function uniqueItem(arr) {
  let uniqueObj = {};

  for (let item of arr) {
    uniqueObj[item] = ++uniqueObj[item] || 1;
  }

  let uniqueNumber = Object.keys(uniqueObj);
  let apperOnceNumber = [];
  for (let item in uniqueObj) {
    if (uniqueObj[item] == 1) {
      apperOnceNumber.push(item);
    }
  }
  console.log(uniqueObj);
  return { uniqueNumber, apperOnceNumber };
}

//10. print each element from 2X3 matrix (time complexity)
var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const printMatrix = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
};
printMatrix(arr);

//10--------
// consider the array accounts = [[1,2,3], [1,2,1]];
// row is user and column is bank balance find user with max balance
// input : [[1,2,3], [1,2,1]] output : 6
const findMaxBalance = (arr) => {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let balance = 0;
    for (let j = 0; j < arr[i].length; j++) {
      balance = balance + arr[i][j];
    }
    max = Math.max(balance, max);
  }
  return max;
};
console.log(findMaxBalance(a));

//11. flatten array problem solving

const flatArr = (arr) => {
  let flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray = [...flatArray, ...flatArr(arr[i])];
    } else {
      flatArray.push(arr[i]);
    }
  }
  console.log("flatArray===>", flatArray);
  return flatArray;
};
console.log(
  flatArr([
    [1, 2],
    [3, 4],
    [
      [5, 6],
      [7, 8, 9],
    ],
    [10, 11, 12, 13, 14, 15],
  ])
);

//12. coding question: sum of numbers in between string
// input: “add123456with376765willgive887686”, expected output: 1387907
const sumOfNumbers = (str) => {
  let sum = 0;
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) {
      temp = temp + str[i];
      if (!Number(str[i + 1])) {
        sum = sum + Number(temp);
        temp = "";
      }
    }
  }
  return sum;
};
console.log("Welcome to Programiz!", sumOfNumbers(str));

//13. / 3. write a program to shift array element based on input index array  ----------------------
//    Input : let arr = [1,2,3,4,5,6,7,8,9,10];
//            let indexes = [9,8,7,6,5,4,3,2,1,0];
//    Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let indexes = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
//    Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const arrModify = (arr, index) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[index[i]] = arr[i];
  }

  console.log(Object.values(obj));
  return Object.values(obj);
};

console.log(arrModify(arr, indexes));

//14. panagram
let ip = "The quick brown fox jumps over the lazy dog";

const panagram = (str) => {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  alf = alphabets.split("");
  str = str.toLowerCase();

  for (const element of str) {
    if (alf.indexOf(element !== 0)) {
      let x = alf.splice(alf.indexOf(element, x));
    }
  }

  return alf.length === 0 ? true : false;
};

console.log(panagram(ip));
