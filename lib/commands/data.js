"use strict";
//
//  data.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/17/19
//  Copyright 2019 Skafos, LLC.
//
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const shell = require("shelljs");
class Data extends base_1.default {
    runLoad() {
        let _parago = this.parago;
        if (!_parago.commands.data.load || _parago.commands.data.load.length < 1) {
            console.log("Invalid data load command provided in config");
            this.exit(-1);
        }
        return _parago.commands.data.load;
    }
    runClean() {
        let _parago = this.parago;
        if (!_parago.commands.data.clean || _parago.commands.data.clean.length < 1) {
            console.log("Invalid data clean command provided in config");
            this.exit(-1);
        }
        return _parago.commands.data.clean;
    }
    async run() {
        const { argv } = this.parse(Data);
        argv.map((arg) => {
            switch (arg.toLowerCase()) {
                case 'load': {
                    return this.runLoad();
                }
                case 'clean': {
                    return this.runClean();
                }
                default: {
                    console.error("Invalid data command");
                    this.exit(-1);
                }
            }
        })
            .forEach((current) => {
            var cmd = current;
            shell.config.silent = false;
            if (cmd.startsWith('$')) {
                shell.config.silent = true;
                cmd = cmd.replace('$', '');
            }
            shell.exec(cmd);
        });
    }
}
Data.description = "Data management using provided commands in config file";
Data.examples = [
    `$ pgo data clean`,
    `$ pgo data load`,
];
Data.args = [
    {
        name: 'action',
        description: 'Cleans data using command in config file',
    },
    {
        name: 'load',
        description: 'Loads data using command in config file'
    }
];
exports.default = Data;
