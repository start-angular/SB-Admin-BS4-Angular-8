// Compiled using typings@0.6.6
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/052725d74978d6b8d7c4ff537b5a3b21ee755a49/run-sequence/run-sequence.d.ts
// Type definitions for run-sequence
// Project: https://github.com/OverZealous/run-sequence
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module "run-sequence" {
    import gulp = require('gulp');

    interface IRunSequence {
        (...streams: (string | string[] | gulp.TaskCallback)[]): NodeJS.ReadWriteStream;

        use(gulp: gulp.Gulp): IRunSequence;
    }

    var _tmp: IRunSequence;
    export = _tmp;
}