"use strict";
//
//  list.ts
//  parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/18/19
//  Copyright 2019 Skafos, LLC.
//
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const js_yaml_1 = require("js-yaml");
const cli_ux_1 = require("cli-ux");
const base_1 = require("../base");
const readmeUrl = "https://raw.githubusercontent.com/skafos/generators/master/README.md";
class List extends base_1.default {
    async run() {
        const { flags } = this.parse(List);
        cli_ux_1.default.action.start('Pulling generators list');
        await cli_ux_1.default.wait(1000);
        axios_1.default.get(readmeUrl)
            .then((res) => {
            cli_ux_1.default.action.stop();
            let { generators } = js_yaml_1.safeLoad(res.data.toString('utf8'));
            let list = generators.map((curr) => {
                let key = Object.keys(curr)[0];
                let val = Object.values(curr)[0];
                return { name: key, description: val };
            });
            const options = {
                printLine: this.log,
            };
            console.log("\n");
            cli_ux_1.default.table(list, {
                name: {
                    minWidth: 32
                },
                description: {
                    get: row => row['description']
                }
            });
            console.log("\n");
        });
    }
}
List.description = "Shows a list of available generators.";
List.examples = [
    `$ pgo train`
];
exports.default = List;
