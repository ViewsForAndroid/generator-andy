(function() {

  'use strict';

  var util = require('util'),
    path = require('path'),
    yeoman = require('yeoman-generator'),
    yosay = require('yosay'),
    chalk = require('chalk'),
    _ = require('lodash'),

    quotes = [
      'Yo! Android generator to the rescue! Take for some relax and enjoy life :D!',
      'OK Andy! Generate this app!',
      'Yo! Support this piece of art! http://bit.ly/1fLq5M2',
      'Andy… what are you doing? Please come back! http://bit.ly/1uZboLb',
      'Andy… why are you listening AC/DC? https://open.spotify.com/track/2hzg8fX8NGSK4loyJbNLr1'
    ],
    androidSdkPlatforms = [{
      name: 'Phone/Tablet',
      value: 'mobile',
      checked: true
    }, {
      name: 'Wear',
      value: 'wear'
    }, {
      name: 'Tv',
      value: 'tv'
    }, {
      name: 'Auto',
      value: 'auto'
    }],
    javaVersionLanguages = [{
      name: '6.0 – @Override in interfaces',
      value: 'VERSION_1_6'
    }, {
      name: '7.0 – Diamonds, ARM, multi-catch…',
      value: 'VERSION_1_7'
    }],
    prompts = [{
      name: 'buildWith',
      message: 'Create an Android application with:',
      type: 'checkbox',
      choices: androidSdkPlatforms,
      validate: function(input) {
        return _.isEmpty(input) ? "At least you must select 'Phone/Tablet' option!" : true;
      }
    }, {
      name: 'applicationName',
      message: 'Application name:',
      default: 'My Application'
    }, {
      name: 'packageName',
      message: 'Package name:',
      default: 'com.application.app'
    }, {
      name: 'javaLanguageLevel',
      message: 'Java language level:',
      type: 'list',
      choices: javaVersionLanguages,
      default: 1 // 7.0 – Let's use an advanced version of Java, plz!
    }];

  module.exports = yeoman.generators.Base.extend({

    constructor: function() {
      yeoman.generators.Base.apply(this, arguments);

      this.pkg = require('../../package.json');
    },

    prompting: function() {
      var done = this.async();

      this.log(yosay(this._randomQuote()));
      this.log('\n---- General Settings ----\n');

      this.prompt(prompts, function(answers) {
        this.answers = _.clone(answers);
        this.answers.packagePath = this.answers.packageName.replace(/\./g, '/');
        done();
      }.bind(this));

    },

    writing: {

      git: function() {
        this.copy('gitignore', '.gitignore');
      },

      gradle: function() {
        this.directory('gradle', 'gradle');
        this.copy('gradle.properties', 'gradle.properties');
        this.copy('gradlew', 'gradlew');
        this.copy('gradlew.bat', 'gradlew.bat');
        this.copy('version.properties', 'version.properties');
        //this.template('_settings.gradle', 'settings.gradle');
        this.template('_build.root.gradle', 'build.gradle');
      },

      subgenerators: function() {
        this.answers.buildWith.forEach(function(platform) {
          this.composeWith('andy:' + platform, {
            options: {
              arguments: this.answers
            }
          });
        }.bind(this));
      }

    },

    _randomQuote: function() {
      return quotes[Math.floor(Math.random() * quotes.length)];
    }

  });

}());
