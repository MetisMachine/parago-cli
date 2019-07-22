"use strict";
//
//  update.ts
//  parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/18/19
//  Copyright 2019 Skafos, LLC.
//
Object.defineProperty(exports, "__esModule", { value: true });
const shell = require("shelljs");
const cli_ux_1 = require("cli-ux");
const base_1 = require("../base");
class Update extends base_1.default {
    async run() {
        cli_ux_1.default.action.start('Updating');
        shell.config.silent = true;
        let cmd = `cd ${this.paths.generators} && git pull origin master`;
        shell.exec(cmd);
        shell.config.silent = false;
        cli_ux_1.default.action.stop();
    }
}
Update.description = "Update parago";
Update.examples = [
    `$ pgo update`
];
exports.default = Update;
