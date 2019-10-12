import express from 'express'
import EventService from '../services/EventService';
import { Authorize } from '../middleware/authorize.js'
import { userInfo } from 'os';

let _eventService = new EventService().repository

import UserService from '../services/UserService'
import { exists } from 'fs';

let _userService = new UserService().repository
export default class EventController {

  constructor() {
    this.router = express.Router()
      //NOTE all routes after the authenticate method will require the user to be logged in to access
      .use(Authorize.authenticated)
      .get('', this.getAll)
      .get('/:id/events', this.getById)
      .post('', this.create)
      .post('/:id/join', this.joinEvent)
      .get('/:pin', this.getByPin)
      .put("/:eventId/plusOnes", this.addPlusOnes)
      .put('/:eventId', this.edit)
      .put('/:eventId/attendee', this.changeAttendeeStatus)
      .put('/:eventId/bringing', this.bringingThings) // this allows a user to change thier own status
      .delete('/:pin', this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await _eventService.find({})
      return res.send(data)
    } catch (error) { next(error) }

  }

  async getById(req, res, next) {
    try {
      let data = await _eventService.findById(req.params.id)
      if (!data) {
        throw new Error("Invalid Id")
      }
      res.send(data)
    } catch (error) { next(error) }
  }

  async getByPin(req, res, next) {
    try {
      let data = await _eventService.findOne({ pin: req.params.pin })
      if (!data) {
        res.send("Invalid Id")
        return
      }
      res.send(data)
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      //NOTE the event id is accessable through req.body.uid, never trust the client to provide you this information
      req.body.hostId = req.session.uid
      let data = await _eventService.create(req.body)
      res.send(data)
    } catch (error) { next(error) }
  }

  async joinEvent(req, res, next) {
    try {
      //NOTE Get the event
      let event = await _eventService.findById(req.params.id)
      if (!event) { throw new Error('Invalid Event Id') }

      //NOTE if the user is already in the list throw error
      // @ts-ignore
      if (event.attendees.find(a => a.userId == req.session.uid)) {
        res.send("already attendee")
        return
      }
      //NOTE Create the attendee as the person logged in
      let a = { userId: req.session.uid, status: "pending", name: req.body.name, allergies: req.body.allergies, plusOnes: 0, phoneNumber: req.body.phoneNumber }
      //NOTE Add user to event
      // @ts-ignore
      event.attendees.push(a)
      await event.save()
      res.send('Added Attendee')
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let data = await _eventService.findOneAndUpdate({ _id: req.params.eventId, }, req.body, { new: true })
      if (data) {
        return res.send(data)
      }
      throw new Error("invalid id")
    } catch (error) {
      next(error)
    }
  }

  async changeAttendeeStatus(req, res, next) {
    try {
      //NOTE Get the event
      let event = await _eventService.findById(req.params.eventId)
      if (!event) { throw new Error('Invalid Event Id') }

      // @ts-ignore
      let attendee = event.attendees.find(a => a.userId == req.session.uid)

      //NOTE if the user is already in the list throw error
      if (!attendee) { throw new Error("not an attendee") }
      attendee.allergies = req.body.allergies
      attendee.status = req.body.status

      await event.save()
      res.send('Added updated')
    } catch (error) { next(error) }
  }

  async bringingThings(req, res, next) {
    try {
      let event = await _eventService.findById(req.params.eventId)
      if (!event) { throw new Error('How?') }
      let attendee = event.attendees.find(a => a.userId == req.session.uid)
      if (!attendee) { throw new Error('you dont exist, bro') }
      attendee.sides = req.body.sides
      attendee.drinks = req.body.drinks
      attendee.desserts = req.body.desserts

      await event.save()

      res.send("you're bringing that now")
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await _eventService.findOneAndRemove({ pin: req.params.pin })
      let users = await _userService.find({})
      for (let user in users) {
        let index = users[user].events.indexOf(req.params.pin.toString())
        if (index != -1) {
          users[user].events.splice(index, 1)
          await users[user].save()
        }
      }
      res.send("deleted value")
    } catch (error) { next(error) }

  }
  async addPlusOnes(req, res, next) {
    try {
      let event = await _eventService.findById(req.params.eventId)
      let attendee = event.attendees.find(a => a.userId == req.session.uid)
      attendee.plusOnes = req.body.plus
      console.log(attendee);
      await event.save()
      //res.send('Plus Ones Updated')
    } catch (error) { next(error) }
  }

}