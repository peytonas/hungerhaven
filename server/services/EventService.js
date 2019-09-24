import mongoose from "mongoose"
import bcrypt from 'bcryptjs'
import { stringify } from "querystring"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

//bcrypt uses hashing and salt to obfiscate your password 
const SALT = 10


let _schema = new Schema({
  //every email must be unique on the database
  pin: { type: String, required: true },
  maincourse: { type: String, required: true },
  sides: { type: Array, required: true, default: [] },
  drinks: { type: Array, required: true, default: [] },
  desserts: { type: Array, required: true, default: [] },
  time: { type: String, required: true, default: "" },
  place: { type: String, required: true, default: "" },
  attending: { type: Array, required: true, default: [] },
  allergies: { type: Array, required: true, default: [] },

}, { timestamps: true })

//schema.methods are used to add a method to a Model instance
_schema.methods.validatePassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.hash, function (err, isMatch) {
      if (err || !isMatch) {
        return reject(err)
      }
      return resolve(isMatch)
    })
  })
}


export default class EventService {
  get repository() {
    return mongoose.model('Event', _schema)
  }
  generateHash(password) {
    return bcrypt.hashSync(password, SALT)
  }
}