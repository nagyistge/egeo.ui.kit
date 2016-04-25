# Egeo UI Kit

Hi! This is the repository of the documentation based website of the Egeo UI Kit, the Stratio UI platform based on AngularJS that includes libraries and components that help developers to build apps quickly and safest following the Stratio Design principles and UX best practices. This project works as a hub of other Git projects which are interconnected via npm git dependencies.

The Egeo UI Kit Documentation website is built using [KSS](http://warpspire.com/kss/). Take it a look first if you want to modify it.

## How to install

Download the project to any folder via `git clone` or using the ZIP button and launch `npm install` to install all dependencies needed to build the website ([NodeJS](https://nodejs.org) and [Git client](https://git-scm.com/download/) are required to be installed first to can use these commands on your console).

```
git clone https://github.com/Stratio/egeo.ui.kit.git

npm install
```

### With Npm

Include the Egeo Base Framework dependency in the *dependencies* section of your package.json file:
```
  "dependencies": {
    ...
    "egeo.ui.kit": "git://github.com/Stratio/egeo.ui.kit.git#v0.2-rc.0",
    ...
  }
```
And launch `npm install`. You can also update the library using `npm update egeo.ui.kit`.

### With Bower

Include the Egeo Base Framework dependency in the *dependencies* section of your bower.json file:
```
  "dependencies": {
    ...
    "egeo.ui.kit": "git://github.com/Stratio/egeo.ui.kit.git#v0.2-rc.0",
    ...
  }
```
And launch `bower install`. You can also update the library using `bower update egeo.ui.kit`.

## Launch the website

You can see the website locally using a local webserver included with the project. Only use the `npm run-script serve` command and a local webserver will be launched in [http://localhost:9001](http://localhost:9001).

```
npm run-script serve
```

## Compile and create the website

You can compile the website with the documentation to generate a distribution ready to be deployed in any webserver using the command below:

```
npm run-script doc
```

This command will generate a folder called **dist**. You only need to copy & paste the content of this folder to install the website in a webserver.

### Use a watcher to automatically generate doc

```
npm run-script sass-watch
```

This command creates a watcher that launches the doc task every time a Sass file changes. Launch the command in a command line and keep it as a background task.

## How to test

The Kit includes a command to test the Javascript and to generate a report about code coverage.

The command below will launch the Javascript suite of tests:
```
npm run-script test
```

You will check the results of code coverage in [egeo.ui.kit installation folder]/dist/test-coverage/PhantomJS 1.9.8 (Windows 8.0.0.0)/lcov-report/index.html

## Dependencies

This project is the documentation of the Egeo UI Kit so other projects are needed to obtain the complete website. You can see below all the dependencies that belongs to it.

* [egeo.ui.base](https://github.com/Stratio/egeo.ui.base)
* [egeo.website.template](https://github.com/Stratio/egeo.website.template)
