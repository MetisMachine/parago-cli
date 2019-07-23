# Parago - Machine Learning Generator
**Parago** is a command line tool that we use internally to rapidly build machine learning models, making it easy to customize for new use cases. Inspired by the likes of [Yeoman](https://yeoman.io/), [Homebrew](https://brew.sh) and even [NPM](https://www.npmjs.com), Parago allows you to dive into machine learning by *doing*.

By abstracting common machine learning patterns and tasks, Parago is simple enough to fit in to existing workflows and development habits. Better yet, contributions of various machine learning generators come straight from experts in the community!

## Why Parago?
Given the wide array of tools and technologies created to drive ML solutions, building & deploying machine learning models for apps *should* be simpler. At [Skafos](https://skafos.ai), we are tired of losing countless hours:
- learning different training frameworks
- fighting configuration and infrastructure
- customizing every aspect of each new ML solution.. *why start from scratch?*

If you are like us, you would rather focus that time working on your apps. So we built Parago.

## Core Tenets
At [Skafos](https://skafos.ai), we are a building tools for developers using community supported tools. We want to give back to the community that has helped us get to where we are. Since we released this under Apache2, we're hoping to work with YOU to develop a tool that we not only need, but believe will help others on the journey as well.

Our tenets:
* **Easy-to-use:** Focus on building apps, not data science
* **Familiarity:** No wasted hours learning a new tool
* **Learn-as-you-build:** Ship apps while you learn
* **Extensive Library:** Have many model generators to choose from
* **Ready To Deploy:** Export to Core ML, TFLite and others formats to use in your apps

## Installation

Install with npm:
```bash
$ npm install -g parago
```

# Usage
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

# Commands
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

_See code: [src/commands/data.ts](https://github.com/skafos/parago-cli/blob/v0.0.3/src/commands/data.ts)_

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

_See code: [src/commands/deploy.ts](https://github.com/skafos/parago-cli/blob/v0.0.3/src/commands/deploy.ts)_

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

_See code: [src/commands/export.ts](https://github.com/skafos/parago-cli/blob/v0.0.3/src/commands/export.ts)_

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

_See code: [src/commands/list.ts](https://github.com/skafos/parago-cli/blob/v0.0.3/src/commands/list.ts)_

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

_See code: [src/commands/train.ts](https://github.com/skafos/parago-cli/blob/v0.0.3/src/commands/train.ts)_

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

_See code: [src/commands/update.ts](https://github.com/skafos/parago-cli/blob/v0.0.3/src/commands/update.ts)_
<!-- commandsstop -->

## Managing Environments
Environment setup is a hard problem to solve globally, especially when it comes to machine learning projects. Until we have a better solution (give us some ideas/feedback), we leave this up to the user to setup a virtual environment using [Conda](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html).

Each generator will have an `environment.yml` file included for you. Create a new [conda environment](https://docs.conda.io/projects/conda/en/latest/user-guide/getting-started.html#managing-environments) for the project with:
```
conda env create -f environment.yml
```
Activate:
```
conda activate <env-name>
```
Deactivate:
```
conda deactivate
```

## Example: Image Classification

Use this to build an app that allows you to classify objects within an image:

```bash
# List what model generators are available
pgo list

> Available Generators.
    - turicreate-image-classifier   : classify objects within an image

# Create a project with an Image Classification generator
pgo create myImageClassifer -g turicreate-image-classifier

# Go to that directory
cd myImageClassifier

# Create the conda virtual env
conda env create -f environment.yml

# Activate the conda virtual env
conda activate turicreate-image-classifier

# Pull down the default data. You can change this whenever you want to customize
pgo data load

# Go ahead and train the models with it's defaults
pgo train

#Export the trained model to your deploy target
pgo export --output=coreml
```

Documentation and the sort will be here when we release this July.

## Submitting Your Own Generator
Instructions on how to make generators will also be part of the July release.  That said, you will be able to make your own and share with the community.

## Contributing
Guidelines for contributions will also be made available this July. If you want to help, send us an email at [hello@skafos.ai](mailto:hello@skafos.ai).


## Get In Touch
While we are getting ready and getting all our docs and such in place, we would love more involvement and are wide open to feedback, inspirations and ideas. Please throw a **star** or **watch**  or even an **[issue](https://github.com/skafos/perago/issues)** on Parago, or throw out a **[tweet](https://twitter.com/intent/tweet?text=Check%20out%20https://github.com/skafos/perago%20if%20you%20are%20looking%20for%20an%20easier%20way%20to%20build%20machine%20learning%20models%20for%20your%20apps.)**.

Feel free to email us at [hello@skafos.ai](mailto:hello@skafos.ai).
