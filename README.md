# Andy

**NOTE:** This is a work in progress! It's not finished and may be there bugs here and there! You've been warned, pal!

* [![Build Status](https://travis-ci.org/ViewsForAndroid/generator-andy.svg?branch=develop)](https://travis-ci.org/viewsforandroid/generator-andy)
* [![Dependency Status](https://david-dm.org/viewsforandroid/generator-andy.png)](https://david-dm.org/viewsforandroid/generator-andy)
* [![devDependency Status](https://david-dm.org/viewsforandroid/generator-andy/dev-status.png)](https://david-dm.org/viewsforandroid/generator-andy#info=devDependencies)

## Introduction

Let's think about how we start a new Android project:

1. Open Android Studio.
2. Fill the fields (application name, package name…)
3. Select what support libraries do you want.
4. Wait 'till Android Studio indexes everything.
5. Start editing `build.gradle` to add dependencies, our custom deploy code and configurations…
6. Start coding!

**Introducing… ANDY!**

Andy helps you to quickly create a **well configured, well behaved** Android application (and project libraries too!). It's the spiritual successor to `Android KickstartR` project but updated to the modern times!

With Andy you have *de facto* the following features:

* It will download automatically all required `SDKs` and `Support Libraries` as necessary because it's configured to use the great `SDK Manager Plugin` written by the brave and the bold *Jake Warthon*!
* It will create automatically all `androidTest`, `debug` and `release` directories! And… as it creates an `androidTest` directory, it includes `Expresso` by default!
* It creates a `version.properties` file to update your app version easily!
* It configures `gradle` to display a dialog (or password prompt) when signing your application (as Tim Rodes has described in his great blog post!).
* It enables by default the `gradle daemon` to speed things up when compiling from terminal (Android Studio enables this by default).
* It generates a properly `.gitignore` and `.travis.yml` (the last one if your project is a library) files.
* More to come!

Andy is built using Yeoman, a fantastic tool for creating scaffolds for Web (and whatever) application you need!

## Getting Started

### Installation

As Andy is a Yeoman plugin, it's mandatory to install first Yeoman if you didn't do it before:

```
$ npm install -g yo
```

Once the step before is finished, you can install Andy properly:

```
npm install -g generator-andy
```

## Usage

To be written!

## Generators

By default Andy includes two generators:

### App

To be written!

### Library

Not yet developed! :P

## ToDo

There are a lot of things to do, but for now the most important ones are:

* Write properly tests!

Finish section!

## Contributions

Feel free to fork the project and develop/fix whatever you think is correct! All you have to keep in mind is that development is done in the `develop` branch!

## Acknowledgements

This project is partially inspired by the work done by *Groupsky* whom started his own `generator-android` project.

## Originally developed by

Aldo Borrero González – aldo@aldoborrero.com

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
