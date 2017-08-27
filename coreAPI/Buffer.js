/*
Buffer对象是Node处理二进制数据的一个接口。它是Node原生提供的全局对象，可以直接使用，不需要
require('buffer')。
JavaScript比较擅长处理字符串，对于处理二进制数据（比如TCP数据流），就不太擅长。Buffer对象就
是为了解决这个问题而设计的。它是一个构造函数，生成的实例代表了V8引擎分配的一段内存，是一个类
似数组的对象，成员都为0到255的整数值，即一个8位的字节

 */
var bytes = new Buffer(256);
for(var i=0; i<bytes.length; i++){
	bytes[i] = i;
}
console.log(bytes[100])

var b1 = new Buffer(15);
console.log(b1)