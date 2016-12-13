{% assign ID = "footer-navigation" %}

{% capture content %}
UI-Kit uses CSS Flexboxes to provide a horizontal list of links:

- 2 columns for `$mobile` and `$tablet` breakpoints
- 4 columns for `$desktop` breakpoint.
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
