# webpack-hook-attacher-plugin Summary
With this plugin you can attach own or predefined file/directory (copy, create, rename, merge, replace in etc...) or predefined system (sleep, run process, etc...) operations to any webpack hook. We created this plugin because it is difficult to find file operation webpack plugins that runs in the proper phase of our buid process: delete build folder, copy files BEFORE the build process, copy files, replace in files, merge JSON files, zip build folder AFTER build process.

## I know I can do better :)
If you have found bug or need an additional operation don't hesitate to contact me.

## Install
`npm install webpack-hook-attacher-plugin --save-dev `

## Use Opertaions 
You can attach predefined operations to any webpack hook during the webpack or webpack-dev-server build 
[file operations](https://www.npmjs.com/package/webpack-file-operations) or
[system operations](https://www.npmjs.com/package/webpack-system-operations)

such as 
- create file/directory
- delete files/directories
- move files/directories
- modify file content (delete/add rows, replace in files)
- merge json files
- zip directories
- run process
- sleep
- wait until conditions is met 

#### Usage

Webpack.config.js:


#### Version numbers

The version number keeps up with the webpack versioning: the first number is the concatenated current webpack version number, then MINOR then PATCH version of the module :)

[CURRENT_WEBPACK_VERSION].MAJOR.PATCH

5740.0.0 means it belongs to the 5.74.0 webpack
6010.0.0 means it belongs to the 6.1.0 webpack

## Write your own operation
You can write your own operation if you like. Create your Operation file (derive from Operation class) and override the abtract run method


#### Example

```ts
import * as fsExtra from 'fs-extra';

import { SingleSourceOperationParameter, SingleSourceOperation, ISingleSourceOperationParameter } from './single-source-operation';
import { Utils } from 'webpack-hook-attacher-plugin';

export interface IMoveSingleFileParameter extends ISingleSourceOperationParameter {
    sourceFilePath: string;
    destinationFilePath: string;
    overwrite?: boolean;
}

export class MoveSingleFileParameter extends SingleSourceOperationParameter implements IMoveSingleFileParameter {
    //IMoveSingleFileParameter
    public sourceFilePath: string = null;
    public destinationFilePath: string = null;
    public overwrite?: boolean = true;
    //SingleSourceOperationParameter
    public getSingleSource(): string {
        return this.sourceFilePath;
    }
}

export class MoveSingleFile extends SingleSourceOperation {

    constructor(userParams: IMoveSingleFileParameter) {
        super();
        this.params = Utils.mergeUserSettingsToDeafultSetting(userParams, new MoveSingleFileParameter());
        super.setParams(this.params);
        this.moveOptions = { overwrite: this.params.overwrite };
    }

    public name: string = 'MoveSingleFile';

    public params: MoveSingleFileParameter;

    private moveOptions: fsExtra.MoveOptions;

    public run(): void {
        super.runSingleFileOperationIfExists(this.funcionToRun.bind(this));
    }

    private funcionToRun(sourceFilePath: string): void {
        this.ensureDestinationFileDirectoryExists(this.params.destinationFilePath);
        fsExtra.moveSync(sourceFilePath, this.params.destinationFilePath, this.moveOptions);
    }
}


```




