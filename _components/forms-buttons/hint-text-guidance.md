{% assign ID = "hint-text" %}

{% capture content %}
- The hint text should be above the form field. It should always visible.
- Use ARIA tags to make sure screen readers can read hint text correctly.
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
