/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(function(develop){
    if(develop.profession ==="developer"){
      console.log(develop);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(develop){
    if(develop.profession ==="developer"){
      console.log(develop);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let susan =  {id: 4, name:"susan", age:"20" , profession:"intern"};
  arr.push(susan);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.map(function(admin){
    if(admin.profession ==="admin"){
      arr.splice(arr.indexOf(admin),1)
    }
  })
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let concatArray = [
  { id: 4, name: "Abhishek", age: "24", profession: "student" },
  { id: 5, name: "Prakash", age: "28", profession: "businessman" },
  { id: 6, name: "Sumit", age: "35", profession: "Musician" },
];
    let ansArr = arr.concat(concatArray);
    console.log(ansArr);
}
