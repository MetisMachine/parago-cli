"use strict";
//
//  run.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/17/19
//  Copyright 2019 Skafos, LLC.
//
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const shell = require("shelljs");
class Run extends base_1.default {
    async run() {
        let _parago = this.parago;
        let { argv } = this.parse(Run);
        if (argv.length < 1) {
            return;
        }
        let tasks = argv
            .filter((arg) => { return Object.keys(_parago.tasks).includes(arg); })
            .map((task) => {
            return _parago.tasks[task];
        });
        if (tasks.length < 1) {
            console.log("Undefined task(s): ", argv.join(" "));
            return;
        }
        tasks.forEach((task) => {
            var cmd = task;
            shell.config.silent = false;
            if (cmd.startsWith('$')) {
                shell.config.silent = true;
                cmd = cmd.replace('$', '');
            }
            shell.exec(cmd);
        });
    }
}
Run.description = "Run user defined tasks in the config file";
Run.strict = false;
Run.examples = [
    `$ pgo run <task>`
];
exports.default = Run;
