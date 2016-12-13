{% assign ID = "table-of-contents" %}

{% capture content %}
- Make sure you use the correct header level.
- Users with modern browsers will see a smooth scroll down the page.
{% endcapture %}

{% include guidance.liquid  content = content  ID = ID %}
