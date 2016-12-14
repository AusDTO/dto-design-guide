{% assign ID = "special-link-blocks" %}

{% capture content %}
- Groups of links span from 2 columns (`$mobile`) up to 4 columns (`$tablet` and `$desktop`).
- You can use special link blocks in headers or body (within an `article`).
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
