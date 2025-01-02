const mongoose=require('mongoose')
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  major: {
    type: String,
    required: false
  },
  phone: {
    type: Number,
    required: false
  },
  
  availability: {
    type: [{
      type: Date,
      required: true
    }],
    required: true
  }
});
// Explicitly connect to MERNstack
const db = mongoose.connection.useDb('MERNstack');
// Define the model
const Doctor = db.model('Doctor', doctorSchema);

// Export the model
module.exports = Doctor;