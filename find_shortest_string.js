function findShortestString(arr) {
  return arr.reduce((a,b) => a.length > b.length ?  b : a )
}

// a=shortest 
// b=string

 // THE LONGER WAY OF DOING THE EXACT SAME THING THAT'S ON LINE 2
//   let shortest = arr[0]

//   arr.forEach(string => {
//     if(string.length < shortest.length){
//       shortest = string
//     }
//   })
//   return shortest;
// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const current = Date.now()

  for(let i=0; i<1000; i++){
    findShortestString(['flower', 'juniper', 'lily', 'dandelion']);
    findShortestString(longInput);
  }

  avgTime = (Date.now() - current) / 1000
  console.log(avgTime)
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
