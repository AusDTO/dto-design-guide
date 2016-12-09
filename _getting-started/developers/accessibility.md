UI-Kit aims to be WCAG2 AA compliant, and AAA where possible and appropriate.

Run accessibility tests:

{% highlight shell %}
npm test
{% endhighlight %}

These tests are part of our build process.

We use <a href="https://github.com/pa11y/pa11y" rel="external">Pa11y</a> for the automated testing. Pa11y in turn uses <a href="http://squizlabs.github.io/HTML_CodeSniffer/" rel="external">HTML_CodeSniffer</a>, which we also use for manual testing.

Use an automated accessibility testing to catch common mistakes. Automated testing is not a substitution for testing with users.

Where possible we also test with users. These sessions commonly test products that use the UI-Kit, because it is difficult for us to test our components and patterns in isolation.

In the future we intend to also be audited.
