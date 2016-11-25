---
layout: default
---

# Getting started

## What is this?

UI-Kit is 2 things:

1. a draft design guide to build an accessible standardised look and feel for GOV.AU projects: [gov-au-ui-kit.apps.staging.digital.gov.au](http://gov-au-ui-kit.apps.staging.digital.gov.au/)
 common-use [HTML templates](/examples)
2. a lean and frugal CSS & JS framework (found in `assets/`) that you can
include in your project:

**Link to precompiled minified files**

```
<link rel="stylesheet" type="text/css" href="https://gov-au-ui-kit.apps.staging.digital.gov.au/latest/ui-kit.min.css"/>
<script type="text/javascript" src="https://gov-au-ui-kit.apps.staging.digital.gov.au/latest/ui-kit.min.js"></script>
```

GOV.AU UI-Kit is currently in early draft release. You can help us build it by [contributing](CONTRIBUTING.md).

The [/docs/](https://github.com/AusDTO/gov-au-ui-kit/tree/develop/docs) folder contains draft documentation on experimental work. For example, how to install UI-Kit for use with `webpack`.

### Features

- <a href="https://necolas.github.io/normalize.css/" rel="external">Normalize</a>.
- <a href="http://bourbon.io/" rel="external">Bourbon</a>, version 4.2.7.
- <a href="http://neat.bourbon.io/" rel="external">Neat</a>, and settings for a grid framework with some good defaults.
- Basic styling for content with some good typographic coverage.
- Basic styling for UI elements (eg `input`, `label`, etc).

For a full list of features see the [CHANGELOG](CHANGELOG.md).

### Accessibility

The framework is built on a solid accessible HTML foundation. We follow a philosophy of <a href="https://en.wikipedia.org/wiki/Progressive_enhancement" rel="external">progressive enhancement</a> over <a href="https://en.wikipedia.org/wiki/Fault_tolerance" rel="external">graceful degradation</a> to produce accessible components by default.

UI Kit aims to be WCAG2 AA compliant, and AAA where possible.

We use automated testing:
- WCAG 2.0 criteria using <a href="http://squizlabs.github.io/HTML_CodeSniffer/" rel="external">HTML_CodeSniffer</a>
- HTML validation using <a href="http://validator.github.io/validator/" rel="external">Nu HTML Checker</a>.

We are working on:
- manual evaluation using <a href="http://wave.webaim.org/" rel="external">Wave by WebAIM</a>
- manual checking of page structure, content and keyboard navigation
- testing with users and assistive technologies
- an audit.

### Browser support
Read [cross browser and device support](BROWSER-SUPPORT.md) table.

The kit uses a [conditional styling mixin for specific versions of IE](https://github.com/AusDTO/gov-au-ui-kit/tree/develop/assets/sass/_ie.scss). Use this when extending the kit.

We are working on:

- automated browser testing as part of our build process
- manual testing of all CSS, JS and markup
- documenting browser support for each component.

## What this isn't

This is not yet a complete design or design system. This is the starting point that will develop with your help.

## Who is this for?

Teams building Australian Government sites. This was designed for GOV.AU teams, but we welcome use outside of federal government.

## How is this related to the Digital Service Standard?

The <a href="https://www.dto.gov.au/standard/" rel="external">Digital Service Standard</a> requires teams to <a href="https://www.dto.gov.au/standard/6-consistent-and-responsive/" rel="external">build services using common design patterns</a>. This is draft work on the framework and guidance that will eventually become the design patterns for digital content.

You should use this with the <a href="http://content-style-guide.apps.staging.digital.gov.au/" rel="external">draft <strong>Content Style Guide</strong></a> for Digital Transformation Office projects.

## Project goal

This framework is in active development.

Goal: build a lean and frugal CSS/SCSS framework to make building GOV.AU easier. It should:

- provide base consistency
- allow for easier rapid prototyping directly in the browser
- should not get in the way of customised design needs.

### Releases

See [RELEASING.md](RELEASING.md) and [CHANGELOG.md](CHANGELOG.md).

We aim to provide stable, usable releases at the end of each sprint.

### Deprecation

We are wary about breaking changes. We will work to ensure we will gracefully deprecate any changes that cause things to break.

## Copyright & license

18F GOV.UK

Copyright Digital Transformation Office. <a href="(https://github.com/AusDTO/gov-au-ui-kit/blob/master/LICENSE" rel="external license">Licensed under the MIT license</a>.
