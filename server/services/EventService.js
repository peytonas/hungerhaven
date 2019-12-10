import mongoose from "mongoose"
import bcrypt from 'bcryptjs'
import { stringify } from "querystring"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

//bcrypt uses hashing and salt to obfiscate your password 
const SALT = 10

let invites = new Schema({
  userId: { type: ObjectId, ref: 'User' },
  status: { type: String, enum: ['pending', 'accepted', 'declined'] },
  name: { type: String },
  allergies: [{ type: String }],
  plusOnes: { type: Number, default: 0 },
  sides: [{ type: String }],
  drinks: [{ type: String }],
  desserts: [{ type: String }],
  phoneNumber: { type: String },
  guest: { type: Boolean, default: true }
})


let _schema = new Schema({
  //every email must be unique on the database
  pin: { type: String, required: true },
  maincourse: { type: String, default: "" },
  sides: [{ type: String }],
  drinks: [{ type: String }],
  desserts: [{ type: String }],
  ampm: { type: String, default: "" },
  hours: { type: String, default: '' },
  minutes: { type: String, default: '' },
  month: { type: String, default: '' },
  day: { type: String, default: '' },
  year: { type: String, default: '' },
  place: { type: String, default: "" },
  attendees: [invites],
  allergies: [{ type: String }],
  hostId: { type: ObjectId, ref: 'User', required: true },
  reqSides: [{ type: String }],
  reqDrinks: [{ type: String }],
  reqDesserts: [{ type: String }]
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