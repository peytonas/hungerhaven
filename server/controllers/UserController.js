import express from 'express'
import UserService from '../services/UserService';
import { Authorize } from '../middleware/authorize.js'
import EventService from '../services/EventService';

let _userService = new UserService().repository
let _eventService = new EventService().repository

export default class UserController {
    constructor() {
        this.router = express.Router()
            //NOTE all routes after the authenticate method will require the user to be logged in to access .
            .use(Authorize.authenticated)
            .get('', this.getAll)
            .get('/:id', this.getById)
            .post('', this.create)
            .put('', this.joinEvent)
            .put('/:id', this.edit)
            .delete('/:id', this.delete)
    }

    async getAll(req, res, next) {
        try {
            let data = await _userService.find({})
            return res.send(data)
        } catch (error) { next(error) }
    }
    async getById(req, res, next) {
        try {
            let data = await _userService.findById(req.params.id)
            if (!data) {
                throw new Error("Invalid Id")
            }
            res.send(data)
        } catch (error) { next(error) }
    }
    async create(req, res, next) {
        try {
            //NOTE the user id is accessable through req.body.uid, never trust the client to provide you this information
            req.body.authorId = req.session.uid
            let data = await _userService.create(req.body)
            res.send(data)
        } catch (error) { next(error) }
    }
    async joinEvent(req, res, next) {
        try {
            let user = await _userService.findById(req.session.uid)
            // @ts-ignore
            if (user.events.indexOf(req.body.pin) == -1) {
                // @ts-ignore
                user.events.push(req.body.pin)
                await user.save()
                res.send('added event to user array')
            } else {
                throw new Error('already in event')
            }
        } catch (error) {
            next(error)
        }
    }
    async edit(req, res, next) {
        try {
            let data = await _userService.findOneAndUpdate({ _id: req.params.id, }, req.body, { new: true })
            if (data) {
                await _eventService.updateMany({ attendees: { $elemMatch: { userId: req.session.uid } } }, { $set: { "attendees.$": req.body } })
                return res.send(data)
            }
            throw new Error("invalid id")
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next) {
        try {
            await _userService.findOneAndRemove({ _id: req.params.id })
            res.send("deleted guest")
        } catch (error) { next(error) }
    }
}