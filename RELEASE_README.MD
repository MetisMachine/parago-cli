# Parago - Machine Learning Generator
We believe that building machine learning models for apps should be simpler. At Skafos, we are tired of losing countless hours learning machine learning frameworks, fighting configs, and clicking around in Jupyter Notebooks. If you are like us, you would rather focus that time working on your apps. So we built Parago.

Parago is a command line tool that we use internally to quickly build machine learning models including making it easy to customize these models for our use cases. It is inspired from the likes of [Yeoman](https://yeoman.io/), [Homebrew](https://brew.sh) and even a little [NPM](https://www.npmjs.com). The idea is that we can dive into machine learning by doing, and Parago gives a starting point and helps us dive in. By using common patterns, we wanted to make it simple enough to fit in to our existing workflow and development habits.

At Skafos, we are a building tools for developers using many community supported tools. We want to give back to the community that has helped us get to where we are. We wanted to release this, under Apache2, and work with the community to develop a tool that we not only need, but believe will help others as well.

While we are getting ready and getting all our docs and such in place, we would love more involvement and are wide open to feedback, inspirations and ideas. Please throw a **star** or **watch**  or even an **[issue](https://github.com/skafos/perago/issues)** on Parago, or throw out a [tweet](https://twitter.com/intent/tweet?text=Check%20out%20https://github.com/skafos/perago%20if%20you%20are%20looking%20for%20an%20easier%20way%20to%20build%20machine%20learning%20models%20for%20your%20apps.). 

Parago Tenets
--------------------------------------------------

* **Easy-to-use:** Focus on building apps, not data science
* **Familiarity:** No wasted hours learning a new tool
* **Learn-as-you-build:** Ship apps while you learn
* **Extensive Library:** Have many model generators to choose from
* **Ready To Deploy:** Export to Core ML, TFLite and others formats to use in your apps

Installation
--------------------------------------------------
```bash
brew install parago
```

Example: Image Classification
--------------------------------------------------
Use this to build an app that allows you to identify objects within an image:

```bash
# List what model generators are available
pgo list

> Available Generators.
    - ImageClassifier   : Identify specific images within an image
    - ObjectDetection   : Idenfity what objects are in an image or video
    - Recommender       : Personilize apps or the content displayed in your apps 

# Create a model project with an Image Classification generator
pgo create myImageClassifer --generator=Recommender

# Go to that directory
cd myImageClassifier

# Pull down the default data. You can change this whenever you want to customise 
pgo data --load

# Go ahead and train the models with it's defaults
pgo train

#Export the trained model to your deploy target
pgo export --target=coreml
```

Documentation and the sort will be here when we release this July.

Submitting Your Own Generator
--------------------------------------------------
Instructions on how to make generators will also be part of the July release.  That said, you will be able to make your own and share with the community.

Contributing
--------------------------------------------------
Guidelines for contributions will also be made available this July.  We want you to help!

Get In Touch
--------------------------------------------------
Email us at [hello@skafos.ai](mailto:hello@skafos.ai)
