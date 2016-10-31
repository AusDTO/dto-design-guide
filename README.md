# DTO Design Guide

How to use the UI-Kit CSS framework to build accessible and usable sites.

---

## Table of contents
1. [Development](#development)
1. [Contributing](#contributing)
1. [Copyright & license](#copyright--license)

## Development

Development dependencies:

* Ruby (= 2.3.1)
* Jekyll (= 3.2.1)
* Jekyll Assets (= 2.2.8)
* Rouge (~> 1.7)

Clone the repo:

```
git clone https://github.com/AusDTO/dto-design-guide.git
```

Install dependencies and set up project:

```
cd dto-design-guide
bundle install && bundle exec rake init
```

**Note:** If you see the error `bundle: command not found`, run `gem install bundler` then try again.

Fire up Jekyll:

```
bundle exec jekyll serve
```

Open the site at [http://127.0.0.1:4000/](http://127.0.0.1:4000/)

### Updating content from UI Kit

This guide includes the [UI Kit](https://github.com/AusDTO/gov-au-ui-kit) as a [git submodule](https://www.kernel.org/pub/software/scm/git/docs/user-manual.html#submodules). There are two Rake tasks available for interacting with UI Kit: `uikit:install` sets up the submodule and installs UI Kit's npm dependencies and `uikit:json_comments` which pulls out the KSS comments from UI Kit's SASS files and adds it to the `_data` directory for Jekyll to use.

```
├── _data
│   └── data-sections.json
```

## Contributing

Open an issue first to discuss potential changes/additions. We encourage you to read our [Contributor Code of Conduct](https://github.com/AusDTO/gov-au-ui-kit/blob/master/code_of_conduct.md). By ensuring that all contributors follow this guide we can maintain an inclusive and friendly community.

## Copyright & license

Copyright Digital Transformation Agency. Licensed under the [MIT license](https://github.com/AusDTO/dto-design-guide/blob/master/LICENSE.md).
