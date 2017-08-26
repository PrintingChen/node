module.exports = {
	user: {
		userName: {type: String},
		pwd: {type: String},
		age: {type: Number},
		loginDate: {type: Date, default: Date.now},
		isDelete: {type: Boolean}
	}
}