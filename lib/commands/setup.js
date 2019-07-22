"use strict";
//
//  setup.ts
//  parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/18/19
//  Copyright 2019 Skafos, LLC.
//
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const path = require("path");
const os = require("os");
const shell = require("shelljs");
const cli_ux_1 = require("cli-ux");
const base_1 = require("../base");
const command_1 = require("@oclif/command");
const generatorListRepo = "https://github.com/skafos/generators.git";
class Setup extends base_1.default {
    async run() {
        const { flags } = this.parse(Setup);
        let home = os.homedir();
        let root = path.join(home, '.parago');
        let repo = path.join(root, 'generators');
        if (fs.pathExistsSync(root)) {
            if (flags.force == true) {
                fs.removeSync(root);
            }
            else {
                console.log("Parago has already been setup, use -f/--force to overwrite current");
                this.exit(0);
            }
        }
        cli_ux_1.default.action.start("Setting up parago");
        fs.ensureDirSync(root);
        shell.config.silent = true;
        shell.exec(`git clone ${generatorListRepo} ${repo}`);
        shell.config.silent = false;
        cli_ux_1.default.action.stop();
    }
}
Setup.description = "Sets up Parago.";
Setup.examples = [
    `$ pgo setup`
];
Setup.flags = Object.assign({}, base_1.default.flags, { force: command_1.flags.boolean({
        char: 'f',
        description: 'If already setup, remove previous and setup as new'
    }) });
exports.default = Setup;
