//数组
var cars = ["Saab", "Volvo", "BMW"];
//创建一个数组，并为其分配值：
var Cars = new Array("Saab", "Volvo", "BMW");
//更改数组元素
cars[0]="jojo";
//数组可以包含各种类型的变量
var person = ["John", "Doe", 46];
//数组个每个item加名字
var person1 = {firstName:"John", lastName:"Doe", age:46};
//数组的长度
var x = cars.length;
//JavaScript方法toString()将数组转换为（逗号分隔）数组值的字符串。 Banana,Orange,Apple,Mango
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var s = fruits.toString();
//该join()方法还将所有数组元素连接到一个字符串中。
// 它的行为类似于toString()，但是您还可以指定分隔符：Banana * Orange * Apple * Mango
var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.join(" * ");
//删除数组最后一个元素并返回该值
fruits.pop();
//该push()方法将一个新元素添加到数组中（最后）：返回的是数组的长度
fruits.push("Kiwi");
//移除第一份元素，返回该元素
fruits.shift();
//开头添加一个元素，返回新的数组长度
fruits.unshift("Lemon");
//删除元素，该引索处元素变为undefined
delete fruits[0];
//拼接元素，first parameter定义从哪里添加元素，从1开始
//second parameter 定义移除几个元素，从开始拼接处往后数
//有重载方法
fruits.splice(2, 0, "Lemon", "Kiwi");
//合并数组,调用者在前顺序不变
fruits.concat(fruits1);
//截取数组,切片数组，创建一个新数组，源数组不受影响
fruits.slice(0,1);