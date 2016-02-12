// Compiled using typings@0.6.6
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/ffceea9dd124d277c4597c7bd12930666ec074c5/vinyl-source-stream/vinyl-source-stream.d.ts
// Type definitions for vinyl-source-stream
// Project: https://github.com/hughsk/vinyl-source-stream
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module "vinyl-source-stream" {
    function vinylSourceStream(filename: string): NodeJS.ReadWriteStream;
    export = vinylSourceStream;
}