var mongoose = require('mongoose');
// console.log(mongoose);

mongoose.connect('mongodb://localhost:27017/album');

var Schema = mongoose.Schema;
var textSchema = new Schema({
    content: String
});
var Text = mongoose.model('Text', textSchema);

var test = new Text();
test.content = '王五';
test.save(function(error){
    if(error){
        console.log(error);
        return;
    }else{
        console.log('save success');
        // mongoose.disconnect();
    }
});
