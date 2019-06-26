'use strict';

const BaseValidator = require('./BaseValidator');

class AttendanceValidator extends BaseValidator {
  get storeAttendance() {
    return {
      name: 'required|min:2|max:100',
      class: 'required|min:4|max:10',
      nis: `required:min:4:max:10|unique:attendance,nis`,
      username: `required|min:5|max:100|unique:attendance,username`,
      password: 'required|min:6|max:255'
    };
  }
}

export default AttendanceValidator;
