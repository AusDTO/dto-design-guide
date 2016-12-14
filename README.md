# DTA Design Guide

[![Build passing/failing](https://circleci.com/gh/AusDTO/gov-au-ui-kit.svg?style=shield)](https://circleci.com/gh/AusDTO/gov-au-ui-kit)
[![license link](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/AusDTO/dto-design-guide/master/README.md)
[![Latest release](https://img.shields.io/github/release/AusDTO/gov-au-ui-kit.svg?maxAge=1209600)](https://github.com/AusDTO/gov-au-ui-kit/releases)


How to use the UI-Kit CSS framework to build accessible and usable sites.

---

## Table of contents
1. [Development](#development)
1. [Contributing](#contributing)
1. [Copyright & license](#copyright--license)

----------------------------------------------------------------------------------------------------------------------------------------------------------------

## Development

Development dependencies:

* Ruby (= 2.3.1)
* jekyll (= 3.3.1)
* Node (>= 6)

Clone the repo:

```shell
git clone https://github.com/AusDTO/dto-design-guide.git
git submodule init
git submodule update
```

Install dependencies and set up project:

```shell
cd dto-design-guide
bundle install && yarn
```

To generate the `uikit.json` and move the template files run this.
_(You only have to run this once after initial pulling or after the submodule version has changed)_

```shell
npm start
```

Fire up Jekyll:

```shell
jekyll serve --watch --incremental
```

Open the site at [http://127.0.0.1:4000/](http://127.0.0.1:4000/)

----------------------------------------------------------------------------------------------------------------------------------------------------------------

### Updating content from UI-Kit

This guide includes the [UI-Kit](https://github.com/AusDTO/gov-au-ui-kit) as a
[git submodule](https://www.kernel.org/pub/software/scm/git/docs/user-manual.html#submodules) to `_assets/vendor/dto-ui-kit`.

```
├── _assets
│   └── vendor
│       └── dto-ui-kit
```

The node script in `./generate-json.js` will be run with `npm start` and extracts out all template files and puts them into the `_includes/templates` folder
for jekyll to reuse. The script also generates the `_data/uikit.json` after it parses the ui kit via [KSS](https://github.com/kneath/kss).

```
├── _data
│   └── uikit.json
├── _includes
│   └── templates
```

----------------------------------------------------------------------------------------------------------------------------------------------------------------

## Contributing

Open an issue first to discuss potential changes/additions. We encourage you to read our
[Contributor Code of Conduct](https://github.com/AusDTO/gov-au-ui-kit/blob/master/code_of_conduct.md). By ensuring that all contributors follow this guide we
can maintain an inclusive and friendly community.

## Copyright & license

Copyright Digital Transformation Agency. Licensed under the [MIT license](https://github.com/AusDTO/dto-design-guide/blob/master/LICENSE.md).
