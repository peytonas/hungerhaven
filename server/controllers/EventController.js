import express from 'express'
import EventService from '../services/EventService';
import { Authorize } from '../middleware/authorize.js'
import { userInfo } from 'os';

let _eventService = new EventService().repository

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
      .put('/:eventId', this.edit)
      .put('/:eventId/attendee', this.changeAttendeeStatus) // this allows a user to change thier own status
      .delete('/:id', this.delete)
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
        throw new Error("Invalid Id")
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
      if (event.attendees.find(a => a.userId == req.session.uid)) { throw new Error("already attendee") }

      //NOTE Create the attendee as the person logged in
      let a = { userId: req.session.uid, status: "pending", name: req.body.name, allergies: req.body.allergies }
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

  async delete(req, res, next) {
    try {
      await _eventService.findOneAndRemove({ _id: req.params.id })
      res.send("deleted value")
    } catch (error) { next(error) }

  }

}