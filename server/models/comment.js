console.log('Comment Model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// build your friend schema and add it to the mongoose.models
CommentSchema = new mongoose.Schema({
  comment: {type:String, required:true},
  _user:{type:Schema.Types.ObjectId, ref:'User'},
  _answer:{type:Schema.Types.ObjectId, ref:'Answer'}
},
{
  timestamps:true
}),
Comment = mongoose.model('Comment', CommentSchema);
