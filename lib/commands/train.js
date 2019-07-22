"use strict";
//
//  train.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/01/19
//  Copyright 2019 Skafos, LLC.
//
Object.defineProperty(exports, "__esModule", { value: true });
const shell = require("shelljs");
const base_1 = require("../base");
class Train extends base_1.default {
    async run() {
        let _parago = this.parago;
        if (!_parago) {
            console.error(`No parago.yml file present in ${process.cwd()}`);
            this.exit(-1);
        }
        let cmd = _parago.commands.train;
        if (cmd.length > 0) {
            if (cmd.startsWith('$')) {
                shell.config.silent = true;
                cmd = cmd.replace('$', '');
            }
            shell.exec(cmd);
            shell.config.silent = false;
        }
        else {
            console.error("No config file or no train command defined");
            this.exit(-1);
        }
    }
}
Train.description = "Train model using defined command in config";
Train.examples = [
    `$ pgo train`
];
exports.default = Train;
