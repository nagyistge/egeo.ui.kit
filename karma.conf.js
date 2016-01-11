module.exports = function (config) {
  config.set({

    basePath: '',

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',

      'tests/app.js',
      'src/providers/*.js',
      'src/factories/*.js',
      'src/components/form/components.form.directive.js',
      'src/components/form/components.form.tpl.html',
      'src/components/formgroup/components.formgroup.directive.js',
      'src/components/formgroup/components.formgroup.tpl.html',
      'src/components/**/*.directive.js',
      'src/components/**/*controller.js',
      'src/objects/**/*.js',

      // fixtures
      //'tests/mock/*.json',
      'tests/**/**/tests.*.js'
    ],

    autoWatch: false,

    reporters: ['junit', 'coverage', 'progress'],

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],
    port: 8080,

    preprocessors: {
      'src/factories/**/*.js': ['coverage'],
      'src/providers/**/*.js': ['coverage'],
      'src/components/**/*.js': ['coverage']
    },

    junitReporter: {
      outputDir: 'dist/test-coverage/surefire-reports/',
      outputFile: undefined,
      suite: ''
    },

    coverageReporter: {
      type: "lcov",
      dir: 'dist/test-coverage',
      file: '../../lcovUT.info'
    },
    singleRun: true,
    logLevel: config.LOG_INFO
  });
};
