"use strict";
//
//  app.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/17/19
//  Copyright 2019 Skafos, LLC.
//
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const Express = require("express");
const command_1 = require("@oclif/command");
const cli_ux_1 = require("cli-ux");
const base_1 = require("../base");
class App extends base_1.default {
    async run() {
        const { flags, argv } = this.parse(App);
        const { port } = flags;
        const portNumber = parseInt(port) || 7272;
        const staticPath = path.resolve(path.relative(process.cwd(), __dirname), '..', '../static');
        const app = Express();
        app.use(Express.static(staticPath));
        app.get('/', (req, res) => {
            res.send('Hello World!');
        });
        app.listen(portNumber, () => {
            console.log(`Parago app listening on ${portNumber}`);
        });
        cli_ux_1.default.open(`http://localhost:${portNumber}`);
    }
}
App.description = "Starts up web frontend.";
App.examples = [
    `$ pgo app start`
];
App.flags = Object.assign({}, base_1.default.flags, { port: command_1.flags.string({
        char: 'p',
        description: 'what port App server should run on',
        required: false,
        default: '7272'
    }) });
exports.default = App;
