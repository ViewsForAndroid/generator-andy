(function() {

  'use strict';

  var yeoman = require('yeoman-generator'),
    _ = require('lodash'),
    mkdir = require('mkdirp').sync,
    androidSdkVersionsChoices = [{
      name: 'API 14: Android 4.0 (Ice Cream Sandwich)',
      value: 14
    }, {
      name: 'API 15: Android 4.0.3 (Ice Cream Sandwich)',
      value: 15
    }, {
      name: 'API 16: Android 4.1 (Jelly Bean)',
      value: 16
    }, {
      name: 'API 17: Android 4.2 (Jelly Bean)',
      value: 17
    }, {
      name: 'API 18: Android 4.3 (Jelly Bean)',
      value: 18
    }, {
      name: 'API 19: Android 4.4.2 (KitKat)',
      value: 19
    }, {
      name: 'API 20: Android L (Preview)',
      value: 20
    }, {
      name: 'API 21: Android 5.0.1 (Lollipop)',
      value: 21
    }, {
      name: 'API 22: Android 5.1.1 (Lollipop)',
      value: 22
    }, {
      name: 'API 23: Android M (Preview)',
      value: 23
    }],
    themesChoices = [{
      name: 'None',
      from: 0,
      value: 'none',
      default: true
    }, {
      name: 'Holo Dark',
      from: 14,
      value: 'holo-dark'
    }, {
      name: 'Holo Light',
      from: 14,
      value: 'holo-light'
    }, {
      name: 'Holo Light with Dark Action Bar',
      from: 14,
      value: 'holo-dark-actionbar-light'
    }, {
      name: 'Material Design Light',
      from: 20,
      value: 'material-light'
    }, {
      name: 'Material Design Dark',
      from: 20,
      value: 'material-dark'
    }, {
      name: 'Material Design Light with Dark Action Bar',
      from: 20,
      value: 'material-light-dark-actionbar'
    }],
    supportLibrariesChoices = [{
      name: 'Play Services',
      value: 'play-services',
      checked: true
    }, {
      name: 'App Compat',
      value: 'app-compat'
    }, {
      name: 'CardView',
      value: 'cardview'
    }, {
      name: 'GridLayout',
      value: 'gridlayout'
    }, {
      name: 'Leanback',
      value: 'leanback'
    }, {
      name: 'Palette',
      value: 'palette'
    }, {
      name: 'RecyclerView',
      value: 'recyclerview'
    }, {
      name: 'Support Annotations',
      value: 'support-annotations'
    }, {
      name: 'Support V13',
      value: 'support-v13'
    }, {
      name: 'Support V14',
      value: 'support-v4'
    }],
    communityLibraries = [{
      name: 'Picasso',
      value: 'picasso'
    }, {
      name: 'Gson',
      value: 'gson'
    }, {
      name: 'OkHttp',
      value: 'okhttp'
    }, {
      name: 'Butterknife',
      value: 'butterknife'
    }, {
      name: 'Dagger',
      value: 'dagger'
    }, {
      name: 'Guava',
      value: 'guava'
    }, {
      name: 'Retrofit',
      value: 'retrofit'
    }, {
      name: 'Otto',
      value: 'otto'
    }, {
      name: 'Crouton',
      value: 'crouton'
    }, {
      name: 'Facebook SDK',
      value: 'facebook'
    },],
    prompts = [{
      name: 'moduleName',
      message: 'Module name:',
      default: 'mobile'
    }, {
      name: 'minimumApiLevel',
      message: 'Minimum required SDK:',
      type: 'list',
      choices: androidSdkVersionsChoices,
      default: 15 // API 15: Android 4.0.3 (Ice Cream Sandwich)
    }, {
      name: 'targetSdk',
      message: 'Target SDK:',
      type: 'list',
      choices: androidSdkVersionsChoices,
      default: 22 // API 22: Android 5.1.1 (Lollipop)
    }, {
      name: 'compileSdkVersion',
      message: 'Compile with:',
      type: 'list',
      choices: androidSdkVersionsChoices,
      default: 22 // API 22: Android 5.1.1 (Lollipop)
    }, {
      name: 'theme',
      message: 'Theme:',
      type: 'list',
      choices: function(answers) {
        return _.filter(themesChoices, function(theme) {
          return theme.from === 0 || theme.from >= answers.minimumApiLevel;
        });
      }
    }, {
      name: 'supportLibraries',
      message: 'Support libraries:',
      type: 'checkbox',
      choices: supportLibrariesChoices
    }, {
      name: 'communityLibraries',
      message: 'Community supported libraries:',
      type: 'checkbox',
      choices: communityLibraries
    }];

  var AndroidMobileGenerator = yeoman.generators.Base.extend({

    constructor: function() {
      yeoman.generators.Base.apply(this, arguments);

      this.arguments = arguments[1].arguments || {};
    },

    prompting: function() {
      var done = this.async();
      this.log('\n---- Mobile/Tablet ----\n');
      this.prompt(prompts, function(answers) {
        this.arguments = _.extend(this.arguments, answers);
        done();
      }.bind(this));
    },

    writing: {
      dirs: function() {
        var dirs = _.map(['/libs', '/src', '/src/main', '/src/debug', '/src/release'], function(e) {
          return this.arguments.moduleName + e;
        }.bind(this));

        _.each(dirs, function(dir) {
          mkdir(dir);
        });

        // Start with main folder
        this.template('_AndroidManifest.xml', this.arguments.moduleName + '/src/main/AndroidManifest.xml', this.arguments);
        mkdir(this.arguments.moduleName + '/src/main/java/' + this.arguments.packagePath);
        this.template('_src/_MainActivity.java', this.arguments.moduleName + '/src/main/java/' + this.arguments.packagePath + '/MainActivity.java', this.arguments);
        this.directory('_res', this.arguments.moduleName + '/src/main/res');
        this.copy('proguard-rules.pro', this.arguments.moduleName + '/proguard-rules.pro');
      }
    }

  });

  module.exports = AndroidMobileGenerator;

}());
