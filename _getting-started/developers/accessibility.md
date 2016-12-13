UI-Kit aims to be WCAG2 AA compliant, and AAA where possible and appropriate.

Run accessibility tests:

{% highlight shell %}
npm test
{% endhighlight %}

These tests are part of our build process.

We use <a href="https://github.com/pa11y/pa11y" rel="external">Pa11y</a> for the automated testing. Pa11y uses <a href="http://squizlabs.github.io/HTML_CodeSniffer/" rel="external">HTML_CodeSniffer</a>. We also use HTML_CodeSniffer for manual testing.

We use an automated accessibility testing to catch common mistakes. Automated testing is not a substitution for testing with users.

Where possible we test with users. These tests are usually on products that use the UI-Kit, because it is difficult to test components and patterns in isolation.

We plan to audit UI-Kit.
