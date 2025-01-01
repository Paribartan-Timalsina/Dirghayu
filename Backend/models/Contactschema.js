const mongoose=require('mongoose')
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  message:{
    type:String,
    required:false
  }
});
// Define the model
const Contact = mongoose.model('contacts', contactSchema);

// Export the model
module.exports = Contact;