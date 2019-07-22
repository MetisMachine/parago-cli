"use strict";
//
//  base.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/10/19
//  Copyright 2019 Skafos, LLC.
//
Object.defineProperty(exports, "__esModule", { value: true });
const os = require("os");
const path = require("path");
const command_1 = require("@oclif/command");
const config_1 = require("./config");
const vars_1 = require("./env/vars");
class CommandBase extends command_1.default {
    constructor() {
        super(...arguments);
        this.paths = {
            root: path.join(os.homedir(), '.parago'),
            generators: path.join(os.homedir(), '.parago', 'generators')
        };
        this.parago = config_1.default.read() || config_1.default.configTemplate;
        this.envVars = new vars_1.default();
        this.flags = {};
        this.args = [];
    }
    processAdhocEnv(args = "") {
        if (args.length < 1) {
            return;
        }
        let adhocVars = args.split(',').map((index) => {
            let [key, val] = index.split('=');
            return { key: key, val: val };
        })
            .reduce((accum, curr) => {
            accum[curr.key] = curr.val;
            return accum;
        });
        for (let key in adhocVars) {
            this.envVars.set(key, adhocVars[key]);
        }
    }
    processEnv() {
        this.parago = this.parago || config_1.default.read() || config_1.default.configTemplate;
        let paragoConfig = this.parago;
        if (!paragoConfig) {
            return;
        }
        const paragoVars = paragoConfig['env'] || {};
        if (Object.keys(paragoVars).length > 0) {
            console.log("Setting environment variables from config...");
            for (let key in paragoVars) {
                this.envVars.set(key, paragoVars[key]);
            }
        }
    }
    async init() {
        this.parago = this.parago || config_1.default.read() || config_1.default.configTemplate;
        const { args, flags } = this.parse(this.constructor);
        this.processEnv();
        if (flags.env && flags.env.length > 0) {
            this.processAdhocEnv(flags.env);
        }
        this.flags = flags;
        this.args = args;
    }
}
CommandBase.strict = false;
CommandBase.flags = Object.assign({}, command_1.default.flags, { help: command_1.flags.help({
        char: 'h',
        description: 'Shows this help message'
    }), env: command_1.flags.string({
        description: 'Sets environment variables, overriding project config file)',
        required: false
    }) });
CommandBase.args = [];
exports.default = CommandBase;
