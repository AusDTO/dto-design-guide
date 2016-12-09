UI-Kit aims to be WCAG2 AA compliant, and AAA where possible and appropriate.

Run accessibility tests:

{% highlight shell %}
npm test
{% endhighlight %}

These tests are part of our build process, and are intended to catch common mistakes. Pa11y uses the <a href="http://squizlabs.github.io/HTML_CodeSniffer/" rel="external">HTML_CodeSniffer</a>, which we also use for manual testing.

Where possible we also test with users. These sessions commonly test products that use the UI-Kit, because it is difficult for us to test our components and patterns in isolation.

In the future we intend to also be audited.
