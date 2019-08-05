# Usage & Commands
  <!-- usage -->
```sh-session
$ npm install -g parago
$ pgo COMMAND
running command...
$ pgo (-v|--version|version)
parago/0.0.3 darwin-x64 node-v12.5.0
$ pgo --help [COMMAND]
USAGE
  $ pgo COMMAND
...
```
<!-- usagestop -->

**Available Commands**:
  <!-- commands -->
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

_See code: [src/commands/create.ts](https://github.com/skafos/parago-cli/blob/v0.0.3/src/commands/create.ts)_

## `pgo data [ACTION] [LOAD]`

Training data management using provided commands in `parago.yml` under `data:`.

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

_See code: [src/commands/data.ts](https://github.com/skafos/parago-cli/blob/v0.0.3/src/commands/data.ts)_

## `pgo deploy`

Model deplpoyment using defined command in `parago.yml` under `deploy:`.

```
USAGE
  $ pgo deploy

OPTIONS
  -h, --help  Shows this help message
  --env=env   Sets environment variables, overriding project config file)

EXAMPLE
  $ pgo deploy
```

_See code: [src/commands/deploy.ts](https://github.com/skafos/parago-cli/blob/v0.0.3/src/commands/deploy.ts)_

## `pgo export`

Model export/conversion using defined command in `parago.yml` under `export:`.

```
USAGE
  $ pgo export

OPTIONS
  -h, --help  Shows this help message
  --env=env   Sets environment variables, overriding project config file)

EXAMPLE
  $ pgo export
```

_See code: [src/commands/export.ts](https://github.com/skafos/parago-cli/blob/v0.0.3/src/commands/export.ts)_

## `pgo help [COMMAND]`

Display help for pgo.

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

_See code: [src/commands/list.ts](https://github.com/skafos/parago-cli/blob/v0.0.3/src/commands/list.ts)_

## `pgo run`

Run user defined tasks outlined in `parago.yml` under `tasks:`.

```
USAGE
  $ pgo run

OPTIONS
  -h, --help  Shows this help message
  --env=env   Sets environment variables, overriding project config file)

EXAMPLE
  $ pgo run <task>
```

_See code: [src/commands/run.ts](https://github.com/skafos/parago-cli/blob/v0.0.3/src/commands/run.ts)_

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

_See code: [src/commands/setup.ts](https://github.com/skafos/parago-cli/blob/v0.0.3/src/commands/setup.ts)_

## `pgo train`

Train model using defined command in `parago.yml` under `train:`.

```
USAGE
  $ pgo train

OPTIONS
  -h, --help  Shows this help message
  --env=env   Sets environment variables, overriding project config file)

EXAMPLE
  $ pgo train
```

_See code: [src/commands/train.ts](https://github.com/skafos/parago-cli/blob/v0.0.3/src/commands/train.ts)_

## `pgo update`

Update Parago.

```
USAGE
  $ pgo update

OPTIONS
  -h, --help  Shows this help message
  --env=env   Sets environment variables, overriding project config file)

EXAMPLE
  $ pgo update
```

_See code: [src/commands/update.ts](https://github.com/skafos/parago-cli/blob/v0.0.3/src/commands/update.ts)_
<!-- commandsstop -->
