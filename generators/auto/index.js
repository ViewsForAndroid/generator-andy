(function() {

  var yeoman = require('yeoman-generator');

  'use strict';

  var AndroidAutoGenerator = yeoman.generators.NamedBase.extend({

    constructor: function() {
      yeoman.generators.Base.apply(this, arguments);
    },

    prompting: function() {

    },

    writing: {}

  });

  module.exports = AndroidAutoGenerator;

}());
