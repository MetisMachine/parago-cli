Parago
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
parago/0.0.1 darwin-x64 node-v12.6.0
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
* [`pgo data [ACTION] [LOAD]`](#pgo-data-action-load)
* [`pgo deploy`](#pgo-deploy)
* [`pgo export`](#pgo-export)
* [`pgo help [COMMAND]`](#pgo-help-command)
* [`pgo list`](#pgo-list)
* [`pgo run`](#pgo-run)
* [`pgo setup`](#pgo-setup)
* [`pgo train`](#pgo-train)
* [`pgo update`](#pgo-update)

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

_See code: [src/commands/app.ts](https://github.com/skafos/parago-cli/blob/v0.0.1/src/commands/app.ts)_

## `pgo create [PROJECT]`

Create a new Parago project

```
USAGE
  $ pgo create [PROJECT]

OPTIONS
  -g, --generator=generator  (required) Generator to use to create project.
  -h, --help                 Shows this help message
  -y, --yes                  Answers all prompts with defaults.
  --env=env                  Sets environment variables, overriding project config file)

EXAMPLE
  $ pgo create myproject
```

_See code: [src/commands/create.ts](https://github.com/skafos/parago-cli/blob/v0.0.1/src/commands/create.ts)_

## `pgo data [ACTION] [LOAD]`

Data management using provided commands in config file

```
USAGE
  $ pgo data [ACTION] [LOAD]

ARGUMENTS
  ACTION  Cleans data using command in config file
  LOAD    Loads data using command in config file

OPTIONS
  -h, --help  Shows this help message
  --env=env   Sets environment variables, overriding project config file)

EXAMPLES
  $ pgo data clean
  $ pgo data load
```

_See code: [src/commands/data.ts](https://github.com/skafos/parago-cli/blob/v0.0.1/src/commands/data.ts)_

## `pgo deploy`

Deploy model using defined command in config.

```
USAGE
  $ pgo deploy

OPTIONS
  -h, --help  Shows this help message
  --env=env   Sets environment variables, overriding project config file)

EXAMPLE
  $ pgo deploy
```

_See code: [src/commands/deploy.ts](https://github.com/skafos/parago-cli/blob/v0.0.1/src/commands/deploy.ts)_

## `pgo export`

Export model using defined command in config

```
USAGE
  $ pgo export

OPTIONS
  -h, --help  Shows this help message
  --env=env   Sets environment variables, overriding project config file)

EXAMPLE
  $ pgo export
```

_See code: [src/commands/export.ts](https://github.com/skafos/parago-cli/blob/v0.0.1/src/commands/export.ts)_

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

## `pgo list`

Shows a list of available generators.

```
USAGE
  $ pgo list

OPTIONS
  -h, --help  Shows this help message
  --env=env   Sets environment variables, overriding project config file)

EXAMPLE
  $ pgo train
```

_See code: [src/commands/list.ts](https://github.com/skafos/parago-cli/blob/v0.0.1/src/commands/list.ts)_

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

_See code: [src/commands/run.ts](https://github.com/skafos/parago-cli/blob/v0.0.1/src/commands/run.ts)_

## `pgo setup`

Sets up Parago.

```
USAGE
  $ pgo setup

OPTIONS
  -f, --force  If already setup, remove previous and setup as new
  -h, --help   Shows this help message
  --env=env    Sets environment variables, overriding project config file)

EXAMPLE
  $ pgo setup
```

_See code: [src/commands/setup.ts](https://github.com/skafos/parago-cli/blob/v0.0.1/src/commands/setup.ts)_

## `pgo train`

Train model using defined command in config

```
USAGE
  $ pgo train

OPTIONS
  -h, --help  Shows this help message
  --env=env   Sets environment variables, overriding project config file)

EXAMPLE
  $ pgo train
```

_See code: [src/commands/train.ts](https://github.com/skafos/parago-cli/blob/v0.0.1/src/commands/train.ts)_

## `pgo update`

Update parago

```
USAGE
  $ pgo update

OPTIONS
  -h, --help  Shows this help message
  --env=env   Sets environment variables, overriding project config file)

EXAMPLE
  $ pgo update
```

_See code: [src/commands/update.ts](https://github.com/skafos/parago-cli/blob/v0.0.1/src/commands/update.ts)_
<!-- commandsstop -->
