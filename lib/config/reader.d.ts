import { DumpOptions } from 'js-yaml';
/**
 * FS Options
 * @typedef {fsOptions} fsOptions Options for the file reader
 * @property
 */
declare type FileOptions = {
    encoding?: 'utf8' | 'ascii' | 'utf16le' | 'ucs2' | 'base64' | 'latin1' | 'binary' | 'hex';
    flag?: string;
};
/**
 * ParserOptions for configuring both `fs` and `js-yaml`
 * See [js-yaml configuration](https://github.com/nodeca/js-yaml#safeload-string---options-) for more details
 * Also see {@link fsOptions}
 * @typedef {ParserOptions} ParserOptions Options for the YAML parser
 *
 * @property {number}           [indent=2] indentation width to use (in spaces).
 * @property {boolean}          [noArrayIndent=false] when true, will not add an indentation level to array elements
 * @property {boolean}          [skipInvalid=false] do not throw on invalid types (like function in the safe schema) and skip pairs and single values with such types
 * @property {number}           [flowLevel=-1] specifies level of nesting, when to switch from block to flow style for collections. -1 means block style everwhere
 * @property {string}           [styles] Each tag may have own set of styles.  - "tag" => "style" map.
 * @property {SchemaDefinition} [schema=YAML.DEFAULT_SAFE_SCHEMA] specifies a schema to use
 * @property {boolean}          [sortKeys=false] if `true`, sort keys when dumping YAML. If a function, use the function to sort the keys
 * @property {number}           [lineWidth=80] set max line width
 * @property {boolean}          [noRefs=false] if `true`, don't convert duplicate objects into references
 * @property {boolean}          [noCompatMode=false] if `true` don't try to be compatible with older yaml versions. Currently: don't quote "yes", "no" and so on, as required for YAML 1.1
 * @property {boolean}          [condenseFlow=false] if `true` flow sequences will be condensed, omitting the space between `a, b`. Eg. `'[a,b]'`
 */
export declare type ParserOptions = DumpOptions & FileOptions;
export declare const ReadYaml: (filename: string, options?: ParserOptions) => object;
export default ReadYaml;
