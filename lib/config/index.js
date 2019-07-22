"use strict";
/*
 *  config.ts
 *  skafos
 *
 *  Created by Wess Cope (wess@skafos.ai) on 07/10/19
 *  Copyright 2019 Skafos, LLC.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const path = require("path");
const reader_1 = require("./reader");
const writer_1 = require("./writer");
const template = {
    name: '',
    description: '',
    version: '',
    author: '',
    license: '',
    system: {
        language: 'python >= 3.3'
    },
    env: {
        example: 'value'
    },
    commands: {
        data: {
            load: '',
            clean: ''
        },
        train: '',
        export: ''
    },
    tasks: {
        example: 'echo "your script command here"'
    }
};
class Config {
    static write(config, to = process.cwd()) {
        let dir = path.join(to, Config.configFile);
        writer_1.default(config, dir);
    }
    static read() {
        let dir = path.join(process.cwd(), Config.configFile);
        if (!fs.existsSync(dir)) {
            return;
        }
        return reader_1.default(path.join(process.cwd(), Config.configFile));
    }
}
Config.configFile = 'parago.yml';
Config.configTemplate = template;
exports.default = Config;
