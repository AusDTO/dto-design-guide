{% assign ID = "in-page-tabs" %}

{% capture content %}
- Use tab navigation in the main content area only.
- Client-side context is not affected by the tabs.
- Tabs wrap on top of each other for smaller breakpoints.
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
