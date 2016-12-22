{% assign ID = "responsive-breakpoints" %}

{% capture content %}
#### Customising elements

If you give an element a modified grid setting consider the implications for all breakpoints. The Digital Service Standard recommends you <a href="https://www.dto.gov.au/standard/6-consistent-and-responsive/" rel="external">build using mobile first design principles</a>.

Please also consider the [font size]({{ site.baseurl }}/foundations/typography/index.html#typeface) at different breakpoints.

{% highlight scss %}
$mobile: new-breakpoint(min-width 420px 8);
$tablet: new-breakpoint(min-width 768px 12);
$desktop: new-breakpoint(min-width $max-width 16);
{% endhighlight %}

{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
