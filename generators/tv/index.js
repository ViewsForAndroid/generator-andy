(function() {

  var yeoman = require('yeoman-generator');

  'use strict';

  var AndroidTvGenerator = yeoman.generators.NamedBase.extend({

    constructor: function() {
      yeoman.generators.Base.apply(this, arguments);
    },

    prompting: function() {

    },

    writing: {}

  });

  module.exports = AndroidTvGenerator;

}());
