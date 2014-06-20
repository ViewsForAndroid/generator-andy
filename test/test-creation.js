/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var fs = require('fs-extra');

describe('Andy Generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('andy:app', [
        '../../generators/app'
      ]);
      done();
    }.bind(this));
  });

  it('should create expected files', function (done) {
    var expected = [
      'test/build.gradle',
      'test/libs',
      'test/src',
      'test/proguard-rules.pro',
      'config/sign.gradle',
      'config/version.gradle',
      'art/',
      '.gitignore',
      'gradle.properties',
      'gradlew',
      'gradlew.bat',
      'settings.gradle',
      'build.gradle'
    ];

    helpers.mockPrompt(this.app, {
      'applicationName': 'Test',
      'moduleName': 'test',
      'packageName': 'com.test'

    });
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });

  afterEach(function(done) {
    fs.remove(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        console.error(err);
      }
      done();
    });
  });
});
