console.log('Topic Model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// build your friend schema and add it to the mongoose.models
TopicSchema = new mongoose.Schema({
  category: {type:String, required:true},
  topic: {type:String, required:true},
  description: {type: String, required:true},
  answers: [{type:Schema.Types.ObjectId, ref:'Answer'}],
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
},
{
  timestamps:true
}),
Topic = mongoose.model('Topic', TopicSchema);
