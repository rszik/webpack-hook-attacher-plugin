# webpack-hook-attacher-plugin Summary
This Webpack plugin allows you to attach (file, system or own written) operations to any webpack hooks such as sleep, wait, delete/create/modify files or directories, merge json files and many more before, after and in the middle of the builds

## I know I can do better :)
If you have found bug or need an additional operation don't hesitate to contact me.

## Install
`npm install webpack-hook-attacher-plugin --save-dev `

## Use Opertaions 
You can attach pre written opertaions to any webpack hook during the webpack or webpack-dev-server build from 
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

```ts
import {
    WebpackHookAttacherPlugin,
    Options    
} from 'webpack-hook-attacher-plugin';

public static getAppModuleWebpackHookAttacherPlugin(): WebpackHookAttacherPlugin {

  let options: Options = new Options();
  options.silent = false;
  
  //attach to afterPlugins hooks
  options.afterPlugins.addOperations(
   new DeleteMultipeFiles({
        additionalName: 'AngularDeploymentRoot',
        sourceRoots: ['./AngularDeploymentRoot']
    }),
    new MkDir({
        additionalName: 'AngularDeploymentRoot',
        dirPathToMake: ['./AngularDeploymentRoot']
    }),
    new RunProcess({
      additionalName: `start-webpack-devserver-create-background-script`,
      commands: [
        {
          processCreationType: ProcessCreationType.spawn,
          execute: 'npm.cmd',
          args: ['run', 'start-webpack-devserver-create-background-script'],
          options: {
            detached: true
          }
        }                       
      ]
    })
  )
  
  //attach to afterEmit hook
  options.afterEmit.addOperations(
      new CopySingleFile({
          additionalName: 'index.html',
          sourceFilePath: './AngularSourceRoot/index.html',
          destinationFilePath: './AngularDeploymentRoot/index.html',
      }),
      new ReplaceInSingleFile({
          additionalName: 'Version',
          sourceFilePath: './AngularDeploymentRoot/app.js',
          replaceRules: [
              { search: /@version/g, replace: '1.2.3' }
          ]
      })
  );
  
  options.done.addOperations(...this.getMergeJSONFilesOperations());
  
  if (!isDevelopmentMode) {
     options.afterEmit.addOperations(
        new Zip({
            additionalName: 'To ../published_versions',
            destinationFile: `../published_versions/1.2.3/app.zip`,
            sourceFolderToZip: './AngularDeploymentRoot',
        })
    );
  }
}

private static getMergeJSONFilesOperations(): MergeJSONFiles[] {
    let res: MergeJSONFiles[] = [];

    ['en', 'fr', 'it'].forEach((language: string) => {
        let destinationFile: string = './AngularDeploymentRoot/_locales/' + language + '.json';
        res.push(new MergeJSONFiles({
            sourceRoots: ['./AngularSourceRoot'],
            globPattern: '**/' + language + '.json',
            destinationFile: destinationFile
        }));
    });

    return res;
}
```

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




