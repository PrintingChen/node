var person = {
	name: 'stay',
	age: 18
}

// 这样导出去的是空对象
// exports = person; //可用来增加导出属性

exports = module.exports = person;
exports.weight = 60;
// exports.person = person;