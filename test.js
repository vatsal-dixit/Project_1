var obj = {data:[ {id:0,title:"Vatsal Dixit",age:20}, {id:1,title:"Sumedha",age:20}, {id:2,title:"Aayushi",age:21} ]};
var res = obj.data.filter((object) => {return object.id == 2});
console.log(res);