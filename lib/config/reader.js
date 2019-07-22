"use strict";
/*
 *  parser.ts
 *  skafos
 *
 *  Created by Wess Cope (wess@skafos.ai) on 07/10/19
 *  Copyright 2019 Skafos, LLC.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const js_yaml_1 = require("js-yaml");
class ParserError extends Error {
    /**
     * Create an ParserError
     * @param {string} message The message the error should show
     * @private
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'ParserError';
    }
}
exports.ReadYaml = (filename, options) => {
    let str;
    const opts = Object.assign({}, options, { filename: filename });
    try {
        str = fs_1.readFileSync(filename, options);
    }
    catch (err) {
        throw new ParserError(err.toString());
    }
    try {
        const data = js_yaml_1.safeLoad(str.toString('utf8'), opts);
        if (typeof data !== 'object')
            throw new ParserError('Invalid yaml file');
        return data;
    }
    catch (err) {
        if (/(?:not_valid_yaml)/i.test(err.toString())) {
            throw new ParserError('Invalid YAML format in yaml file: ' + err.toString());
        }
        throw new ParserError(err.toString());
    }
};
exports.default = exports.ReadYaml;
