UI&#8209;Kit aims to be WCAG2 AA compliant, and AAA where possible.

Run accessibility tests:

{% highlight shell %}
npm test
{% endhighlight %}

Check you meet [Pa11y's requirements for automated accessibility testing](https://github.com/pa11y/pa11y#requirements).

We use automated testing:
- WCAG 2.0 criteria using <a href="http://squizlabs.github.io/HTML_CodeSniffer/" rel="external">HTML_CodeSniffer</a>
- HTML validation using <a href="http://validator.github.io/validator/" rel="external">Nu HTML Checker</a>.

We are working on:
- manual evaluation using <a href="http://wave.webaim.org/" rel="external">Wave by WebAIM</a>
- manual checking of page structure, content and keyboard navigation
- testing with users and assistive technologies
- an audit.
