"use strict";
//
//  python.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/16/19
//  Copyright 2019 Skafos, LLC.
//
Object.defineProperty(exports, "__esModule", { value: true });
const shell = require("shelljs");
const environment_1 = require("./environment");
class Python extends environment_1.default {
    check(expectedVersion = ">= 3") {
        shell.config.silent = true;
        const [name, sysVer] = shell.exec("python --version").toString().toLowerCase().split(' ');
        const [range, expectedVer] = expectedVersion.split(' ');
        const expected = parseInt(expectedVer);
        const sys = parseInt(sysVer);
        this.version = sys;
        switch (range) {
            case ">": {
                return (expected > sys);
            }
            case "<": {
                return (expected < sys);
            }
            case "<=": {
                return (expected <= sys);
            }
            case ">=": {
                return (expected >= sys);
            }
            case "==": {
                return (expected == sys);
            }
        }
    }
    async setup(directory = process.cwd()) {
        console.log("Your environment has been setup for Python.");
    }
}
exports.Python = Python;
