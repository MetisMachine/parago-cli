"use strict";
//
//  create.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/01/19
//  Copyright 2019 Skafos, LLC.
//
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const path = require("path");
const command_1 = require("@oclif/command");
const base_1 = require("../base");
const create_1 = require("../config/create");
const reader_1 = require("../config/reader");
const cli_ux_1 = require("cli-ux");
class Create extends base_1.default {
    async run() {
        const { flags, args } = this.parse(Create);
        let generators = fs.readdirSync(this.paths.generators, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory() && dirent.name != '.git')
            .map(dirent => dirent.name);
        if (generators.includes(flags.generator) == false) {
            this.error(`Unknown generator: ${flags.generator}.`);
            this.exit(-1);
        }
        cli_ux_1.cli.action.start(`Creating project using generator: ${flags.generator}`);
        let cwd = process.cwd();
        let curDir = path.basename(cwd);
        let genPath = path.join(this.paths.generators, flags.generator);
        if (args.project) {
            let projectPath = path.join(cwd, args.project);
            fs.ensureDirSync(projectPath);
            fs.copySync(genPath, projectPath);
            cli_ux_1.cli.action.stop();
            let yaml = reader_1.default(path.join(projectPath, 'parago.yml'));
            try {
                await create_1.default(yaml, projectPath, !flags.yes);
            }
            catch (e) {
                console.error(e.message);
                this.exit(-1);
            }
        }
        else {
            let name = curDir;
            fs.copySync(genPath, cwd);
            cli_ux_1.cli.action.stop();
            try {
                await create_1.default(reader_1.default(path.join(cwd, 'parago.yml')), cwd, !flags.yes);
            }
            catch (e) {
                console.error(e.message);
                this.exit(-1);
            }
        }
    }
}
Create.description = "Create a new Parago project";
Create.examples = [
    `$ pgo create myproject`
];
Create.flags = Object.assign({}, base_1.default.flags, { yes: command_1.flags.boolean({
        char: 'y',
        description: 'Answers all prompts with defaults.',
        default: false
    }), generator: command_1.flags.string({
        char: 'g',
        description: 'Generator to use to create project.',
        required: true
    }) });
Create.args = [Object.assign({}, base_1.default.args, { name: 'project' })];
exports.default = Create;
