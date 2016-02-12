// Compiled using typings@0.6.6
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/5c3e47967affa3c4128a3875d1664ba206ae1b0f/systemjs/systemjs.d.ts
// Type definitions for System.js 0.18.4
// Project: https://github.com/systemjs/systemjs
// Definitions by: Ludovic HENIN <https://github.com/ludohenin/>, Nathan Walker <https://github.com/NathanWalker/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface System {
  import(name: string): any;
  defined: any;
  amdDefine: () => void;
  amdRequire: () => void;
  baseURL: string;
  paths: { [key: string]: string };
  meta: { [key: string]: Object };
  config: any;
}

declare var System: System;

declare module "systemjs" {
  export = System;
}