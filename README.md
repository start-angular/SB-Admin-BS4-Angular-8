# SB Admin rewritten in Angular2 and Bootstrap 4

Simple Dashboard Admin App built using Angular 2 and Bootstrap 4

This project is a port of the famous Free Admin Bootstrap Theme [SB Admin v2.0](http://startbootstrap.com/template-overviews/sb-admin-2/) to Angular2 Theme.

Powered by [StartAngular](http://startangular.com/) & [StrapUI](http://strapui.com/)

##[Demo](http://rawgit.com/start-angular/SB-Admin-BS4-Angular-2/master/dist/prod/)

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

####4. In your browser go to:   http://localhost:5555

### Configuration

Default application server configuration

```javascript
var PORT             = 8080;
var LIVE_RELOAD_PORT = 4002;
var APP_BASE         = '/';
```

### Directory Structure

```
├── LICENSE
├── README.md
├── gulpfile.ts                <- configuration of the gulp tasks
├── karma.conf.js              <- configuration of the test runner
├── package.json               <- dependencies of the project
├── protractor.conf.js         <- e2e tests configuration
├── src                        <- source code of the application
│   └── client
│       ├── app
│       │   ├── login
│       │   │   ├── login.component.css
│       │   │   ├── login.component.e2e-spec.ts
│       │   │   ├── login.component.html
│       │   │   ├── login.component.spec.ts
│       │   │   ├── login.component.ts
│       │   │   ├── login.module.ts
│       │   │   ├── login.routes.ts
│       │   │   └── index.ts
│       │   ├── dashboard
│       │   │   ├── home
│       │   │   ├── bg-component
│       │   │   ├── blankpage
│       │   │   ├── dashboard.component.css
│       │   │   ├── dashboard.component.e2e-spec.ts
│       │   │   ├── dashboard.component.html
│       │   │   ├── dashboard.component.spec.ts
│       │   │   ├── dashboard.component.ts
│       │   │   ├── dashboard.module.ts
│       │   │   ├── dashboard.routes.ts
│       │   │   └── index.ts
│       │   ├── app.component.html
│       │   ├── app.component.ts
│       │   ├── app.module.ts
│       │   ├── app.routes.ts
│       │   ├── main.ts
│       │   └── shared
│       │       ├── config
│       │       │   └── env.config.ts
│       │       ├── index.ts
│       │       ├── shared.module.ts
│       │       ├── name-list
│       │       │   ├── index.ts
│       │       │   ├── name-list.service.spec.ts
│       │       │   └── name-list.service.ts
│       │       ├── sidebar
│       │       │   ├── index.ts
│       │       │   ├── sidebar.component.html
│       │       │   └── sidebar.component.ts
│       ├── assets
│       │   ├── bootstrao
│       │   └── images
│       │   └── sass
│       ├── testing
│       ├── index.html
│       ├── tsconfig.json
│       └── typings.d.ts
├── test-main.js               <- testing configuration
├── tools
│   ├── README.md              <- build documentation
│   ├── config
│   │   ├── project.config.ts  <- configuration of the specific project
│   │   ├── seed.config.interfaces.ts
│   │   └── seed.config.ts     <- generic configuration of the seed project
│   ├── config.ts              <- exported configuration (merge both seed.config and project.config, project.config overrides seed.config)
│   ├── debug.ts
│   ├── env                    <- environment configuration
│   │   ├── base.ts
│   │   ├── dev.ts
│   │   └── prod.ts
│   ├── manual_typings
│   │   ├── project            <- manual ambient typings for the project
│   │   │   └── sample.package.d.ts
│   │   └── seed               <- seed manual ambient typings
│   │       ├── angular2-hot-loader.d.ts
│   │       ├── autoprefixer.d.ts
│   │       ├── colorguard.d.ts
│   │       ├── connect-livereload.d.ts
│   │       ├── cssnano.d.ts
│   │       ├── doiuse.d.ts
│   │       ├── express-history-api-fallback.d.ts
│   │       ├── istream.d.ts
│   │       ├── karma.d.ts
│   │       ├── merge-stream.d.ts
│   │       ├── open.d.ts
│   │       ├── postcss-reporter.d.ts
│   │       ├── slash.d.ts
│   │       ├── stylelint.d.ts
│   │       ├── systemjs-builder.d.ts
│   │       ├── tildify.d.ts
│   │       ├── tiny-lr.d.ts
│   │       └── walk.d.ts
│   ├── tasks                  <- gulp tasks
│   │   ├── project            <- project specific gulp tasks
│   │   │   └── sample.task.ts
│   │   └── seed               <- seed generic gulp tasks. They can be overriden by the project specific gulp tasks
│   │       ├── build.assets.dev.ts
│   │       ├── build.assets.prod.ts
│   │       ├── build.bundles.app.ts
│   │       ├── build.bundles.ts
│   │       ├── build.docs.ts
│   │       ├── build.html_css.ts
│   │       ├── build.index.dev.ts
│   │       ├── build.index.prod.ts
│   │       ├── build.js.dev.ts
│   │       ├── build.js.e2e.ts
│   │       ├── build.js.prod.ts
│   │       ├── build.js.test.ts
│   │       ├── build.js.tools.ts
│   │       ├── check.versions.ts
│   │       ├── clean.all.ts
│   │       ├── clean.coverage.ts
│   │       ├── clean.dev.ts
│   │       ├── clean.prod.ts
│   │       ├── clean.tools.ts
│   │       ├── copy.js.prod.ts
│   │       ├── css-lint.ts
│   │       ├── e2e.ts
│   │       ├── generate.manifest.ts
│   │       ├── karma.start.ts
│   │       ├── serve.coverage.ts
│   │       ├── serve.docs.ts
│   │       ├── server.prod.ts
│   │       ├── server.start.ts
│   │       ├── tslint.ts
│   │       ├── watch.dev.ts
│   │       ├── watch.e2e.ts
│   │       ├── watch.test.ts
│   │       └── webdriver.ts
│   ├── utils                  <- build utils
│   │   ├── project            <- project specific gulp utils
│   │   │   └── sample_util.ts
│   │   ├── project.utils.ts
│   │   ├── seed               <- seed specific gulp utils
│   │   │   ├── clean.ts
│   │   │   ├── code_change_tools.ts
│   │   │   ├── server.ts
│   │   │   ├── tasks_tools.ts
│   │   │   ├── template_locals.ts
│   │   │   ├── tsproject.ts
│   │   │   └── watch.ts
│   │   └── seed.utils.ts
│   └── utils.ts
├── tsconfig.json              <- configuration of the typescript project (ts-node, which runs the tasks defined in gulpfile.ts)
├── tslint.json                <- tslint configuration
├── typings                    <- typings directory. Contains all the external typing definitions defined with typings
├── typings.json
└── appveyor.yml
```
