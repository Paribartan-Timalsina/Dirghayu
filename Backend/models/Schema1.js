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
// Define the model
const Doctor = mongoose.model('doctors', doctorSchema);

// Export the model
module.exports = Doctor;