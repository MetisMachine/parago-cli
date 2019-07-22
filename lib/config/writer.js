"use strict";
//
//  writer.ts
//  Parago
// 
//  Created by Wess Cope (wess@skafos.ai) on 07/10/19
//  Copyright 2019 Skafos, LLC.
//
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const js_yaml_1 = require("js-yaml");
const WriteYaml = (obj, to) => {
    let data = js_yaml_1.safeDump(obj);
    fs.writeFile(to, data, (err) => {
        if (err) {
            console.error("Write File Error: ", err);
        }
    });
};
exports.default = WriteYaml;
