"use strict";
//
//  deploy.ts
//  parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/19/19
//  Copyright 2019 Skafos, LLC.
//
Object.defineProperty(exports, "__esModule", { value: true });
const shell = require("shelljs");
const ChildProcess = require("child_process");
const base_1 = require("../base");
class Deploy extends base_1.default {
    async run() {
        let _parago = this.parago;
        if (!_parago) {
            console.error(`No parago.yml file present in ${process.cwd()}`);
            this.exit(-1);
        }
        let cmd = _parago.commands.deploy;
        if (cmd.length > 0) {
            if (cmd.startsWith('$')) {
                shell.config.silent = true;
                cmd = cmd.replace('$', '');
            }
            let res = cmd.split(" ");
            let commandName = res[0];
            let cmdArgs = res.slice(1);
            // shelljs can't be used to run interactive commands 
            // https://github.com/shelljs/shelljs/wiki/FAQ#running-interactive-programs-with-exec
            ChildProcess.execFileSync(commandName, cmdArgs, { stdio: 'inherit' });
            shell.config.silent = false;
        }
        else {
            console.error("No config file or no deploy command defined");
            this.exit(-1);
        }
    }
}
Deploy.description = "Deploy model using defined command in config.";
Deploy.examples = [
    `$ pgo deploy`
];
exports.default = Deploy;
