"use strict";
//
//  vars.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/16/19
//  Copyright 2019 Skafos, LLC.
//
Object.defineProperty(exports, "__esModule", { value: true });
class EnvVars {
    constructor() {
        this._all = {};
    }
    get(name) {
        return process.env[name];
    }
    set(name, value) {
        this._all[name] = value;
        process.env[name] = value;
    }
}
exports.default = EnvVars;
