'use strict';

const Route = use('Route');

Route.group(() => {
  Route.get('/', 'Api/AttendanceController.index');

  //   Example Data
  Route.get('/example', 'Api/AttendanceController.exampleAttendance');

  Route.get('/:id', 'Api/AttendanceController.update');
}).prefix('/api/attendance');
