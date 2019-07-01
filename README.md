skafos
======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/skafos.svg)](https://npmjs.org/package/skafos)
[![Downloads/week](https://img.shields.io/npm/dw/skafos.svg)](https://npmjs.org/package/skafos)
[![License](https://img.shields.io/npm/l/skafos.svg)](https://github.com/skafos/skafos/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g skafos
$ skafos COMMAND
running command...
$ skafos (-v|--version|version)
skafos/0.0.0 darwin-x64 node-v12.5.0
$ skafos --help [COMMAND]
USAGE
  $ skafos COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`skafos Gen [FILE]`](#skafos-gen-file)
* [`skafos compile [TARGET]`](#skafos-compile-target)
* [`skafos create [PROJECT]`](#skafos-create-project)
* [`skafos deploy [PLATFORM]`](#skafos-deploy-platform)
* [`skafos help [COMMAND]`](#skafos-help-command)
* [`skafos repl`](#skafos-repl)
* [`skafos train [DATA]`](#skafos-train-data)

## `skafos Gen [FILE]`

describe the command here

```
USAGE
  $ skafos Gen [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/Gen.ts](https://github.com/skafos/skafos/blob/v0.0.0/src/commands/Gen.ts)_

## `skafos compile [TARGET]`

Build current project for specific target

```
USAGE
  $ skafos compile [TARGET]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ skafos compile --target=ios
```

_See code: [src/commands/compile.ts](https://github.com/skafos/skafos/blob/v0.0.0/src/commands/compile.ts)_

## `skafos create [PROJECT]`

Create a new Skafos project

```
USAGE
  $ skafos create [PROJECT]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ skafos create myproject
```

_See code: [src/commands/create.ts](https://github.com/skafos/skafos/blob/v0.0.0/src/commands/create.ts)_

## `skafos deploy [PLATFORM]`

Deploy project models to provider

```
USAGE
  $ skafos deploy [PLATFORM]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ skafos deploy --platform=azure
```

_See code: [src/commands/deploy.ts](https://github.com/skafos/skafos/blob/v0.0.0/src/commands/deploy.ts)_

## `skafos help [COMMAND]`

display help for skafos

```
USAGE
  $ skafos help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_

## `skafos repl`

Interactive shell for current project

```
USAGE
  $ skafos repl

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ skafos repl
```

_See code: [src/commands/repl.ts](https://github.com/skafos/skafos/blob/v0.0.0/src/commands/repl.ts)_

## `skafos train [DATA]`

Run model and train it with provided data source

```
USAGE
  $ skafos train [DATA]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ skafos train --data=/path/to/example
```

_See code: [src/commands/train.ts](https://github.com/skafos/skafos/blob/v0.0.0/src/commands/train.ts)_
<!-- commandsstop -->
