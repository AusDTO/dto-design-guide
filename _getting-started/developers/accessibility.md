Run accessibility tests:

```
npm test
```

Check [Pa11y's requirements](https://github.com/pa11y/pa11y#requirements) to use automated accessibility testing.



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
