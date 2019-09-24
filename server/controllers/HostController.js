import express from 'express'
import HostService from '../services/HostService';
import { Authorize } from '../middleware/authorize.js'

let _hostService = new HostService().repository

export default class ValueController {
  constructor() {
    this.router = express.Router()
      //NOTE all routes after the authenticate method will require the user to be logged in to access
      .use(Authorize.authenticated)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await _hostService.find({})
      return res.send(data)
    } catch (error) { next(error) }

  }

  async getById(req, res, next) {
    try {
      let data = await _hostService.findById(req.params.id)
      if (!data) {
        throw new Error("Invalid Id")
      }
      res.send(data)
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      //NOTE the host id is accessable through req.body.uid, never trust the client to provide you this information
      req.body.authorId = req.session.uid
      let data = await _hostService.create(req.body)
      res.send(data)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let data = await _hostService.findOneAndUpdate({ _id: req.params.id, }, req.body, { new: true })
      if (data) {
        return res.send(data)
      }
      throw new Error("invalid id")
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await _hostService.findOneAndRemove({ _id: req.params.id })
      res.send("deleted value")
    } catch (error) { next(error) }

  }

}