import mongoose from "mongoose"
import bcrypt from 'bcryptjs'
import { stringify } from "querystring"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

//bcrypt uses hashing and salt to obfiscate your password 
const SALT = 10


let _schema = new Schema({
    //every email must be unique on the database
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    hash: { type: String, required: true },
    allergies: [{ type: String, default: '' }],
    address: { type: String, default: '' },
    phoneNumber: { type: String, default: '' },
    events: [{ type: String, default: '' }],
    guest: { type: Boolean, default: true }


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


export default class UserService {
    get repository() {
        return mongoose.model('User', _schema)
    }
    generateHash(password) {
        return bcrypt.hashSync(password, SALT)
    }
}


