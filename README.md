skafos
======


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g parago
$ pgo COMMAND
running command...
$ pgo (-v|--version|version)
parago/0.0.4 darwin-x64 node-v12.6.0
$ pgo --help [COMMAND]
USAGE
  $ pgo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`pgo app`](#pgo-app)
* [`pgo create [PROJECT]`](#pgo-create-project)
* [`pgo data [CLEAN] [LOAD]`](#pgo-data-clean-load)
* [`pgo help [COMMAND]`](#pgo-help-command)
* [`pgo run`](#pgo-run)
* [`pgo train`](#pgo-train)

## `pgo app`

Starts up web frontend.

```
USAGE
  $ pgo app

OPTIONS
  -h, --help       Shows this help message
  -p, --port=port  [default: 7272] what port App server should run on
  --env=env        Sets environment variables, overriding project config file)

EXAMPLE
  $ pgo app start
```

_See code: [src/commands/app.ts](https://github.com/skafos/parago-cli/blob/v0.0.4/src/commands/app.ts)_

## `pgo create [PROJECT]`

Create a new Skafos project

```
USAGE
  $ pgo create [PROJECT]

OPTIONS
  -h, --help  Shows this help message
  -y, --yes   Answers all prompts with defaults.
  --env=env   Sets environment variables, overriding project config file)

EXAMPLE
  $ pgo create myproject
```

_See code: [src/commands/create.ts](https://github.com/skafos/parago-cli/blob/v0.0.4/src/commands/create.ts)_

## `pgo data [CLEAN] [LOAD]`

Data management using provided commands in config file

```
USAGE
  $ pgo data [CLEAN] [LOAD]

ARGUMENTS
  CLEAN  Cleans data using command in config file
  LOAD   Loads data using command in config file

OPTIONS
  -h, --help  Shows this help message
  --env=env   Sets environment variables, overriding project config file)

EXAMPLES
  $ pgo data clean
  $ pgo data load
```

_See code: [src/commands/data.ts](https://github.com/skafos/parago-cli/blob/v0.0.4/src/commands/data.ts)_

## `pgo help [COMMAND]`

display help for pgo

```
USAGE
  $ pgo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_

## `pgo run`

Run user defined tasks in the config file

```
USAGE
  $ pgo run

OPTIONS
  -h, --help  Shows this help message
  --env=env   Sets environment variables, overriding project config file)

EXAMPLE
  $ pgo run <task>
```

_See code: [src/commands/run.ts](https://github.com/skafos/parago-cli/blob/v0.0.4/src/commands/run.ts)_

## `pgo train`

Run model and train it with provided data source

```
USAGE
  $ pgo train

OPTIONS
  -h, --help  Shows this help message
  --env=env   Sets environment variables, overriding project config file)

EXAMPLE
  $ pgo train
```

_See code: [src/commands/train.ts](https://github.com/skafos/parago-cli/blob/v0.0.4/src/commands/train.ts)_
<!-- commandsstop -->
