# Parago - Machine Learning Generator
**Parago** is a command line tool to help you rapidly create machine learning models by:

- curating a list of community-submitted templates (*called Generators*)
- abstracting common machine learning patterns and tasks into unified commands

Inspired by the likes of [Yeoman](https://yeoman.io/), [Homebrew](https://brew.sh) and even [NPM](https://www.npmjs.com), Parago allows you to dive into machine learning by *doing*.

## Why Parago?
Given the wide array of tools and technologies created to drive ML solutions, building & deploying models for apps *should* be simpler. At [Skafos](https://skafos.ai), we are tired of losing countless hours:
- learning different training frameworks
- fighting configuration and infrastructure
- customizing every aspect of each new ML solution *...why start from scratch?*

If you are like us, you would rather focus that time working on your apps. So we built Parago.


## Installation

Install with npm:
```bash
$ npm install -g parago
```

## Image Classification Example

Use **Parago** to create an image classifier that can identify cats and dogs. You can also skip right to the command & usage [**Documentation**](./documentation.md).


#### List Available Generators
```bash
$ pgo list

> Available Generators.
    - turicreate-image-classifier   : classify objects within an image
```

#### Create a new Project from a Generator
```bash
# Create project and enter the directory
$ pgo create myImageClassifer -g turicreate-image-classifier
$ cd myImageClassifier
```

#### Environment Setup
Environment setup is a hard problem to solve globally, especially when it comes to machine learning projects. Until we have a better solution (give us some ideas/feedback), we leave this up to the user to setup a virtual environment using [Conda](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html).

Each generator will have an `environment.yml` file included.
```bash
# Create and activate the conda Python environment
$ conda env create -f environment.yml
$ conda activate turicreate-image-classifier
```

#### Load Training Data
```bash
$ pgo data load --env data_src=cats_dogs
```

#### Train Model
```bash
$ pgo train --env epochs=30
```

#### Export to Core ML Format
```bash
$ pgo export --env output=coreml
```

For more details, checkout the full command & usage [**Documentation**](./documentation.md).

_____

## Submitting Your Own Generator
Parago is built on generators submitted by experts in the community. Each generator includes a set of commands, demonstrated above, and can be customized to meet the needs of your use-case. **Want to submit a generator for others to pull and use?** Great!

Clone the [Generator Repo](https://github.com/skafos/generators) and submit a PR. Follow the structure of the examples listed.

## Contributing
Guidelines for contributions will also be made available this July. If you want to help, send us an email at [hello@skafos.ai](mailto:hello@skafos.ai).

## Core Tenets
At [Skafos](https://skafos.ai), we are a building tools for developers using community supported tools. We want to give back to the community that has helped us get to where we are. Since we released this under Apache2, we're hoping to work with YOU to develop a tool that we not only need, but believe will help others on the journey as well.

Our tenets:
* **Easy-to-use:** Focus on building apps, not data science
* **Familiarity:** No wasted hours learning a new tool
* **Learn-as-you-build:** Ship apps while you learn
* **Extensive Library:** Have many model generators to choose from
* **Ready To Deploy:** Export to Core ML, TFLite and others formats to use in your apps

## Get In Touch
We would love more involvement and are wide open to feedback, inspirations and ideas. Please throw a **star** or **watch**  or even an **[issue](https://github.com/skafos/perago/issues)** on Parago, or throw out a **[tweet](https://twitter.com/intent/tweet?text=Check%20out%20https://github.com/skafos/perago%20if%20you%20are%20looking%20for%20an%20easier%20way%20to%20build%20machine%20learning%20models%20for%20your%20apps.)**.

Feel free to email us at [hello@skafos.ai](mailto:hello@skafos.ai).
