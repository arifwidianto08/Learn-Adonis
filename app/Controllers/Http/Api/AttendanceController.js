'use strict';
/** @typedef {import('@adonisjs/framework/src/Request')} Request */

const BaseController = require('./BaseController');
/** @type {typeof import('../../../Models/Attendance')} */
const Attendance = use('App/Models/Attendance');
const Hash = use('Hash');
const { storeAttendance } = require('../../../Validators/Attendance');

/**
 *
 * @class AttendanceController
 */
class AttendanceController extends BaseController {
  /**
   * Index
   *
   * @param {object} ctx
   * @param {AuthSession} ctx.auth
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index({ request, response, decodeQuery }) {
    const attendances = await Attendance.all();

    return response.apiCollection(attendances);
  }

  async getAttendanceById({ response, instance }) {
    const attendance = instance;
    return response.apiItem(attendance);
  }

  async store({ request, response }) {
    const attendances = new Attendance(request.all());
    const username = request.input('username');

    // validate body
    await this.validate(request.all(), storeAttendance());

    const usernameExsist = await Attendance.findBy({ username });
    if (usernameExsist) {
      return response.unprocessableEntity('Username');
    }

    const password = await Hash.make(request.input('password'));
    attendances.set({
      password: password
    });

    await attendances.save();
    return response.apiCollection(request.all());
  }

  async update({ response, params, request }) {
    // obj.response.apiCollection(JSON.stringify(obj));

    response.apiCollection([]);
  }

  async destroy({ response, instance }) {
    const attendance = instance;
    await attendance.delete();
    response.apiDeleted();
  }
}

module.exports = AttendanceController;
