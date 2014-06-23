# Andy

[![Build Status](https://travis-ci.org/ViewsForAndroid/generator-andy.svg?branch=develop)](https://travis-ci.org/viewsforandroid/generator-andy)
[![Dependency Status](https://david-dm.org/viewsforandroid/generator-andy.png)](https://david-dm.org/viewsforandroid/generator-andy)
[![devDependency Status](https://david-dm.org/viewsforandroid/generator-andy/dev-status.png)](https://david-dm.org/viewsforandroid/generator-andy#info=devDependencies)

## Introduction

**NOTE: Currently Andy is in heavy development! It's not finished and stable by any means, so expect a lot of bugs and nasty things! You've been warned, pal!**

Let's think about how we start a new Android project:

1. Open Android Studio.
2. Fill the fields (application name, package name…)
3. Select what support libraries do you want.
4. Wait 'till Android Studio indexes everything.
5. Start editing `build.gradle` to add dependencies, then your custom deploy code and configurations (and scratch your head thinking why some things don't work as expected!)…
6. Start coding!

**Introducing… ANDY!**

Andy helps you to quickly create a **well configured, well behaved** Android application (and project libraries too!). It's the spiritual successor to [Android KickstartR](http://androidkickstartr.com/) project but updated to the modern times!

With Andy you have *de facto* the following features:

* It will download automatically all required `SDKs` and `Support Libraries` as necessary because it's configured to use the great [`SDK Manager Plugin`](https://github.com/JakeWharton/sdk-manager-plugin) written by the brave and the bold [Jake Warthon](https://github.com/JakeWharton)!
* It will create automatically all `androidTest`, `debug` and `release` directories! And… as it creates an `androidTest` directory, it includes `Expresso` by default!
* It creates a `version.properties` file to update your app version easily!
* It configures `gradle` to display a dialog (or password prompt) when signing your application (as [Tim Rodes has described in this great post](https://www.timroes.de/2014/01/19/using-password-prompts-with-gradle-build-files/)!).
* It enables by default the `gradle daemon` to speed things up when compiling from terminal (Android Studio enables this by default).
* It generates a properly `.gitignore` file.
* More to come!

Andy is built using [Yeoman](http://yeoman.io/), a fantastic tool for creating scaffolds for Web and whatever application you could imagine of!

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

Create a new directory where you want to put your application code and `cd` into it, then call Andy:

```
$ yo andy
```

## Generators

By default Andy includes two generators:

* [android:app](#app)
* [android:library](#library)

### App

Finish this section!

### Library

Not developed yet!

## ToDo

There are a lot of things to do, but for now the most important ones are:

* Finish current iteration for generating a complete application project.
* Write the library generator and make it composable with the app generator.
* Write properly tests!
* …

## Contributions

Pull requests and issues are very welcome! Keep in mind that main development is done in the `develop` branch!

## Acknowledgements

This project is partially inspired by the work done by [Groupsky](https://github.com/groupsky) who started his own [`generator-android`](https://github.com/groupsky/generator-android/) project.

## Creator

Aldo Borrero González – aldo@aldoborrero.com

* [@aldoborrero](https://twitter.com/aldoborrero)
* [+AldoBorrero](https://plus.google.com/+AldoBorrero)

## License

Andy source code is released under the [MIT License](http://en.wikipedia.org/wiki/MIT_License)!
