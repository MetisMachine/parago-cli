"use strict";
//
//  export.ts
//  parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/18/19
//  Copyright 2019 Skafos, LLC.
//
Object.defineProperty(exports, "__esModule", { value: true });
const shell = require("shelljs");
const base_1 = require("../base");
class Train extends base_1.default {
    async run() {
        let _parago = this.parago;
        var cmd = _parago.commands.export || '';
        if (cmd.length > 0) {
            if (cmd.startsWith('$')) {
                shell.config.silent = true;
                cmd = cmd.replace('$', '');
            }
            shell.exec(cmd);
            shell.config.silent = false;
        }
    }
}
Train.description = "Export model using defined command in config";
Train.examples = [
    `$ pgo export`
];
exports.default = Train;
