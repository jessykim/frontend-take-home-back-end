import mongoose from 'mongoose'

const Schema = mongoose.Schema

const formSchema = new Schema ({
  name: String,
  email: String,
  password: String,
  occupation: String,
  state: String
})

const Form = mongoose.model('Form', formSchema)

export { Form }