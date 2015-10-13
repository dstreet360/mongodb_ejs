var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var UserSchema = new Schema({
   fname: String,
   lname: String,
   email: String,
   management: Boolean,
   marketing: Boolean,
   genbus: Boolean,
   economics: Boolean
});

UserSchema.virtual('fullName').get(function() {
  return this.fname + ' ' + this.lname;
}).set(function(fullName) {
  var splitName = fullName.split(' ');
  this.fname = splitName[0] || '';
  this.lname = splitName[1] || '';
});

UserSchema.set('toJSON', {
  getters: true
});

mongoose.model('User', UserSchema);