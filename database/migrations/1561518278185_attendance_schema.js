'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AttendanceSchema extends Schema {
  up() {
    this.create('attendances', table => {
      table.increments();
      table.string('name', 100).notNullable();
      table.string('class', 15).notNullable();
      table
        .number('nis', 5)
        .notNullable()
        .unique();
      table
        .string('username', 80)
        .notNullable()
        .unique();
      table.string('password', 255).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('attendances');
  }
}

module.exports = AttendanceSchema;
