# SB Admin rewritten in Angular2 and Bootstrap 4

Simple Dashboard Admin App built using Angular 2 and Bootstrap 4

This project is a port of the famous Free Admin Bootstrap Theme [SB Admin v2.0](http://startbootstrap.com/template-overviews/sb-admin-2/) to Angular2 Theme.

Powered by [StartAngular](http://startangular.com/) & [StrapUI](http://strapui.com/)

<!--##[Demo](http://rawgit.com/start-angular/SB-Admin-BS4-Angular-2/master/dist/prod/index.html)-->

`SB Admin BS 4 Angular2` provides the following features:

- Ready to go, statically typed build system using gulp for working with TypeScript.
- Production and development builds.
- Development server with Livereload.
- Following the best practices for your application’s structure.
- Manager of your type definitions using [typings](https://github.com/typings/typings).
- Basic Service Worker, which implements "Cache then network strategy".

## How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.


In order to start the seed use:
### Installation
####1. Clone this project or Download that ZIP file

```sh
$ git clone https://github.com/start-angular/SB-Admin-BS4-Angular-2.git
```

####2.  Make sure you have [npm](https://www.npmjs.org/) installed globally

You must have `ts-node` installed as global. If you don't, use:

```bash
npm install -g ts-node
```

####3. On the command prompt run the following commands

```sh
$ cd `project-directory`
```

```sh
$ npm install 
```

```sh
$ npm start
```

####4. In your browser go to:   http://localhost:8080/dist/dev/

### Configuration

Default application server configuration

```javascript
var PORT             = 8080;
var LIVE_RELOAD_PORT = 4002;
var APP_BASE         = '/';
```

### Directory Structure

```
.
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── app
│   ├── layouts
│   │   └── base
│   │       ├── base.html
│   │       ├── base.ts
│   │       ├── hot_loader_main.ts
│   │       └── main.ts
│   │   └── dashboard
│   │   	└── components
│   │       	├── dashboard.html
│   │       	├── dashboard.ts
│   ├── assets
│   │   ├── img
│   │   │   └── SB-admin.png
│   │   ├── bootstarp
│   │   ├── scss
│   │   	└── main.scss
│   ├── pages
│   │   └── components
│   │       ├── blank-page
│   │       ├── bootstrap-element
│   │       ├── charts
│   │       ├── components
│   │       └── form
│   │       └── grid
│   │       └── home
│   │       └── tables
│   ├── shared
│   │	├── sidebar
│   │   └── topnav
│   └── index.html
├── dist
├── test
├── tools
│   ├── manual_typings
│   ├── tasks
│   ├── utils
│   ├── config.ts
│   └── utils.ts
├── appveyor.yml
├── gulpfile.ts
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── test-main.js
├── tsconfig.json
├── tslint.json
└── typings.json
```
