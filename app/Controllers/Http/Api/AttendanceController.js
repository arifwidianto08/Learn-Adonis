'use strict';
/** @typedef {import('@adonisjs/framework/src/Request')} Request */

const BaseController = require('./BaseController');
/** @type {typeof import('../../../Models/Attendance')} */
const Attendance = use('App/Models/Attendance');
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

  async exampleAttendance({ response }) {
    const attendance = [
      {
        name: 'Arif Widianto',
        class: 'XI-RPL-1',
        nis: 4091
      },
      {
        name: 'Arif',
        class: 'XI-RPL-2',
        nis: 4092
      },
      {
        name: 'Widianto',
        class: 'XI-RPL-3',
        nis: 4093
      }
    ];
    response.apiCollection(attendance);
  }

  async update({ response, params, request }) {
    // obj.response.apiCollection(JSON.stringify(obj));

    response.apiCollection([]);
  }
}

module.exports = AttendanceController;
